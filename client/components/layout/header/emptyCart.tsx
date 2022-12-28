import { FC } from "react";
import Image from "next/image";
import CartEmtyThumb from "@public/images/cart-empty.png";

const EmptyCart: FC = () => {
    return (
        <div className="min-h-[150px] flex flex-col items-center justify-center">
            <p className="font-bold text-yellow mb-3 text-[17px]">Your cart is empty</p>
            <Image className="w-[120px] h-auto" src={CartEmtyThumb} alt="Cart Empty" />
        </div>
    );
};

export default EmptyCart;
