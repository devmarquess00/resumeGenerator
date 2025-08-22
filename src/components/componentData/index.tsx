import { FaArrowRight, FaClipboardList } from "react-icons/fa6";
import { Button } from "../button";
import { Input } from "../input";
import { Textarea } from "../textarea";
import { Title } from "../title";

import { useContext } from "react";
import { ContextStep } from "@/context/ContextStep";
import { ContextForm } from "@/context/ContextForm";

export const ComponentData = () => {
  const { stepState, steps, handleNext, handleVisualationResume } =
    useContext(ContextStep);

  const {
    name,
    setName,
    email,
    setEmail,
    nationality,
    setNationality,
    age,
    setAge,
    gender,
    setGender,
    address,
    setAddress,
    city,
    setCity,
    cep,
    setCep,
    state,
    setState,
  } = useContext(ContextForm);

  return (
    <>
      <div className="max-w-sm md:max-w-xl lg:w-full mx-auto mt-20 lg:mt-30 mb-5 shadow-md rounded-sm">
        <div className="bg-blue-100 rounded-t-sm">
          <Title
            title="1.1 Dados pessoais"
            extraClass="mb-5 py-3 px-10 text-zinc-700"
          />
        </div>
        <div className="w-full grid grid-cols-2 gap-3 mt-10 px-5 md:px-10 pb-8 space-y-3">
          <div className="col-span-2">
            <Input
              label="Nome completo"
              required={true}
              extraClassLabel="text-sm text-gray-600"
              extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <Input
            label="Seu melhor e-mail"
            required={true}
            extraClassLabel="text-sm text-gray-600"
            extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            label="Nacionalidade"
            required={true}
            extraClassLabel="text-sm text-gray-600"
            extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm"
            value={nationality}
            onChange={(event) => setNationality(event.target.value)}
          />
          <Input
            label="Idade"
            required={true}
            extraClassLabel="text-sm text-gray-600"
            extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
          <Input
            label="Genero"
            required={true}
            extraClassLabel="text-sm text-gray-600"
            extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          />

          <div className="col-span-2">
            <Input
              label="Endereço"
              required={true}
              extraClassLabel="text-sm text-gray-600"
              extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <Input
            label="Cidade"
            required={true}
            extraClassLabel="text-sm text-gray-600"
            extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <Input
            label="Estado"
            required={true}
            extraClassLabel="text-sm text-gray-600"
            extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm"
            value={state}
            onChange={(event) => setState(event.target.value)}
          />
          <Input
            label="CEP"
            required={true}
            extraClassLabel="text-sm text-gray-600"
            extraClass="w-full border border-gray-300 p-2 outline-none rounded-sm"
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
        </div>

        <div className="bg-blue-100 rounded-t-sm">
          <Title
            title="1.2 Objetivo"
            extraClass="mb-5 py-3 px-10 text-zinc-700"
          />
        </div>
        <div className="w-full gap-3 mt-5 px-5 md:px-10 pb-8 space-y-3">
          <Textarea
            placeholder="Ex: Busco oportunidade como gerente de loja, para desenvolver minha experiência no setor de vendas."
            label="Indique uma frase curta e direta"
            extraClassLabel="text-sm text-gray-600"
            extraClass="h-[8rem] w-full border border-gray-300 p-4 outline-none rounded-sm w-full text-sm mt-3"
          />
        </div>
      </div>

      <div className="max-w-xs md:max-w-xl w-full mx-auto mb-10 md:mb-20">
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
            extraClass="bg-blue-500 rounded-sm py-3 px-3.5 text-white w-[55%] lg:w-[30%]"
            onClick={handleVisualationResume}
          />
        </div>
      </div>
    </>
  );
};
