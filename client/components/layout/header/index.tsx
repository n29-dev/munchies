import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Logo from "@public/images/logo.svg";
import Navbar from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Modal from "@components/global/modal";
import SearchBar from "./searchBar";
import useDropdownToggle from "@hooks/useDropdown";
import Cart from "./cart";

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
    // header sticky
    const headerRef = useRef<HTMLHeadingElement | null>(null);

    const headerStickyHandler: EventListener = () => {
        if (window.scrollY > 250) {
            headerRef.current?.classList.add("header-sticky");
        } else {
            headerRef.current?.classList.remove("header-sticky");
        }
    };

    useEffect(() => {
        if (!(typeof window === undefined)) {
            window.addEventListener("scroll", headerStickyHandler);
        }
    });

    // search bar modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // card dropdown
    const [isCartDropdownOpen, toggle, cartDropdownRef] = useDropdownToggle({ outClickClose: true });

    return (
        <>
            <header className="bg-darkGreen py-1 z-20 relative" ref={headerRef}>
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
                            <button
                                className="p-1"
                                type="button"
                                onClick={() => {
                                    setIsModalOpen(true);
                                }}
                            >
                                <FontAwesomeIcon className="w-[22px] text-white" icon={faSearch} />
                            </button>
                            {/* cart */}
                            <div className="relative">
                                <button className="p-1" type="button" onClick={toggle.toggle}>
                                    <FontAwesomeIcon className="w-[22px] text-white" icon={faShoppingCart} />
                                </button>
                                <div
                                    className={`dropdown min-w-[310px] border-[1px] border-yellow ${
                                        isCartDropdownOpen && "active"
                                    }`}
                                    ref={cartDropdownRef}
                                >
                                    <Cart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Modal classes="min-w-[500px] py-3" isModalOpen={isModalOpen}>
                <SearchBar
                    closeModal={() => {
                        setIsModalOpen(false);
                    }}
                />
            </Modal>
        </>
    );
};

export default Header;
