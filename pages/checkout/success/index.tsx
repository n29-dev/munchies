import { FC } from "react";
import Layout from "@components/layout";
import SuccessfulImage from "@public/images/successful-img.png";
import Image from "next/image";

const SuccessPage: FC = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center py-[100px]">
                <h1 className="text-[32px] font-semibold">Your Order has been placed!</h1>
                <Image src={SuccessfulImage} alt="successufl" />
            </div>
        </Layout>
    );
};

export default SuccessPage;
