"use client";

import { IconType } from "react-icons";

interface CategoryInputProps {
    onClick: (value: string) => void;
    selected?: boolean;
    icon: IconType;
    label: string;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
    onClick, selected, icon: Icon, label
}) => {
    return (
        <div
            onClick={() => onClick(label)}
            className={
                `rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-neutral-700 transition cursor-pointer ${selected ? 'border-black' : 'border-neutral-200'}`
            }
        >
            <Icon size={30} />
            <div className="font-semibold">
                {label}
            </div>
        </div>
    );
}

export default CategoryInput;
