import Head from "next/head";
import Layout from "@components/layout";
import Hero from "@components/home/hero";

export default function Home() {
    return (
        <>
            <Head>
                <title>Munchies</title>
            </Head>
            <Layout>
                <Hero />
            </Layout>
        </>
    );
}
