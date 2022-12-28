import { FC } from "react";
import Link from "next/link";
import { NavLinksType } from ".";

interface NavLinkProps {
    navLinkData: NavLinksType;
    classes?: string;
}

const NavLink: FC<NavLinkProps> = ({ navLinkData, classes }) => {
    const { link, label } = navLinkData;
    return (
        <li className={`text-lg leading-[20px] text-white p-[6px] group ${classes || ""}`} key={Math.random()}>
            <Link
                className="relative before:content-[''] before:absolute before:left-0 before:block before:w-0 before:h-[2px] before:bg-[white] before:top-[100%] before:transition-[width] before:duration-[300ms] group-hover:before:w-full"
                href={link}
            >
                {label}
            </Link>
        </li>
    );
};

export default NavLink;
