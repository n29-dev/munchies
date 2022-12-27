import { FC } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface SocialIconProps {
    link: string;
    icon: IconProp;
    classes?: string;
}

const SocialIcon: FC<SocialIconProps> = ({ link, icon, classes }) => {
    return (
        <Link
            className={`inline-block w-[26px] h-[26px] leading-[26px] text-center text-[#BEBEBE] bg-white rounded-[5px]  ${
                classes || ""
            }`}
            href={link}
        >
            <FontAwesomeIcon className="h-[18px] w-auto" icon={icon} />
        </Link>
    );
};

export default SocialIcon;
