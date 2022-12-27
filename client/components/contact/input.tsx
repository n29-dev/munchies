import { FC, HTMLInputTypeAttribute } from "react";

interface InputProps {
    classes?: string;
    type: HTMLInputTypeAttribute;
    placeholder?: string;
    disabled?: boolean;
    name?: string;
    id?: string;
    required: boolean;
}

const Input: FC<InputProps> = ({ classes, ...props }) => {
    return (
        <input
            className={`block w-full h-[56px] rounded-md outline-none border border-[#DBDCDE] placeholder:text-[#929292] pl-[22px] ${classes}`}
            {...props}
        />
    );
};

export default Input;
