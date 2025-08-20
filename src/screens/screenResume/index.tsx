'use client';
import { Steps } from "@/components/steps"
import { useContext } from 'react';
import { ContextStep } from "@/context/ContextStep";

export const ScreenResume = () => {

    const { stepState, handleNextPrev } = useContext(ContextStep);

    return (
        <div>
            <Steps />
        </div>
    )
}