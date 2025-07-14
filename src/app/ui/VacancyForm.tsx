"use client";

import React, {FormEvent} from "react";
import {FieldSet} from "@/app/ui/FieldSet";
import {WithLabel} from "@/app/ui/WithLabel";
import {Vacancy} from "@/app/admin/vacancies/@typings";

function parseData(key: string, value: FormDataEntryValue) {
    switch (key) {
        case "salary_from":
        case "salary_to":
            return Number(value);
        case "salary_gross":
            return value === "on";
        default:
            return value as unknown as string;
    }
}

export function VacancyForm({data, onSubmit, showDelete}: { data?: Vacancy; onSubmit: (event: Record<string, string | number | boolean>) => void, showDelete?: boolean }) {
    const [changed, setChanged] = React.useState(false)

    const handleSubmit = React.useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data: Record<string, string | number | boolean> = {};

        formData.entries().forEach(([key, value]) => {
            data[key] = parseData(key, value);
        })

        console.log("data", data);

        onSubmit(data)
    }, [onSubmit]);

    return (
        <form onSubmit={handleSubmit} onChange={() => {
            if (!changed) setChanged(true)
        }}>
            <input type="hidden" name="id" value={data?.id} readOnly/>
            <FieldSet legend={"Основная информация:"}>
                <WithLabel label="Название">
                    <input type="text" name="title" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" defaultValue={data?.title}/>
                </WithLabel>
                <WithLabel label="Описание">
                        <textarea
                            name="description"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            cols={3}
                            defaultValue={data?.description}
                        />
                </WithLabel>
            </FieldSet>
            <FieldSet legend={"Дополнительная информация"}>
                <WithLabel label={"Локация"}>
                    <select name="location" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" defaultValue={data?.location}>
                        <option value="YO" defaultChecked>Йошкар-Ола</option>
                        <option value="MSK">Москва</option>
                        <option value="SPB">Санкт-Петербург</option>
                        <option value="REMOTE">Удаленная работа</option>
                    </select>
                </WithLabel>
                <WithLabel label="Опыт работы">
                    <select name="experience" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" value={data?.experience}>
                        <option value="WORK_EXPERIENCE_MORE_THAN_6_YEAR">более 6 лет</option>
                        <option value="WORK_EXPERIENCE_FROM_3_YEAR_TO_6_YEAR">от 3 до 6 лет</option>
                        <option value="WORK_EXPERIENCE_FROM_1_YEAR_TO_3_YEAR">от 1 года до 3 лет</option>
                        <option value="NO_WORK_EXPERIENCE">Без опыта</option>
                    </select>
                </WithLabel>
                <WithLabel label={"Ссылка на вакансию"}>
                    <input type="url" name="url" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" defaultValue={data?.url}/>
                </WithLabel>
            </FieldSet>
            <FieldSet legend={"Заработная плата"}>
                <div className="flex flex-row items-center gap-x-6">
                    <label className="flex items-center gap-2">
                        <span>От</span>
                        <input type="number" name="salary_from" className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" defaultValue={data?.salary?.from}/>
                    </label>
                    <label className="flex items-center gap-2">
                        <span>До</span>
                        <input type="number" name="salary_to" className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" defaultValue={data?.salary?.to}/>
                    </label>
                    <label className="flex items-center gap-2">
                        <span>Валюта</span>
                        <select name="salary_currency" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" defaultValue={data?.salary?.currency}>
                            <option value="RUB" defaultChecked>RUB</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </label>
                </div>
                <label className="flex gap-2">
                    <input type="checkbox" name="salary_gross" defaultChecked={data?.salary?.gross}/>
                    <span>Оклад указан до вычета налогов</span>
                </label>
            </FieldSet>
            <FieldSet legend={"Прочая информация"}>
                <div>
                    <label>
                        <input type="radio" name="work_employment" value="full-time" defaultChecked/>
                        Полная занятость
                    </label>
                    <label>
                        <input type="radio" name="work_employment" value="part-time"/>
                        Частная занятость
                    </label>
                </div>
                <div>
                    <label>График работы
                        <input type="text" name="work_schedule"/>
                    </label>
                </div>
                <div>
                    <label>Рабочее время
                        c: <input type="text" name="hors_from"/>
                        по: <input type="text" name="hours_to"/>
                    </label>
                </div>
                <div>
                    <label>
                        Департамент
                        <select name="department">
                            <option value="developer" defaultChecked>Разработка</option>
                            <option value="backoffice">Бэк-офис</option>
                        </select>
                    </label>
                </div>
            </FieldSet>
            {showDelete ? <button type="button">Удалить</button> : null}
            {changed ? <input type="submit" value={"Сохранить"}/> : null}
        </form>
    )
}
