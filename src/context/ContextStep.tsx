'use client';
import { createContext, ReactNode, useState } from 'react';

interface ChildrenProps {
    children: ReactNode;
}

interface ContextValuesPros {
    stepState: number;
    handleNextPrev: (step: any) => void;
}

export const ContextStep = createContext({} as ContextValuesPros);

function ContextSteps ({children}: ChildrenProps) {

    const [stepState, setStepState] = useState(1);

    function handleNextPrev (step: any) {
        switch (step.label) {
            case 'Dados Pessoais':
                setStepState(1);
                break;
            case 'Formação':
                setStepState(2);
                break;
            case 'Experiência':
                setStepState(3);
                break;    
            default: 
                setStepState(4);
                break;
        }
    }

    return (
        <ContextStep.Provider value={{ stepState, handleNextPrev }}>
            {children}
        </ContextStep.Provider>
    )
}   

export default ContextSteps;