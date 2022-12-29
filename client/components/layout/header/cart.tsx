import { FC } from "react";
import EmptyCart from "./emptyCart";
import { useSelector } from "react-redux";
import { RootState } from "client/store/store";
import CartItem from "./cartItem";

const Cart: FC = () => {
    const products = useSelector((state: RootState) => state.cartSlice.products);

    if (products.length < 1) {
        return <EmptyCart />;
    }

    return (
        <div>
            {products.map((cartProduct) => {
                return <CartItem productData={cartProduct} key={Math.random()} />;
            })}
        </div>
    );
};

export default Cart;
