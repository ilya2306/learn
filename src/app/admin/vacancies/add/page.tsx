"use client";

import React from "react";
import {useRouter} from 'next/navigation'
import {VacancyForm} from "@/app/ui/VacancyForm";


const addVacancy = async (formData: Record<string, unknown>) => {
    try {
        const response = await fetch('/api/vacancies/add', {
            method: 'POST',
            body: JSON.stringify(formData)
        })

        const rJSON = await response.json();
        console.log("rJSON", rJSON);

        return rJSON;
    } catch (error) {
        console.error(error);
    }
}

export default function VacanciesAddPage() {
    const {push} = useRouter()
    const handleSubmit = React.useCallback((formData: Record<string, string | number | boolean>) => {
        addVacancy(formData)
            .then(() => {
                alert("Вакансия успешно добавлена")
                push('/admin/vacancies')

            })
            .catch(alert)

    }, [push]);

    return (
        <div className="flex flex-col">
            <header>
                <h1>Новая вакансия</h1>
            </header>
            <VacancyForm onSubmit={handleSubmit}/>
        </div>
    )
}
