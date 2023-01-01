import { createSlice } from "@reduxjs/toolkit";
import { CartProductType, ProductType } from "client/types/definition";
import { PayloadAction } from "@reduxjs/toolkit";
import { generateVariationKey } from "client/lib/utils";

interface CartState {
    products: CartProductType[];
    quantities: Record<string, Record<string, any>>;
    cartTotal: number;
}

const initialState: CartState = { products: [], quantities: {}, cartTotal: 0 };

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addProductToCart(
            state: CartState,
            action: PayloadAction<{ quantity_available: number; productData: CartProductType }>
        ) {
            const newProduct = action.payload.productData;
            const quantity_available = action.payload.quantity_available;

            const productFound = state.products.find(
                (p) => p.id === newProduct.id && p.addon.name === newProduct.addon.name
            );
            // if product not found add product to quantity and products
            if (!productFound) {
                state.products.push(newProduct);
                const keyString = generateVariationKey(newProduct.id, newProduct.addon.name);
                const newQuanObj: Record<string, any> = {};

                if (state.quantities[`${newProduct.id}`]) {
                    if (
                        state.quantities[`${newProduct.id}`].total < state.quantities[`${newProduct.id}`].max_quantity
                    ) {
                        state.quantities[`${newProduct.id}`][keyString] = 1;
                        state.quantities[`${newProduct.id}`].total++;
                        state.cartTotal += newProduct.addon.price;
                    }
                } else {
                    newQuanObj[keyString] = 1;
                    newQuanObj.max_quantity = quantity_available;
                    newQuanObj.total = 1;
                    state.quantities[`${newProduct.id}`] = newQuanObj;
                    state.cartTotal += newProduct.addon.price;
                }

                // if product found check if total is less than max_available
            } else {
                const keyString = generateVariationKey(newProduct.id, newProduct.addon.name);

                if (
                    state.quantities[`${productFound.id}`].total < state.quantities[`${productFound.id}`].max_quantity
                ) {
                    productFound.quantity!++;
                    state.quantities[`${productFound.id}`][keyString]++;
                    state.quantities[`${productFound.id}`].total++;
                    state.cartTotal += newProduct.addon.price;
                }
            }
        },
        removeProductFromCart(state: CartState, action: PayloadAction<{ id: number; addonName: string }>) {
            const { id: productId, addonName } = action.payload;
            const productFound = state.products.find((p) => p.id === productId && p.addon.name === addonName);
            const keyString = generateVariationKey(productId, addonName);
            // if quanity > 1 decrease following
            if (productFound && productFound.quantity! > 1) {
                productFound.quantity!--;
                state.quantities[`${productId}`][keyString]--;
                state.quantities[`${productId}`].total--;
                state.cartTotal -= productFound.addon.price;
            } else {
                // else remove product and quntity info
                if (productFound?.quantity! === 1) {
                    state.cartTotal -= productFound?.addon.price!;
                }
                const products = state.products.filter((p) => !(p.id == productId && p.addon.name == addonName));
                state.products = products;
                
                if (state.quantities[`${productId}`]) {
                    state.quantities[`${productId}`].total--;
                    delete state.quantities[`${productId}`][keyString];
                }
            }
        },
    },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
