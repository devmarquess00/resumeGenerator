'use client';
import { menuSteps } from '@/menus/menuSteps';
import { createContext, ReactNode, useState } from 'react';

interface ChildrenProps {
    children: ReactNode;
}

interface ContextValuesPros {
    stepState: number;
    handleNextButton: (step: any) => void;
    handleNext: (step: any) => void;
    handlePrev: (step: any) => void;
    steps: any;
}

export const ContextStep = createContext({} as ContextValuesPros);

function ContextSteps ({children}: ChildrenProps) {

    const [stepState, setStepState] = useState(1);

    const steps = menuSteps.map(item => item.label); // só pra usar no componente para passar a label para o botão

    function handleNextButton (step: any) {
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

    function handleNext (step: any) {
        switch (step.label) {
            case 'Dados Pessoais':
                setStepState(stepState + 1);
                break;
            case 'Formação':
                setStepState(stepState + 1)
                break; 
            case 'Experiência':
                setStepState(stepState + 1)
                break;
            default: 
                break;
        }
    }

    function handlePrev (step: any) {
        switch (step.label) {
            case 'Dados Pessoais': 
                setStepState(stepState);
                break;
            case 'Formação':
                setStepState(stepState - 1);
                break;
            case 'Experiência':
                setStepState(stepState - 1);
                break;
            case 'Infos adicionais':
                setStepState(stepState - 1);
                break;
            default:
                break;
        }
    }

    return (
        <ContextStep.Provider value={{ stepState, handleNextButton, handleNext, handlePrev, steps }}>
            {children}
        </ContextStep.Provider>
    )
}   

export default ContextSteps;