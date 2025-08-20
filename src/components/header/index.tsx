import { menuHeader } from "@/menus/menuHeader";
import { ReactNode } from "react";
import { Title } from "../title"


export const Header = () => {
    return (
        <header className="flex items-center justify-around shadow-sm p-6">
            <div>
                <Title
                title="Boost"
                extraClass="text-2xl font-semibold"
                />
            </div>
            <ul className="flex items-center gap-4">
                {menuHeader.map((item) => (
                    <li className="flex items-center gap-1 text-gray-500" key={item.id}>
                        <span>{item.icon}</span>
                        <a href="" className="text-sm">{item.label}</a>
                    </li>
                ))}
            </ul>
        </header>
    )
}