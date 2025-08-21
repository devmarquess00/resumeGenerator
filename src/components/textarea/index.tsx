import { ChangeEvent } from "react"

type TextareaProps = {
    label?: string;
    extraClassLabel?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    extraClass?: string;
    required?: boolean;
}

export const Textarea = ({
    label,
    extraClassLabel,
    value,
    onChange,
    placeholder,
    extraClass,
    required
}: TextareaProps) => {
    return (
        <div className="flex flex-col gap-1">
            <label className={extraClassLabel}>
                {label} {required ? <span className="text-red-500">*</span>: ''}
            </label>
            <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={extraClass}
            />
        </div>
    )
}