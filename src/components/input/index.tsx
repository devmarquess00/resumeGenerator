import { ChangeEvent, ReactNode } from "react";

type InputProps = {
    label?: ReactNode;
    extraClassLabel?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    extraClass?: string;
    required?: true;
    placeholder?: string;
}

export const Input = ({
    label,
    extraClassLabel,
    value,
    onChange,
    type,
    extraClass,
    required,
    placeholder
}: InputProps) => {
    return (
        <div className="flex flex-col gap-1">
            <label className={extraClassLabel}>
                {label} {required ? <span className="text-red-500">*</span> : ''}
            </label>
            <input
            type={type}
            value={value}
            onChange={onChange}
            className={extraClass}
            placeholder={placeholder}
            />
        </div>
    )
}