import { FC } from "react";
import PostThumb from "@public/images/post.png";
import Image from "next/image";
import { PostType } from ".";
import Link from "next/link";

interface PostProps {
    classes?: string;
    data: PostType;
}

const Post: FC<PostProps> = ({ classes, data }) => {
    const { description, title, imageUrl } = data;
    
    return (
        <div className={`${classes || ""}`}>
            <Image className="block w-full rounded-tr-lg" src={imageUrl || PostThumb} alt="banner" />
            <div className="p-2">
                <h3 className="text-lg leaing-[20px] mb-1">
                    <Link href="#">{title}</Link>
                </h3>
                <p className="font-extralight text-[12px]">{description}</p>
            </div>
        </div>
    );
};

export default Post;
