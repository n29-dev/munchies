import { FC } from "react";
import Input from "@components/global/input";
import { useOrderQuery } from "client/store/slices/productsApi";

interface CheckoutForm {
    classes: string;
}

const CheckoutForm: FC<CheckoutForm> = ({ classes }) => {
    // const { isError, isLoading, isSuccess } = useOrderQuery({
    //     data
    // });

    return (
        <div className={`${classes}`}>
            <form action="">
                <div className="flex gap-3 mb-3">
                    <Input required type="text" placeholder="Name" />
                    <Input required type="email" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <Input required type="number" placeholder="Phone" />
                </div>
                <button className="bg-yellow text-[17px] p-2 rounded-md text-center block w-full" type="button">
                    Order
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
