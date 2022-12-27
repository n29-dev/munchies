import { FC } from "react";
import Navbar from "@components/layout/header/navbar";
import { navLinks } from "@components/layout/header";
import SocialIcon from "./socailIcons";
import { faHand, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

const Footer: FC = () => {
    return (
        <footer className="bg-green pt-[30px] pb-[12px]">
            <div className="container">
                <div className="flex justify-between items-center pb-6 border-b border-b-white">
                    <div>
                        <h4 className="font-extrabold text-white text-[32px] leading-[20px]">WHAT2EAT</h4>
                    </div>
                    <div>
                        <Navbar navLinks={navLinks} />
                    </div>
                    <div className="flex gap-2">
                        <SocialIcon link="#" icon={faHand} />
                        <SocialIcon link="#" icon={faXmarkCircle} />
                    </div>
                </div>
                <div className="text-center pt-6">
                    <p className="text-[12px] leading-[20px] text-white">Copyright @2021 What2Eat</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
