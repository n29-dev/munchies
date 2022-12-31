import { useRouter } from "next/router";
import Layout from "@components/layout";
import Checkout from "@components/checkout";

export default function CheckoutPage() {
    const router = useRouter();
    return (
        <Layout>
            <Checkout />
        </Layout>
    );
}
