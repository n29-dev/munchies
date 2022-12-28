import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";

interface SearchBarProps {
    closeModal: () => void;
}

const SearchBar: FC<SearchBarProps> = ({ closeModal }) => {
    return (
        <div className="relative">
            <h2 className="text-[20px] font-semibold py-1 border-b border-[rgba(0,0,0,.6)] mb-6">
                Find your <span className="font-bold text-yellow">Favourite</span> Foods
            </h2>
            <button
                className="w-[35px] h-[35px] rounded-full bg-yellow inline-flex items-center justify-center absolute right-[-35px] top-[-26px]"
                type="button"
                onClick={closeModal}
            >
                <FontAwesomeIcon className="w-[14px] h-auto" icon={faXmark} />
            </button>
            <div>
                <div>
                    <input
                        className="block w-full h-[50px] outline-none border border-[rgba(0,0,0,.6)] px-[20px] placeholder:text-gray-600 rounded-lg"
                        type="text"
                        placeholder="Search"
                    />
                </div>
                <div className="min-h-[180px] flex items-center justify-center">
                    <FontAwesomeIcon className="w-[100px] h-full text-gray-400 mx-auto" icon={faSearch} />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
