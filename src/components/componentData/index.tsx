import { FaArrowRight, FaClipboardList } from "react-icons/fa6";
import { Button } from "../button";
import { Input } from "../input";
import { Textarea } from "../textarea";
import { Title } from "../title";

import { useContext } from 'react';
import { ContextStep } from "@/context/ContextStep";

export const ComponentData = () => {
    const { stepState, steps, handleNext } = useContext(ContextStep)

  return (
    <>
      <div className="max-w-sm lg:max-w-xl lg:w-full mx-auto mt-20 lg:mt-30 mb-5 shadow-md rounded-sm">
        <div className="bg-blue-100 rounded-t-sm">
          <Title
            title="1.1 Dados pessoais"
            extraClass="text-xl mb-5 py-3 px-10 text-zinc-700"
          />
        </div>
        <div className="w-full grid grid-cols-2 gap-3 mt-10 px-10 pb-8 space-y-3">
          <div className="col-span-2">
            <Input
              label="Nome completo"
              required={true}
              extraClassLabel="text-sm text-gray-600"
              extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm"
            />
          </div>
          <Input
            label="Seu melhor e-mail"
            required={true}
            extraClassLabel="text-sm text-gray-600"
            extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm"
          />
          <Input
            label="Nacionalidade"
            required={true}
            extraClassLabel="text-sm text-gray-600"
            extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm "
          />
          <Input
            label="Idade"
            required={true}
            extraClassLabel="text-sm text-gray-600"
            extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm"
          />
          <Input
            label="Genero"
            required={true}
            extraClassLabel="text-sm text-gray-600"
            extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm"
          />

          <div className="col-span-2">
            <Input
              label="Endereço"
              required={true}
              extraClassLabel="text-sm text-gray-600"
              extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm"
            />
          </div>
          <Input
            label="Cidade"
            required={true}
            extraClassLabel="text-sm text-gray-600"
            extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm"
          />
          <Input
            label="Estado"
            required={true}
            extraClassLabel="text-sm text-gray-600"
            extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm"
          />
        </div>

        <div className="bg-blue-100 rounded-t-sm">
          <Title
            title="1.2 Objetivo"
            extraClass="text-xl mb-5 py-3 px-10 text-zinc-700"
          />
        </div>
        <div className="w-full gap-3 mt-5 px-10 pb-8 space-y-3">
          <Textarea
            placeholder="Ex: Busco oportunidade como gerente de loja, para desenvolver minha experiência no setor de vendas."
            label="Indique uma frase curta e direta"
            extraClassLabel="text-sm text-gray-600"
            extraClass="h-[8rem] w-full border border-gray-300 p-4 outline-none rounded-sm w-full text-sm mt-3"
          />
        </div>
      </div>

      <div className="max-w-xs md:max-w-xl w-full mx-auto mb-10 md:mt-20">
        <div className="flex flex-col gap-2">
          <Button
            label="Seguinte"
            icon={<FaArrowRight size={22} />}
            iconPosition="right"
            extraClass="bg-emerald-400 rounded-sm py-2 px-3 text-white w-[40%] lg:w-[20%]"
            onClick={() => handleNext({ label: steps[stepState - 1] })}
          />
          <Button
            label="Pré Visualizar"
            icon={<FaClipboardList size={22} />}
            iconPosition="left"
            extraClass="bg-blue-500 rounded-sm py-3 px-3.5 text-white w-[50%] lg:w-[30%]"
          />
        </div>
      </div>
    </>
  );
};
