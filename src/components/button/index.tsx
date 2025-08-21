import { ReactNode } from "react";

type ButtonProps = {
    onClick?: () => void;
    label?: ReactNode;
    extraClass?: string;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
}

export const Button = ({
    onClick,
    label,
    extraClass,
    icon, 
    iconPosition
}: ButtonProps) => {
    return <button className={`flex items-center gap-2 cursor-pointer ${extraClass}`} onClick={onClick}>
        {iconPosition === 'left' && icon}
        {label}
        {iconPosition === 'right' && icon}
    </button>
}