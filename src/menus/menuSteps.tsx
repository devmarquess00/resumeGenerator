'use client'
import { useEffect, useState } from 'react';
import {
    FaUser,
    FaGraduationCap,
    FaUserTie,
    FaPlus
} from 'react-icons/fa6';

export const menuSteps = [
    { id: 1, label: 'Dados Pessoais', icon: <FaUser /> },
    { id: 2, label: 'Formação', icon: <FaGraduationCap /> },
    { id: 3, label: 'Experiência', icon: <FaUserTie /> },
    { id: 4, label: 'Infos adicionais', icon: <FaPlus /> },
]