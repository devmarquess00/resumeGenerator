import {
  FaArrowLeft,
  FaArrowRight,
  FaClipboardList,
  FaPlus,
  FaTrash,
} from "react-icons/fa6";
import { Input } from "../input";
import { Title } from "../title";
import { Button } from "../button";
import { Textarea } from "../textarea";
import { useEffect, useState } from "react";

import { useContext } from "react";
import { ContextStep } from "@/context/ContextStep";
import { ContextForm } from "@/context/ContextForm";



export const ComponentAcademic = () => {
  const { steps, handlePrev, handleNext, stepState, handleVisualationResume } =
    useContext(ContextStep);
  const {
    handleButton,
    handleRemove,
    handleInputChange,
    cursos
  } = useContext(ContextForm);

  return (
    <>
      <div className="max-w-sm max-w-xl w-full mx-auto mt-20 md:mt-30 mb-5 shadow-md rounded-sm">
        <div className="bg-blue-100 rounded-t-sm">
          <Title
            title="2.1 Formação acadêmica"
            extraClass="mb-5 py-3 px-10 text-zinc-700"
          />
        </div>
        <div>
          {cursos.map((curso, index) => (
            <div
              className="w-full grid grid-cols-2 gap-3 mt-3 px-5 md:px-10 pt-2 pb-3 space-y-3 border-b border-gray-300"
              key={index}>
              <div className="col-span-2 relative">
                <Input
                  label="Curso"
                  extraClassLabel="text-sm text-gray-600"
                  extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm"
                  value={curso.course}
                  onChange={(event) => handleInputChange(index, "course", event.target.value)}
                />
                <Button
                  extraClass="absolute -top-2 right-1 bg-gray-400 p-1 rounded-sm text-white outline-none"
                  label={<FaTrash />}
                  onClick={() => handleRemove(index)}
                />
              </div>
              <Input
                label="Instituição"
                extraClassLabel="text-sm text-gray-600"
                extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm"
                value={curso.institution}
                onChange={(event) => handleInputChange(index, "institution", event.target.value)}
              />
              <Input
                label="Ano de conclusão"
                extraClassLabel="text-sm text-gray-600"
                extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm"
                value={curso.completionYear}
                onChange={(event) => handleInputChange(index, "completionYear", event.target.value)}
              />
            </div>
          ))}
          <div className="px-5 md:px-10 pb-8">
            <Button
              onClick={handleButton}
              icon={<FaPlus />}
              iconPosition="left"
              label="Adicionar outro curso"
              extraClass="bg-emerald-400 rounded-sm py-2 px-3 text-white mt-3"
            />
          </div>
        </div>
        <div className="bg-blue-100 rounded-t-sm">
          <Title
            title="2.2 Qualificações e Imersões"
            extraClass="mb-5 py-3 px-10 text-zinc-700"
          />
        </div>
        <div className="w-full gap-3 mt-5 px-5 md:px-10 pb-8 space-y-3">
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
            extraClass="bg-blue-500 rounded-sm py-3 px-3.5 text-white w-[55%] lg:w-[30%]"
            onClick={handleVisualationResume}
          />
        </div>
      </div>
    </>
  );
};
