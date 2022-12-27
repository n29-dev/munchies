import { FC } from "react";

interface TextAreaProps {
    classes?: string;
    placeholder?: string;
    disabled?: boolean;
    name?: string;
    id?: string;
    required?: boolean;
}

const TextArea: FC<TextAreaProps> = ({ classes, ...props }) => {
    return (
        <textarea
            className={`block w-full h-[215px] rounded-md outline-none border border-[#DBDCDE] placeholder:text-[#929292] pl-[22px] pt-[10px] resize-none ${classes}`}
            {...props}
        ></textarea>
    );
};

export default TextArea;
