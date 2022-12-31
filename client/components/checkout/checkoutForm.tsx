/* eslint-disable react/display-name */
import React, { FC, useEffect, useRef, useState } from "react";
import Input from "@components/global/input";
import { useAddOrderMutation } from "client/store/slices/productsApi";

interface CheckoutFormProps {
    classes: string;
}

const CheckoutForm = React.forwardRef<HTMLFormElement, CheckoutFormProps>(({ classes }, ref) => {
    return (
        <div className={`${classes}`}>
            <form ref={ref}>
                <div className="flex gap-3 mb-3">
                    <Input required type="text" placeholder="Name" name="customerName" />
                    <Input required type="text" placeholder="Address" name="address" />
                </div>
                <div className="mb-3">
                    <Input required type="number" placeholder="Phone" name="number" />
                </div>
                <button className="bg-yellow text-[17px] p-2 rounded-md text-center block w-full" type="submit" name="submit">
                    Order
                </button>
            </form>
        </div>
    );
});

export default CheckoutForm;
