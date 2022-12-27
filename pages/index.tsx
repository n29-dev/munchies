import Head from "next/head";
import Layout from "@components/layout";
import Hero from "@components/hero";
import Blog from "@components/blog";

export default function Home() {
    return (
        <>
            <Head>
                <title>Munchies</title>
            </Head>
            <Layout>
                <Hero />
                <Blog />
            </Layout>
        </>
    );
}
