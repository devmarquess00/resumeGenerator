"use client";
import { useContext } from "react";
import { ContextStep } from "@/context/ContextStep";
import { ContextForm } from "@/context/ContextForm";
import { Button } from "../button";
import { 
  FaXmark,
  FaEnvelope
 } from "react-icons/fa6";

export const VisualationResume = () => {
  const { visualationResume, handleRemoveVisualationResume } = useContext(ContextStep);
  const {
    name,
    nationality,
    email
  } = useContext(ContextForm)

  return (
    <>
      {visualationResume && (
        <div className="max-w-xs md:max-w-xl w-full mx-auto mt-10 md:mt-15 mb-5 shadow-md rounded-sm">
            <div className="bg-gray-100/60 p-3 border-b border-gray-300 flex justify-end">
                <Button
                extraClass="p-1 text-sm bg-gray-400/70 md:p-2 md:text-sm rounded-sm text-white"
                label="Fechar"
                icon={<FaXmark />}
                iconPosition="right"
                onClick={handleRemoveVisualationResume}
                />
            </div>
            <div className="py-3 px-5 md:px-10">
                <h2 className="mt-5 text-xl md:text-2xl">{name}</h2>
                <p className="mt-1 text-gray-500 text-xs md:text-sm">Nacionalidade: {nationality}</p>
            </div>
            <div className="w-full bg-gray-200 px-5 text-xs py-1.5 flex items-center gap-1 md:gap-2">
              <span><FaEnvelope /></span>
              <p>{email}</p>
            </div>
        </div>
      )}
    </>
  );
};
