import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Logo from "@public/images/logo.svg";
import Navbar from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export interface NavLinksType {
    label: string;
    link: string;
}

export const navLinks: NavLinksType[] = [
    { label: "Home", link: "#" },
    { label: "About", link: "#" },
    { label: "Menu", link: "#" },
    { label: "Blog", link: "#" },
    { label: "Contact", link: "#" },
];

const Header: FC = () => {
    const headerRef = useRef<HTMLHeadingElement | null>(null);

    const headerStickyHandler: EventListener = () => {
        if (window.scrollY > 250) {
            headerRef.current!.classList.add("header-sticky");
        } else {
            headerRef.current!.classList.remove("header-sticky");
        }
    };

    useEffect(() => {
        if (!(typeof window === undefined)) {
            window.addEventListener("scroll", headerStickyHandler);
        }
    });

    return (
        <header className="bg-darkGreen py-1" ref={headerRef}>
            <div>
                <div className="container flex justify-between items-center ">
                    {/* logo */}
                    <div>
                        <Link href="#">
                            <Image src={Logo} alt="logo" />
                        </Link>
                    </div>
                    {/* navbar */}
                    <div>
                        <Navbar navLinks={navLinks} />
                    </div>
                    {/* buttons */}
                    <div className="flex items-center gap-7">
                        <button className="p-1" type="button">
                            <FontAwesomeIcon className="w-[22px] text-white" icon={faSearch} />
                        </button>
                        <button className="p-1" type="button">
                            <FontAwesomeIcon className="w-[22px] text-white" icon={faShoppingCart} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
