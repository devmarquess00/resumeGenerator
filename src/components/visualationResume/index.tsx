"use client";
import { useContext } from "react";
import { ContextStep } from "@/context/ContextStep";
import { ContextForm } from "@/context/ContextForm";
import { Button } from "../button";
import { FaXmark, FaEnvelope } from "react-icons/fa6";

export const VisualationResume = () => {
  const { visualationResume, handleRemoveVisualationResume } =
    useContext(ContextStep);
  const {
    name,
    email,
    nationality,
    age,
    gender,
    address,
    city,
    state,
    cep,
    cursos,
    experience,
  } = useContext(ContextForm);

  return (
    <>
      {visualationResume && (
        <div className="w-full md:max-w-xl w-full mx-auto md:mt-15 mb-5 shadow-md rounded-sm">
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
            <p className="mt-1 text-gray-900 text-xs md:text-sm">
              Nacionalidade: {nationality ? (
                nationality
              ) : (
                'Não informado'
              )}
            </p>
            <p className="mt-1 text-gray-900 text-xs md:text-sm">
              Idade: {age} anos
            </p>
            <p className="mt-1 text-gray-900 text-xs md:text-sm">
              Gênero: {gender}
            </p>
            <p className="mt-1 text-gray-900 text-xs md:text-sm">
              Endereço: {address}, {city} - {state}.
            </p>
            <p className="mt-1 text-gray-900 text-xs md:text-sm">CEP: {cep}</p>
          </div>
          {email && (
            <div className="w-full bg-gray-200 px-5 md:px-10 text-xs py-1.5 flex items-center gap-1 md:gap-2">
              <span>
                <FaEnvelope />
              </span>
              <p>{email}</p>
            </div>
          )}

          <h1 className="mt-8 px-5 md:px-10 font-semibold text-gray-700 md:text-lg">
            Formação acadêmica
          </h1>
          {cursos.length >= 1 &&
            cursos.map((course, index) => (
              <div key={index}>
                <div className="flex items-center gap-2 mt-5 px-5 md:px-10 last:pb-5">
                  <div className="pr-2 md:pr-3 border-r border-gray-300 text-end">
                    <div className="flex flex-col text-gray-700 font-semibold text-xs gap-2">
                      {course.course === "" ? "" : <p>Curso</p>}
                      {course.institution === "" ? "" : <p>Instituição</p>}
                      {course.completionYear === "" ? "" : <p>Conclusão</p>}
                    </div>
                  </div>
                  <div className="flex flex-col text-gray-700 text-sm gap-2">
                    {course.course === "" ? (
                      ""
                    ) : (
                      <p className="text-base text-gray-900 font-bold">
                        {course.course}
                      </p>
                    )}
                    {course.institution === "" ? (
                      ""
                    ) : (
                      <p className="text-base text-gray-900 font-bold">
                        {course.institution}
                      </p>
                    )}
                    {course.completionYear === "" ? (
                      ""
                    ) : (
                      <p>{course.completionYear}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

          <h1 className="mt-8 px-5 md:px-10 font-semibold text-gray-700 md:text-lg">
            Minhas experiências
          </h1>
          {experience.length >= 1 &&
            experience.map((experience, index) => (
              <div key={index}>
                <div className="flex items-center gap-2 mt-5 px-5 md:px-10 last:pb-5">
                  <div className="pr-2 md:pr-3 border-r border-gray-300 text-end">
                    <div className="flex flex-col text-gray-700 font-semibold text-xs gap-2">
                      {experience.enterprise === "" ? "" : <p>Empresa</p>}
                      {experience.startIn || experience.endIn === "" ? (
                        ""
                      ) : (
                        <p>Período</p>
                      )}
                      {experience.position === "" ? "" : <p>Cargo</p>}
                    </div>
                  </div>
                  <div className="flex flex-col text-gray-700 text-sm gap-2">
                    {experience.enterprise === "" ? (
                      ""
                    ) : (
                      <p className="text-base text-gray-900 font-bold">
                        {experience.enterprise}
                      </p>
                    )}
                    {experience.startIn || experience.endIn === "" ? (
                      ""
                    ) : (
                      <p>
                        {experience.startIn} - {experience.endIn}
                      </p>
                    )}
                    {experience.position === "" ? (
                      ""
                    ) : (
                      <p>{experience.position}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};
