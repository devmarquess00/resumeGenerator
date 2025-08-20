import { ChangeEvent } from "react";

type InputProps = {
    label?: string;
    extraClassLabel?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    extraClass?: string;
}

export const Input = ({
    label,
    extraClassLabel,
    value,
    onChange,
    type,
    extraClass
}: InputProps) => {
    return (
        <div>
            <label className={extraClassLabel}>{label}</label>
            <input
            type={type}
            value={value}
            onChange={onChange}
            className={extraClass}
            />
        </div>
    )
}