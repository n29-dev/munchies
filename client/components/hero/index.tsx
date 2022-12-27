import { FC } from "react";
import HeroImage from "@public/images/hero-banner.png";
import Image from "next/image";
import SearhBar from "./searchBar";

const Hero: FC = () => {
    return (
        <section className="bg-darkGreen pt-[120px] pb-[160px]">
            <div className="container flex justify-between items-center">
                <div className="pr-[110px]">
                    {/* content */}
                    <h1 className="text-white text-[70px] leading-[82px] mb-8">Authentic Home food in UK</h1>
                    <p className="mb-10 pr-3 text-white">What2Eat is a courier service in which authentic home cook food is delivered to a customer.</p>
                    <SearhBar />
                </div>
                <div>
                    {/* image */}
                    <Image src={HeroImage} alt="hero-banner" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
