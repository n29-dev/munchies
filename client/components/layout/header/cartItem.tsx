import { FC } from "react";
import { CartProductType } from "client/types/definition";

interface CartItemProps {
    productData: CartProductType;
}

const CartItem: FC<CartItemProps> = ({ productData }) => {
    return (
        <div className="bg-gray-100 p-2 mb-[6px] border border-gray-300 rounded-md">
            <div className="flex items-center justify-between">
                <h3 className="font-medium">
                    {productData.name} / {productData.addon.name}
                </h3>
                <span className="inline-block w-[25px] h-[25px] rounded-full bg-yellow text-center leading-[25px] text-[14px]">
                    {productData.quantity}
                </span>
            </div>
            <div className="flex gap-3">
                <p className="text-[12px]">Price: {productData.price}tk</p>
                <p className="text-[12px]">Vat: {productData.vat}%</p>
            </div>
        </div>
    );
};

export default CartItem;
