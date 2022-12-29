import Head from "next/head";
import Layout from "@components/layout";
import HeroSection from "@components/hero";
import BlogSection from "@components/blog";
import ContactSection from "@components/contact";
import ProductSection from "@components/products";

export default function Home() {
    return (
        <>
            <Head>
                <title>Munchies</title>
            </Head>
            <Layout>
                <HeroSection />
                <ProductSection />
                <BlogSection />
                <ContactSection />
            </Layout>
        </>
    );
}
