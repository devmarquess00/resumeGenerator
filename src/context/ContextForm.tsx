"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface ChildrenProps {
  children: ReactNode;
}

interface ContextValuesProps {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  nationality: string;
  setNationality: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  age: string;
  setAge: Dispatch<SetStateAction<string>>;
  gender: string;
  setGender: Dispatch<SetStateAction<string>>;
  address: string;
  setAddress: Dispatch<SetStateAction<string>>;
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  cep: string;
  setCep: Dispatch<SetStateAction<string>>;
  course: string;
  setCourse: Dispatch<SetStateAction<string>>;
  institution: string;
  setInstitution: Dispatch<SetStateAction<string>>;
  completionYear: string;
  setCompletionYear: Dispatch<SetStateAction<string>>;
  handleInputChange: (index: any, field: CursoField, value: any) => void;
  handleRemove: (indexToRemove: any) => void;
  handleButton: () => void;
  cursos: CursosProps[];
  handleInputExperienceChange: (index: any, field: ExperienceField, value: any) => void;
  handleRemoveItemExperience: (indexToRemove: any) => void;
  handleButtonExperience: () => void;
  experience: ExperienceProps[];
}

type CursoField = "course" | "institution" | "completionYear";
type CursosProps = {
  course: string;
  institution: string;
  completionYear: string;
}

type ExperienceField = "enterprise" | "startIn" | "endIn" | "position";
type ExperienceProps = {
  enterprise: string;
  startIn: string;
  endIn: string;
  position: string;
};

export const ContextForm = createContext({} as ContextValuesProps);

function ContextForms({ children }: ChildrenProps) {
  const [cursos, setCursos] = useState([
    { course: "", institution: "", completionYear: "" },
  ]);

  const [experience, setExperience] = useState([
    { enterprise: "", startIn: "", endIn: "", position: "" }
  ]);

  const handleInputExperienceChange = (index: any, field: ExperienceField, value: any ) => {
    const updateExperience = [...experience];
    updateExperience[index][field] = value;
    setExperience(updateExperience);
  }

  const handleButtonExperience = () => {
    setExperience((prevExperience) => [
      ...prevExperience,
      { enterprise: "", startIn: "", endIn: "", position: "" }
    ])
  }

  const handleRemoveItemExperience = (indexToRemove: any) => {
    setExperience((prevExperience) => 
      prevExperience.filter((_,index) => index !== indexToRemove)
    );
  };

  const handleInputChange = (index: any, field: CursoField, value: any) => {
    const updatedCourses = [...cursos];
    updatedCourses[index][field] = value;
    setCursos(updatedCourses);
  };

  const handleButton = () => {
    setCursos((prevCursos) => [
      ...prevCursos,
      { course: "", institution: "", completionYear: "" },
    ]);
  };

  const handleRemove = (indexToRemove: any) => {
    setCursos((prevCursos) =>
      prevCursos.filter((_, index) => index !== indexToRemove)
    );
  };

  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [cep, setCep] = useState("");
  const [state, setState] = useState("");
  const [course, setCourse] = useState("");
  const [institution, setInstitution] = useState("");
  const [completionYear, setCompletionYear] = useState("");

  return (
    <ContextForm.Provider
      value={{
        name,
        setName,
        nationality,
        setNationality,
        email,
        setEmail,
        age,
        setAge,
        gender,
        setGender,
        address,
        setAddress,
        city,
        setCity,
        state,
        setState,
        cep,
        setCep,
        course,
        setCourse,
        institution,
        setInstitution,
        completionYear,
        setCompletionYear,
        handleButton,
        handleRemove,
        handleInputChange,
        cursos,
        handleInputExperienceChange,
        handleRemoveItemExperience,
        handleButtonExperience,
        experience
      }}>
      {children}
    </ContextForm.Provider>
  );
}

export default ContextForms;
