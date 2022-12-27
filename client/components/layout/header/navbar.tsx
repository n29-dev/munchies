import { FC } from "react";
import { NavLinksType } from ".";
import Link from "next/link";

interface NavbarProps {
    navLinks: NavLinksType[];
}

const Navbar: FC<NavbarProps> = ({ navLinks }) => {
    return (
        <nav>
            <ul className="flex gap-[37px] items-center">
                {navLinks.map(({ link, label }) => {
                    return (
                        <li className="text-lg leading-[20px] text-white p-[6px]" key={Math.random()}>
                            <Link href={link}>{label}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
