import postgres from 'postgres';
import {NextResponse} from 'next/server';

const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'});

// eslint-disable-next-line
export async function GET(request: Request, context: any) {
    const {id} = await context.params;
    try {
        const query = sql`
            SELECT *
            FROM vacancies
            WHERE id = ${id} LIMIT 1
        `;

        const v = await query;

        if (!v || v.length === 0) {
            return NextResponse.json(
                {error: "Vacancy not found"},
                {status: 404}
            )
        }

        const vacancy = v[0];
        // Форматирование результата
        const result = {
            id: vacancy.id,
            title: vacancy.title,
            priority: vacancy.priority,
            salary: {
                from: vacancy.salary_from,
                to: vacancy.salary_to,
                currency: vacancy.salary_currency,
                gross: vacancy.salary_gross
            },
            location: vacancy.location,
            experience: vacancy.experience,
            schedule: vacancy.schedule,
            employment: vacancy.employment,
            published: vacancy.published,
            url: vacancy.url
        };

        return NextResponse.json(result, {status: 200});

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {error: "Internal server error"},
            {status: 500}
        );
    }
}

// eslint-disable-next-line
export async function PUT(request: Request, {params}: any ) {
    const {id} = await params;
    try {

        const body = await request.json();
        console.log(body);

        // Валидация обязательных полей
        if (!body.title) {
            return NextResponse.json(
                {error: "Missing required fields"},
                {status: 400}
            );
        }

        // Проверка приоритета
        if (body.priority < 1 || body.priority > 5) {
            return NextResponse.json(
                {error: "Priority must be between 1 and 5"},
                {status: 400}
            );
        }

        // Вставка данных в базу
        await sql`
            UPDATE vacancies
            SET title=${body.title},
                description=${body.description || ""},
                active = ${body.active !== undefined ? body.active : true},
                priority = ${body.priority !== undefined ? body.priority : 3},
                salary_from = ${body.salary_from !== undefined ? body.salary_from : null},
                salary_to = ${body.salary_to !== undefined ? body.salary_to : null},
                salary_currency = ${body.salary_currency || "RUR"},
                salary_gross = ${body.salary_gross !== undefined ? body.salary_gross : false},
                location=${body.location || ""},
                experience=${body.experience || ""},
                url = ${body.url || ""}
            WHERE id = ${id}
        `;

        return NextResponse.json(
            {message: "Vacancy changed successfully"},
            {status: 201}
        );

    } catch (error) {
        console.error("Database error:", error);
        return NextResponse.json(
            {error: "Internal server error"},
            {status: 500}
        );
    }
}
