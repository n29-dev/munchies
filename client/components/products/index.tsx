import { FC } from "react";
import ProductGallery from "./productGallery";

const ProductSection: FC = () => {
    return (
        <section className="bg-[#F7F8FA] pt-[100px] pb-[50px]">
            <div className="container">
                <h2 className="heading">Home Kitchen</h2>
                <ProductGallery />
            </div>
        </section>
    );
};

export default ProductSection;
