import { menuSteps } from "@/menus/menuSteps"
import { useContext } from 'react';
import { ContextStep } from "@/context/ContextStep";

export const Steps = () => {
    const { stepState, handleNextPrev } = useContext(ContextStep)

    const classStep = '!bg-blue-500 !text-white'

    return (
        <div className="max-w-xl w-full mx-auto mt-20 relative">
            <div className="w-full h-0.5 bg-gray-200">
                <div className={`h-0.5 bg-blue-500 duration-600 ${stepState === 1 ? 'w-[25%]' : ''} ${stepState === 2 ? 'w-[50%]' : ''} ${stepState === 3 ? 'w-[75%]' : ''} ${stepState === 4 ? 'w-[100%]' : ''}`}></div>
            </div>
            <div className="w-full absolute -top-6">
                <ul className="flex items-center justify-around">
                    {menuSteps.map((step) => (
                        <li className="flex flex-col items-center justify-center" key={step.id}>
                            <button className={`flex items-center justify-center border border-blue-500 text-xl !text-blue-500
                            bg-white h-13 w-13 rounded-full text-white hover:cursor-pointer ${step.id === stepState ? classStep : ''}`} onClick={() => handleNextPrev(step)}>{step.icon}</button>
                            <span className="mt-2 text-sm text-gray-500">{step.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}