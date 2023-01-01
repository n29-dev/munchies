import { FC } from "react";
import { Addon, CartProductType, ProductType } from "client/types/definition";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons";
import useDropdownToggle from "@hooks/useDropdown";
import Variation from "./variation";
import { deepClone } from "../../lib/utils";
import { addProductToCart, removeProductFromCart } from "../../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "client/store/store";

interface ProductPropsType {
    productData: ProductType;
}

const createCartProduct = (product: ProductType, productAddon: Addon): CartProductType => {
    const newProduct = deepClone<{
        addons?: any;
        quantity_available?: number;
        image?: string;
        quantity?: number;
        addon?: any;
    }>(product);
    const newAddon = deepClone<{ id: number; is_default?: boolean }>(productAddon);

    delete newProduct.addons;
    delete newProduct.quantity_available;
    delete newProduct.image;

    delete newAddon.id;
    delete newAddon.is_default;

    newProduct.addon = newAddon;
    newProduct.quantity = 1;

    return newProduct as CartProductType;
};

const Product: FC<ProductPropsType> = ({ productData }: ProductPropsType) => {
    const dispatch = useDispatch();

    const { image, name, price, addons } = productData;
    const [variationsDropdown, toggle] = useDropdownToggle({});

    // function add to cart
    const addToCart = (productAddon: Addon) => {
        dispatch(
            addProductToCart({
                productData: createCartProduct(productData, productAddon),
                quantity_available: productData.quantity_available,
            })
        );
    };
    // funtion remove from cart
    const removeFromCart = (productAddon: Addon) => {
        dispatch(removeProductFromCart({ id: productData.id, addonName: productAddon.name }));
    };

    // check quantity
    const productQuanObj = useSelector((store: RootState) => store.cartSlice.quantities[`${productData.id}`]);

    return (
        <>
            <div className="bg-white">
                <div className="h-[300px] overflow-hidden rounded-tr-lg rounded-tl-lg">
                    <Image
                        className="w-full h-full object-cover hover:scale-[1.1] transition-all duration-[400ms]"
                        width={500}
                        height={500}
                        src={image}
                        alt={name}
                    />
                </div>
                <div className="py-4 px-3">
                    <div className="flex items-baseline justify-between mb-4">
                        <h3>{name}</h3>
                        <h3>${price}</h3>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="inline-block py-1 px-2 rounded-md bg-[#F7F8FA] mr-2">
                                <FontAwesomeIcon className="h-[16px] w-auto" icon={faStar} /> 4.7
                            </span>
                            <span className="inline-block py-1 px-2 rounded-md bg-[#F7F8FA] mr-2">50-79 min</span>
                            {productQuanObj && productQuanObj.total === productQuanObj.max_quantity && (
                                <span className="inline-block py-1 px-2 rounded-md text-white bg-yellow">
                                    Stock Out
                                </span>
                            )}
                        </div>
                        <div className="relative">
                            <button
                                className="w-[28px] h-[22px] inline-flex items-center justify-center rounded-md bg-yellow"
                                type="button"
                                onClick={toggle.toggle}
                            >
                                <FontAwesomeIcon className="h-[14px] w-auto text-white" icon={faPlus} />
                            </button>
                            <div
                                className={`dropdown min-w-[200px] top-auto bottom-[calc(100%+5px)] p-2 pb-0 ${
                                    variationsDropdown && "active"
                                }`}
                            >
                                {addons.map((variationData) => {
                                    return (
                                        <Variation
                                            addToCart={addToCart}
                                            removeFromCart={removeFromCart}
                                            variationData={variationData}
                                            productId={productData.id}
                                            key={Math.random()}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
