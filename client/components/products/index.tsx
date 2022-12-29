import { FC } from "react";
import { useProductsQuery } from "../../store/slices/productsApi";
import ProductGallery from "./productGallery";

const ProductSection: FC = () => {
    const { data, isError, isLoading, isSuccess } = useProductsQuery();
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
