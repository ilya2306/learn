"use client";
import Link from "next/link";
import React, {useEffect} from "react";

const getVacancies = async (): Promise<Response | undefined> => {
    try {
        const response = await fetch('https://learn-9fc9.vercel.app/api/vacancies/list')

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}


type Response = {
    page: number;
    limit: number;
    total: number
    totalPages: number;
    data: Array<Vacancy>;
}
type Vacancy = {
    id: number;
    title: string;
    salary: {
        from: number;
        to: number;
        currency: string;
        gross: boolean;
    }
    priority: number;
    location: string;
    experience: string;
    schedule: string
    employment: string
    published: string
    url: string
}

export default function Vacancies() {
    const [vacancies, setData] = React.useState<Response | null>(null);

    useEffect(function () {
        getVacancies()
            .then((response) => setData(response ?? null))
    }, [])

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main>
                <div>
                    <Link href={"/admin/vacancies/add"}>Add new</Link>
                </div>
                <div>
                    Vacancies list
                    <div>
                        {vacancies?.data.map((vacancy: Vacancy) => <div key={vacancy.id}>
                            <div>
                                {vacancy.title}
                            </div>
                            <div>{vacancy.salary.from} - {vacancy.salary.to} {vacancy.salary.currency}</div>
                        </div>)}
                    </div>
                </div>
            </main>
        </div>
    );
}
