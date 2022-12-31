import { FC } from "react";
import CheckoutForm from "./checkoutForm";
import CartItem from "@components/layout/header/cartItem";
import { RootState } from "client/store/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Checkout: FC = () => {
    const { products } = useSelector((state: RootState) => state.cartSlice);
    const router = useRouter();
    const { priceTotal, vatTotal, total } = router.query;

    return (
        <div className="container py-[100px]">
            <h3 className="text-[22px] leading-[22px] border-b border-black pb-3">Personal Details</h3>
            <div className="h-3"></div>
            <div className="flex gap-5">
                <CheckoutForm classes="flex-3" />
                <div className="flex-1">
                    <div>
                        {products.map((cartProduct) => {
                            return <CartItem productData={cartProduct} key={Math.random()} />;
                        })}
                    </div>
                    <div className="py-3 px-3 bg-yellow rounded-md border mb-1">
                        <h4>
                            <span className="text-base">Total Price:</span> {Number(priceTotal)!.toFixed(2)}
                        </h4>
                        <h4>
                            <span className="text-base">Total Vat:</span> {Number(vatTotal)!.toFixed(2)}
                        </h4>
                        <h3 className="mt-[10px] pt-[10px] border-t border-[rgba(0,0,0,.5)]">
                            Total: {Number(total)!.toFixed(2)}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
