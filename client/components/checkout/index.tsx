import React, { FC, useEffect, useRef, useState } from "react";
import CheckoutForm from "./checkoutForm";
import CartItem from "@components/layout/header/cartItem";
import { RootState } from "client/store/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useAddOrderMutation } from "client/store/slices/productsApi";

const Checkout: FC = () => {
    const { products } = useSelector((state: RootState) => state.cartSlice);
    const router = useRouter();
    const { priceTotal, vatTotal, total } = router.query;

    // checkout form ref
    const checkoutFormRef = useRef<HTMLFormElement | null>(null);
    const [addOrder, { isError, isSuccess }] = useAddOrderMutation();
    const [error, setError] = useState(false);

    // function to place order
    const placeOrder = async ({
        name,
        number,
        address,
        submitBtn,
    }: {
        name: string;
        number: string;
        address: string;
        submitBtn: HTMLButtonElement;
    }) => {
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.7";

        const orderData = {
            customer: {
                name,
                number,
                address,
            },
            calculation: {
                price: priceTotal as string,
                vat: vatTotal as string,
                total: total as string,
            },
            items: products,
        };

        const result = await addOrder({ data: orderData, headers: { "x-access-user": "nazibtalukdar29@gmail.com" } });
        if (isError) {
            setError(true);
        } else {
            router.replace("checkout/successful");
        }
    };

    // form submit handler
    const submitHandler = (event: SubmitEvent) => {
        event.preventDefault();
        const name = (event.target as HTMLFormElement).customerName.value;
        const number = (event.target as HTMLFormElement).number.value;
        const address = (event.target as HTMLFormElement).address.value;
        const submitBtn = (event.target as HTMLFormElement).submit as unknown as HTMLButtonElement;

        placeOrder({ name, number, address, submitBtn });
    };

    useEffect(() => {
        console.log(checkoutFormRef.current);
        checkoutFormRef.current?.addEventListener("submit", submitHandler);
    }, []);

    if (error) {
        return (
            <div>
                <h1>Please reload and try again...! Someting went wrong.</h1>
            </div>
        );
    }

    return (
        <div className="container py-[100px]">
            <h3 className="text-[22px] leading-[22px] border-b border-black pb-3">Personal Details</h3>
            <div className="h-3"></div>
            <div className="flex gap-5">
                <CheckoutForm classes="flex-3" ref={checkoutFormRef} />
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