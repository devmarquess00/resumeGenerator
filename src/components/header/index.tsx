'use client';
import { menuHeader } from "@/menus/menuHeader";
import { ReactNode } from "react";
import { Title } from "../title"
import { Button } from "../button";
import { FaBars } from "react-icons/fa6";
import { useSidebar } from "@/hooks/useSidebar";
import { Sidebar } from "../sidebar";

export const Header = () => {

    return (
        <header className="px-10 py-5 flex items-center justify-between lg:justify-around shadow-sm lg:p-6">
            <div>
                <Title
                title="Boost"
                extraClass="text-2xl font-semibold"
                />
            </div>
            <ul className="hidden md:flex items-center gap-4">
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