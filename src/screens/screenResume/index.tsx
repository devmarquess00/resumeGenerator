'use client';
import { Steps } from "@/components/steps"
import { useContext } from 'react';
import { ContextStep } from "@/context/ContextStep";
import { Input } from "@/components/input";
import { Title } from "@/components/title";
import { Textarea } from "@/components/textarea";
import { Button } from "@/components/button";

import {
    FaArrowRight,
    FaClipboardList
} from 'react-icons/fa6';
import { ComponentData } from "@/components/componentData";
import { ComponentAcademic } from "@/components/componentAcademic";
import { ComponentExperience } from "@/components/componentExperience";
import { ComponentAdds } from "@/components/componentAdds/indext";
import { Header } from "@/components/header";

export const ScreenResume = () => {

    const { stepState } = useContext(ContextStep);

    return (
        <div>
            <Steps />

            {stepState && stepState === 1 ? (
                <ComponentData />
            ) : (
                ''
            )}

            {stepState && stepState === 2 ? (
                <ComponentAcademic />
            ) : (
                ''
            )}

            {stepState && stepState === 3 ? (
                <ComponentExperience />
            ) : (
                ''
            )}

            {stepState && stepState === 4 ? (
                <ComponentAdds />
            ) : (
                ''
            )}
        </div>
    )
}