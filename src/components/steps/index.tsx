import { menuSteps } from "@/menus/menuSteps"
import { useContext } from 'react';
import { ContextStep } from "@/context/ContextStep";

export const Steps = () => {
    const { stepState, handleNext, handleNextButton } = useContext(ContextStep)

    const classStep = '!bg-blue-500 !text-white'

    return (
        <div className="w-[90%] md:px-0 max-w-xl lg:w-full mx-auto mt-15 lg:mt-20 relative">
            <div className="w-[90%] mx-auto lg:w-full h-0.5 bg-gray-200">
                <div className={`h-0.5 bg-blue-500 duration-600 ${stepState === 1 ? 'w-[25%]' : ''} ${stepState === 2 ? 'w-[50%]' : ''} ${stepState === 3 ? 'w-[75%]' : ''} ${stepState === 4 ? 'w-[100%]' : ''}`}></div>
            </div>
            <div className="w-full absolute -top-6">
                <ul className="flex items-center justify-around">
                    {menuSteps.map((step) => (
                        <li className="flex flex-col items-center justify-center" key={step.id}>
                            <button className={`flex items-center justify-center border border-blue-500 text-xl !text-blue-500
                            bg-white h-10 w-10 lg:h-13 lg:w-13 rounded-full text-white hover:cursor-pointer ${step.id === stepState ? classStep : ''}`} onClick={() => handleNextButton(step)}>{step.icon}</button>
                            <span className="text-xs mt-2 lg:text-sm text-gray-500">{step.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}