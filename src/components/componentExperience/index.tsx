import {
  FaArrowLeft,
  FaArrowRight,
  FaClipboardList,
  FaPlus,
  FaTrash,
} from "react-icons/fa6";
import { Button } from "../button";
import { Title } from "../title";
import { Textarea } from "../textarea";

import { useContext, useState } from "react";
import { ContextStep } from "@/context/ContextStep";
import { Input } from "../input";

export const ComponentExperience = () => {
  const [experience, setExperience] = useState([{}]);
  const { steps, handlePrev, handleNext, stepState } = useContext(ContextStep);

  const handleButton = () => {
    setExperience((prevExperience) => [...prevExperience, {}])
  }

  const handleRemoveItem = (indexToRemove: any) => {
    setExperience((prevExperience) => 
        prevExperience.filter((_,index) => index !== indexToRemove)
    )
  }

  return (
    <>
      <div className="max-w-sm md:max-w-xl w-full mx-auto mt-20 md:mt-30 mb-5 shadow-md rounded-sm">
        <div className="bg-blue-100 rounded-t-sm">
          <Title
            title="3.1 Experiência"
            extraClass="text-xl mb-5 py-3 px-10 text-zinc-700"
          />
        </div>
        <div>
          <div>
            {experience.map((experience, index) => (
              <div
                className="w-full grid grid-cols-2 gap-3 mt-3 px-10 pt-2 pb-3 space-y-3 border-b border-gray-300"
                key={index}>
                <div className="col-span-2 relative">
                  <Input
                    label="Curso"
                    extraClassLabel="text-sm text-gray-600"
                    extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm"
                  />
                  <Button
                    extraClass="absolute -top-2 right-1 bg-gray-400 p-1 rounded-sm text-white"
                    label={<FaTrash />}
                    onClick={() => handleRemoveItem(index)}
                  />
                </div>
                <Input
                  label="Início em"
                  type="number"
                  placeholder="2024"
                  extraClassLabel="text-sm text-gray-600"
                  extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm"
                />
                <Input
                  label="Fim em"
                  type="number"
                  placeholder="2025"
                  extraClassLabel="text-sm text-gray-600"
                  extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm"
                />
                <div className="col-span-2">
                  <Input
                    label="Cargo"
                    placeholder="Ex: Gerente de loja"
                    extraClassLabel="text-sm text-gray-600"
                    extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm"
                  />
                </div>
                <div className="col-span-2">
                  <Textarea
                    placeholder=""
                    label="Descreva suas principais funções feitas na empresa"
                    extraClassLabel="text-sm text-gray-600"
                    extraClass="w-full border border-gray-300 p-4 outline-none rounded-sm w-full text-sm mt-3 mb-5"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="px-10 pb-8">
            <Button
              icon={<FaPlus />}
              iconPosition="left"
              label="Adicionar outro curso"
              extraClass="bg-emerald-400 rounded-sm py-2 px-3 text-white mt-3"
              onClick={handleButton}
            />
          </div>
        </div>
        <div className="bg-blue-100 rounded-t-sm">
          <Title
            title="3.2 Atividades complementares"
            extraClass="text-xl mb-5 py-3 px-10 text-zinc-700"
          />
        </div>
        <div className="w-full gap-3 mt-5 px-10 pb-8 space-y-3">
          <Textarea
            placeholder=""
            label="Qualificações e Imersões"
            extraClassLabel="text-sm text-gray-600"
            extraClass="w-full border border-gray-300 p-4 outline-none rounded-sm w-full text-sm mt-3"
          />
        </div>
      </div>
      <div className="max-w-xs md:max-w-xl w-full mx-auto mb-10 md:mb-20">
        <div className="flex gap-2">
          <Button
            label="Anterior"
            icon={<FaArrowLeft size={22} />}
            iconPosition="left"
            extraClass="bg-gray-400 rounded-sm py-2 px-3 text-white lg:w-[20%]"
            onClick={() => handlePrev({ label: steps[stepState - 1] })}
          />
          <Button
            label="Seguinte"
            icon={<FaArrowRight size={22} />}
            iconPosition="right"
            extraClass="bg-emerald-500 rounded-sm py-2 px-3 text-white lg:w-[20%]"
            onClick={() => handleNext({ label: steps[stepState - 1] })}
          />
        </div>
        <div className="mt-3">
          <Button
            label="Pré Visualizar"
            icon={<FaClipboardList size={22} />}
            iconPosition="left"
            extraClass="bg-blue-500 rounded-sm py-3 px-3.5 text-white lg:w-[30%]"
          />
        </div>
      </div>
    </>
  );
};
