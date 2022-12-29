import { FC } from "react";
import { useProductsQuery } from "../../store/slices/productsApi";
import Product from "./product";

const ProductGallery: FC = () => {
    const { data, isError, isLoading, isSuccess } = useProductsQuery();
    return (
        <div className="grid grid-cols-3 gap-3">
            {isSuccess &&
                data.map((productData) => {
                    return <Product productData={productData} key={productData.id} />;
                })}
        </div>
    );
};

export default ProductGallery;
