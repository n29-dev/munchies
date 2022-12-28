import React, { useEffect, useRef, FC } from "react";

interface ModalProps {
    children: React.ReactNode;
    isModalOpen: boolean;
    classes?: string;
    onOutsideClick?: () => void;
}

const Modal: FC<ModalProps> = ({ children, classes, isModalOpen, onOutsideClick }) => {
    const modalWrapperRef = useRef<HTMLDivElement | null>(null);

    const checkOutSideClick = (event: MouseEvent) => {
        if ((event.currentTarget as Node).isSameNode(event.target as Node)) {
            onOutsideClick!();
        }
    };

    useEffect(() => {
        if (onOutsideClick) {
            modalWrapperRef.current!.addEventListener("click", checkOutSideClick);
        }
    }, []);

    return (
        <div
            className={`${
                isModalOpen ? "" : "opacity-0 pointer-events-none invisible"
            } fixed w-full h-[100vh] bg-[#000000bd] flex items-center 
            justify-center left-0 right-0 top-0 bottom-0 z-[999] transition-all duration-300`}
            ref={modalWrapperRef}
        >
            <div className={`bg-white rounded-md p-6 ${classes || ""}`}>{children}</div>
        </div>
    );
};

export default Modal;
