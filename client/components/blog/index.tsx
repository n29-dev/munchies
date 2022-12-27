import { FC } from "react";
import Post from "./post";

export interface PostType {
    title: string;
    description: string;
    imageUrl?: string;
}

const postsData: PostType[] = [
    {
        title: "Most Satisfying Cake decorating Cake ideas",
        description: "Quis hendrerit nibh mauris sed faucibus.Quis hendrerit nibh mauris sed faucibus.",
    },
    {
        title: "Most Satisfying Cake decorating Cake ideas",
        description: "Quis hendrerit nibh mauris sed faucibus.Quis hendrerit nibh mauris sed faucibus.",
    },
    {
        title: "Most Satisfying Cake decorating Cake ideas",
        description: "Quis hendrerit nibh mauris sed faucibus.Quis hendrerit nibh mauris sed faucibus.",
    },
    {
        title: "Most Satisfying Cake decorating Cake ideas",
        description: "Quis hendrerit nibh mauris sed faucibus.Quis hendrerit nibh mauris sed faucibus.",
    },
    {
        title: "Most Satisfying Cake decorating Cake ideas",
        description: "Quis hendrerit nibh mauris sed faucibus.Quis hendrerit nibh mauris sed faucibus.",
    },
];

const Blog: FC = () => {
    return (
        <section className="py-[100px]">
            <div className="container">
                <h2 className="heading">Our Blog</h2>
                <div className="grid grid-cols-4 gap-10">
                    {postsData.map((post, index) => {
                        if (index === 1) {
                            return <Post classes="col-span-2 row-span-2" key={Math.random()} data={post} />;
                        }
                        return <Post key={Math.random()} data={post} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default Blog;
