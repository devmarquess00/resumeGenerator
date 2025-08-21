import { FaArrowLeft, FaArrowRight, FaClipboardList, FaPlus } from "react-icons/fa6";
import { Button } from "../button";
import { Title } from "../title";
import { Textarea } from "../textarea";

import { useContext } from "react";
import { ContextStep } from "@/context/ContextStep";

export const ComponentAdds = () => {
  const { steps, handlePrev, stepState, handleVisualationResume } = useContext(ContextStep);

  return (
    <>
      <div className="max-w-sm md:max-w-xl w-full mx-auto mt-20 md:mt-30 mb-5 shadow-md rounded-sm">
        <div className="bg-blue-100 rounded-t-sm">
          <Title
            title="4.1 Informações adicionais"
            extraClass="mb-5 py-3 px-10 text-zinc-700"
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
        <div className="flex flex-col gap-2">
          <Button
            label="Anterior"
            icon={<FaArrowLeft size={22} />}
            iconPosition="left"
            extraClass="bg-gray-400 rounded-sm py-2 px-3 text-white w-[40%] lg:w-[20%]"
            onClick={() => handlePrev({ label: steps[stepState - 1] })}
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
