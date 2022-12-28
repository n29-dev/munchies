import { FC } from "react";
import { NavLinksType } from ".";
import Link from "next/link";
import NavLink from "./navLink";

interface NavbarProps {
    navLinks: NavLinksType[];
}

const Navbar: FC<NavbarProps> = ({ navLinks }) => {
    return (
        <nav>
            <ul className="flex gap-[37px] items-center">
                {navLinks.map((navLinkData) => {
                    return <NavLink navLinkData={navLinkData} key={Math.random()} />;
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
