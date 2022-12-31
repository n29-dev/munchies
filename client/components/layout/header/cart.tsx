import { FC } from "react";
import EmptyCart from "./emptyCart";
import { useSelector } from "react-redux";
import { RootState } from "client/store/store";
import CartItem from "./cartItem";
import Link from "next/link";

const Cart: FC = () => {
    const { products, cartTotal } = useSelector((state: RootState) => state.cartSlice);
    let vatTotal = 0;

    if (products.length < 1) {
        return <EmptyCart />;
    }

    return (
        <div className="p-[6px] pb-0">
            {products.map((cartProduct) => {
                vatTotal += ((cartProduct.price * cartProduct.quantity!) / 100) * cartProduct.vat;
                return <CartItem productData={cartProduct} key={Math.random()} />;
            })}
            <div className="py-3 px-3 bg-yellow rounded-md border mb-1">
                <h4>
                    <span className="text-base">Total Price:</span> {cartTotal.toFixed(2)}
                </h4>
                <h4>
                    <span className="text-base">Total Vat:</span> {vatTotal.toFixed(2)}
                </h4>
                <h3 className="mt-[10px] pt-[10px] border-t border-[rgba(0,0,0,.5)]">
                    Total: {(cartTotal + vatTotal).toFixed(2)}
                </h3>
            </div>
            <Link
                href={{
                    pathname: "/checkout",
                    query: { priceTotal: cartTotal, vatTotal, total: cartTotal + vatTotal },
                }}
                className="bg-darkGreen text-center text-white rounded-md inline-block w-full py-[12px]"
                type="button"
            >
                Checkout
            </Link>
        </div>
    );
};

export default Cart;
