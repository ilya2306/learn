import React from "react";
import Link from "next/link";
import {VacancyForm} from "@/app/ui/VacancyForm";

async function getVacancy(id: string) {
    const response = await fetch(`http://localhost:3000/api/vacancies/${id}`);
    return await response.json();
}

async function editVacancy(formData: Record<string, unknown>) {
    "use server";
    try {
        const response = await fetch(`http://localhost:3000/api/vacancies/${formData.id}`, {
            method: 'PUT',
            body: JSON.stringify(formData)
        })

        const rJSON = await response.json();
        console.log("rJSON", rJSON);

        return rJSON;
    } catch (error) {
        console.error(error);
    }
}

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ id: string }>
}) {
    const {id} = await params
    let data;
    try {
        data = await getVacancy(id);
        console.log("data", data);
    } catch (error) {
        console.error(error);
    }

    if (!data) {
        return (<div>
            <h1>Ошибка</h1>
            <div>Вакансия не найдена</div>
            <Link href="/admin/vacancies">Вернуться к списку вакансий</Link>
        </div>)
    }

    return (
        <div className="flex flex-col">
            <header>
                <h1 className="text-3xl font-bold">Редактирование вакансии</h1>
            </header>
            <VacancyForm data={data} onSubmit={editVacancy}/>
        </div>
    )
}
