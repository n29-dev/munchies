import { useEffect, useRef, useState } from "react";

interface UseDropDownProps {
    init?: boolean;
    outClickClose?: boolean;
}

type UseDropdownToggleReturn = [
    boolean,
    { setValue: (newValue: boolean) => void; toggle: () => void },
    React.RefObject<HTMLDivElement> | undefined
];

function useDropdown(props: UseDropDownProps): UseDropdownToggleReturn {
    const { init, outClickClose } = props;
    const [value, setValue] = useState(init || false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggle = (event?: Event) => {
        if (event) {
            event.preventDefault();
        }
        setValue((v: boolean) => !v);
    };

    const findClick = (event: MouseEvent) => {
        event.preventDefault();
        const { current: currentElement } = dropdownRef;

        if (
            currentElement!.contains(event.target as Node) ||
            currentElement!.isSameNode(event.target as Node) ||
            currentElement!.previousElementSibling?.contains(event.target as Node) ||
            currentElement!.previousElementSibling?.isSameNode(event.target as Node)
        ) {
            return;
        }
        toggle();
    };

    useEffect(() => {
        if (outClickClose && value) {
            window.addEventListener("click", findClick);
        }
        return () => {
            window.removeEventListener("click", findClick);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    if (outClickClose) {
        return [
            value,
            {
                setValue,
                toggle,
            },
            dropdownRef,
        ];
    }

    return [
        value,
        {
            setValue,
            toggle,
        },
        undefined,
    ];
}

export default useDropdown;
