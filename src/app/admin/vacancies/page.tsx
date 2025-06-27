"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import {Vacancy} from "@/app/admin/vacancies/@typings";
import {RowLabel} from "@/app/ui/RowLabel";
import {RowContent} from "@/app/ui/RowContent";
import {Row} from "@/app/ui/Row";

const getVacancies = async (filter: {
    page?: number;
    limit?: number;
    minSalary?: number;
    maxSalary?: number;
    priority?: number;
}): Promise<Response | undefined> => {
    try {

        const search = new URLSearchParams();
        Object.entries(filter).forEach(([key, value]) => {
            if (value) {
                search.set(key, value.toString());
            }
        });

        const response = await fetch(`/api/vacancies/list?${search.toString()}`);

        const data = await response.json();

        if (response.status === 200) return data
        else {
            return undefined
        }
    } catch (error) {
        console.error(error);

        throw error
    }
}

type Response = {
    page: number;
    limit: number;
    total: number
    totalPages: number;
    data: Array<Vacancy>;
}

const VACANCY_LOCATION = {
    REMOTE: "Удаленная работа",
    YO: "Йошкар-Ола",
    MSK: "Москва",
    SPB: "Санкт-Петербург",
} as const;


function isKnownLocation(location: string): location is keyof typeof VACANCY_LOCATION {
    return location in VACANCY_LOCATION
}

function resolveLocation(location: string) {
    if (isKnownLocation(location)) return VACANCY_LOCATION[location]
    return location
}


export default function Vacancies() {
    const [vacancies, setVacancies] = React.useState<Response["data"] | null>(null);
    const [pagination, setPagination] = React.useState<Omit<Response, "data"> | null>(null)
    const [page, setPage] = React.useState<number>(1);

    useEffect(function () {
        getVacancies({limit: 2, page})
            .then((response) => {
                if (response) {
                    const {data, ...pagination} = response
                    setVacancies(state => [...new Set((state || []).concat(data))])
                    setPagination(pagination)
                }

            })
    }, [page])

    const resolveSalary = (salary: Vacancy["salary"]) => {
        if (salary) {
            if (salary.from && salary.to) {
                if (salary.from === salary.to) {
                    return `${salary.from} ${salary.currency ?? ""}`
                }
                return `${salary.from} - ${salary.to} ${salary.currency ?? ""}`
            } else if (salary.from) {
                return `${salary.from} ${salary.currency ?? ""}`
            } else if (salary.to) {
                return `${salary.to} ${salary.currency ?? ""}`
            }
        }

        return null
    }

    const resolveExperience = (experience: Vacancy["experience"]) => {
        let label = ''
        switch (experience) {
            case "WORK_EXPERIENCE_MORE_THAN_6_YEAR":
                label = "более 6 лет"
                break
            case "WORK_EXPERIENCE_FROM_3_YEAR_TO_6_YEAR":
                label = "от 3 до 6 лет"
                break
            case "WORK_EXPERIENCE_FROM_1_YEAR_TO_3_YEAR":
                label = "от 1 года до 3 лет"
                break
            case "NO_WORK_EXPERIENCE":
                label = "Без опыта"
                break
            default:
                label = ""
        }

        return label;
    }

    return (
        <div className="">
            <main>
                <div>
                    <Link href={"/admin/vacancies/add"}>Add new</Link>
                </div>
                {vacancies ? <div>
                    Vacancies list
                    <div className="flex flex-col gap-y-2 w-full">
                        {vacancies?.map((vacancy: Vacancy) =>
                            <Link key={vacancy.id} className="flex flex-col p-4 rounded-sm border-solid border-gray-500 border-1" href={"/admin/vacancies/" + vacancy.id}>
                                <Row>
                                    <span className="font-bold">{vacancy.title}</span>
                                </Row>
                                {vacancy.location ? (
                                    <Row>
                                        {resolveLocation(vacancy.location)}
                                    </Row>
                                ) : null}
                                {vacancy.priority !== undefined ? <Row>
                                    <RowLabel>Приоритет:</RowLabel>
                                    <RowContent>{vacancy.priority}</RowContent>
                                </Row> : null}
                                {vacancy.salary ? <Row>
                                    <RowLabel>Вознаграждение:</RowLabel>
                                    <RowContent className="flex flex-col">
                                        <span>{resolveSalary(vacancy.salary)}</span>
                                        {vacancy.salary.gross ? <span>До вычета налогов</span> : null}
                                    </RowContent>
                                </Row> : null}
                                {vacancy.experience ? <Row>
                                    <RowLabel>Опыт:</RowLabel>
                                    <RowContent>{resolveExperience(vacancy.experience)}</RowContent>
                                </Row> : null}
                                {vacancy.published ? <Row>
                                    <RowLabel>
                                        Опубликовано:
                                    </RowLabel>
                                    <RowContent>
                                        {new Date(vacancy.published).toLocaleDateString('ru-RU')}
                                    </RowContent>
                                </Row> : null}
                            </Link>)}
                    </div>
                </div> : null}
                {pagination?.page && pagination?.totalPages && pagination.page < pagination.totalPages ? <button onClick={() => setPage(page + 1)}>Загрузить еще</button> : null}
            </main>
        </div>
    );
}
