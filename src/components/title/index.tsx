type TitleProps = {
    title?: string;
    extraClass?: string;
}

export const Title = ({
    title,
    extraClass
}: TitleProps) => {
    return <h1 className={`text-base md:text-xl ${extraClass}`}>{title}</h1>
}