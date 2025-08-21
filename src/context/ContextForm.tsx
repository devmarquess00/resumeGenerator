"use client";
import {
  Children,
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
}

export const ContextForm = createContext({} as ContextValuesProps);

function ContextForms({ children }: ChildrenProps) {
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [email, setEmail] = useState("");

  return (
    <ContextForm.Provider
      value={{
        name,
        setName,
        nationality,
        setNationality,
        email,
        setEmail
      }}>
      {children}
    </ContextForm.Provider>
  );
}

export default ContextForms;
