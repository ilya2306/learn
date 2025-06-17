"use client";

import React, {FormEvent, ReactNode} from "react";

function FieldSet({legend, children}: { legend: ReactNode; children: ReactNode }) {
    return <fieldset className="border-b border-gray-900/10 pb-6">
        <legend className="pt-2">{legend}</legend>
        <div>
            {children}
        </div>
    </fieldset>
}

function WithLabel({label, children}: { label: ReactNode; children: ReactNode }) {
    return <label>
        <span className="block text-sm/6 font-medium text-gray-900">
            {label}
        </span>
        <div className="mt-2">
            {children}
        </div>
    </label>
}

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

function parseData(key: string, value: string) {
    switch (key) {
        case "salary_from":
        case "salary_to":
            return Number(value);
        case "salary_gross":
            return value === "on";
        default:
            return value
    }
}

export default function VacanciesAddPage() {
    const handleSubmit = React.useCallback((event: FormEvent<HTMLFormElement>) => {
        const formData = new FormData(event.currentTarget);
        const data: Record<string, unknown> = {};

        formData.entries().forEach(([key, value]) => {
            data[key] = parseData(key, value as unknown as string);
        })

        addVacancy(data);

        event.preventDefault();
    }, []);

    return (
        <div className="flex flex-col">
            <header>
                <h1>Новая вакансия</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <FieldSet legend={"Основная информация:"}>
                    <WithLabel label="Название">
                        <input type="text" name="title" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                    </WithLabel>
                    <WithLabel label="Описание">
                        <textarea
                            name="description"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            cols={3}
                        />
                    </WithLabel>
                </FieldSet>
                <FieldSet legend={"Дополнительная информация"}>
                    <WithLabel label={"Локация"}>
                        <select name="location" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                            <option value="YO" defaultChecked>Йошкар-Ола</option>
                            <option value="MSK">Москва</option>
                            <option value="SPB">Санкт-Петербург</option>
                            <option value="REMOTE">Удаленная работа</option>
                        </select>
                    </WithLabel>
                    <WithLabel label="Опыт работы">
                        <select name="experience" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                            <option value="WORK_EXPERIENCE_MORE_THAN_6_YEAR">более 6 лет</option>
                            <option value="WORK_EXPERIENCE_FROM_3_YEAR_TO_6_YEAR">от 3 до 6 лет</option>
                            <option value="WORK_EXPERIENCE_FROM_1_YEAR_TO_3_YEAR">от 1 года до 3 лет</option>
                            <option value="NO_WORK_EXPERIENCE">Без опыта</option>
                        </select>
                    </WithLabel>
                    <WithLabel label={"Ссылка на вакансию"}>
                        <input type="url" name="url" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                    </WithLabel>
                </FieldSet>
                <FieldSet legend={"Заработная плата"}>
                    <div className="flex flex-row items-center gap-x-6">
                        <label className="flex items-center gap-2">
                            <span>От</span>
                            <input type="number" name="salary_from" className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </label>
                        <label className="flex items-center gap-2">
                            <span>До</span>
                            <input type="number" name="salary_to" className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </label>
                        <label className="flex items-center gap-2">
                            <span>Валюта</span>
                            <select name="salary_currency" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                <option value="RUB" defaultChecked>RUB</option>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                            </select>
                        </label>
                    </div>
                    <label className="flex gap-2">
                        <input type="checkbox" name="salary_gross"/>
                        <span>Оклад указан до вычета налогов</span>
                    </label>
                </FieldSet>
                <input type="submit" value={"Сохранить"}/>
            </form>
        </div>
    )
}
