import { FC } from "react";
import { CartProductType } from "client/types/definition";

interface CartItemProps {
    productData: CartProductType;
}

const CartItem: FC<CartItemProps> = ({ productData }) => {
    return <div>{JSON.stringify(productData)}</div>;
};

export default CartItem;
