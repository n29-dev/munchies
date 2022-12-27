import { FC } from "react";

const SearhBar: FC = () => {
    return (
        <div className="w-[400px] h-[60px] bg-white rounded-lg flex items-center justify-between overflow-hidden">
            <input className="flex-1 border-0 outline-none pl-[22px] pr-[10px]" type="text" placeholder="Search food you love" />
            <button className="bg-yellow h-full px-[28px] text-white" type="button">
                Search
            </button>
        </div>
    );
};

export default SearhBar;
