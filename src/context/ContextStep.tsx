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
    handleVisualationResume: () => void;
    handleRemoveVisualationResume: () => void;
    visualationResume: boolean;
    steps: any;
}

export const ContextStep = createContext({} as ContextValuesPros);

function ContextSteps ({children}: ChildrenProps) {

    const [stepState, setStepState] = useState<number>(1);
    const [stepStatePrev, setStepStatePrev] = useState<number>(1);
    const [visualationResume, setVisualationResume] = useState(false);

    const steps = menuSteps.map(item => item.label);

    function handleNextButton (step: any) {
        switch (step.label) {
            case 'Dados':
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
            case 'Dados':
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
            case 'Dados': 
                setStepState(stepState);
                break;
            case 'Formação':
                setStepState(stepState - 1);
                break;
            case 'Experiência':
                setStepState(stepState - 1);
                break;
            case 'Adicionais':
                setStepState(stepState - 1);
                break;
            default:
                break;
        }
    }

    function handleVisualationResume () {
        setStepStatePrev(stepState);
        setVisualationResume(true);
        setStepState(0)
    }

    function handleRemoveVisualationResume () {
        setVisualationResume(false);
        setStepState(stepStatePrev);
    }

    return (
        <ContextStep.Provider value={{ stepState, handleNextButton, handleNext, handlePrev, handleVisualationResume, visualationResume, handleRemoveVisualationResume, steps,
         }}>
            {children}
        </ContextStep.Provider>
    )
}   

export default ContextSteps;