import { FC } from "react";
import { Addon } from "client/types/definition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "client/store/store";
import { generateVariationKey } from "client/lib/utils";

interface VariationProps {
    variationData: Addon;
    addToCart: (productAddon: Addon) => void;
    removeFromCart: (productAddon: Addon) => void;
    productId: number;
}

const Variation: FC<VariationProps> = ({ variationData, productId, addToCart, removeFromCart }) => {
    const { name, price } = variationData;
    const variationKey = generateVariationKey(productId, variationData.name);
    const productQuanObj = useSelector((store: RootState) => store.cartSlice.quantities[productId]);

    return (
        <div className="bg-gray-100 px-2 py-1 mb-2 flex justify-between items-center" key={Math.random()}>
            <div>
                <h3 className="text-[14px] font-semibold">{name}</h3>
                <h3 className="text-[13px]">{price}</h3>
            </div>
            <div className="flex flex-col items-end">
                <button
                    type="button"
                    onClick={() => {
                        addToCart(variationData);
                    }}
                >
                    <FontAwesomeIcon icon={faCaretUp} />
                </button>
                <span>{(productQuanObj && productQuanObj[variationKey]) || 0}</span>
                <button
                    type="button"
                    onClick={() => {
                        removeFromCart(variationData);
                    }}
                >
                    <FontAwesomeIcon icon={faCaretDown} />
                </button>
            </div>
        </div>
    );
};

export default Variation;
