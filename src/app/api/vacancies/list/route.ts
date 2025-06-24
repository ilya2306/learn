// app/api/vacancies/route.ts
import postgres from 'postgres';
import { NextResponse } from 'next/server';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function GET(request: Request) {
    console.log('GET');
    try {
        // Получение параметров запроса
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1', 10);
        const limit = parseInt(searchParams.get('limit') || '10', 10);
        const minSalary = searchParams.get('minSalary');
        const maxSalary = searchParams.get('maxSalary');
        const priority = searchParams.get('priority');

        // Расчет смещения для пагинации
        const offset = (page - 1) * limit;

    const query = sql`
      SELECT *, count(*) OVER() AS total_count
      FROM vacancies
      WHERE 1 = 1
          ${minSalary ? sql` AND (salary_to >= ${minSalary} OR salary_from >= ${minSalary})` : sql``}
      ${maxSalary ? sql` AND (salary_from <= ${maxSalary} OR salary_to <= ${maxSalary})` : sql``}
      ${priority ? sql` AND priority = ${priority}` : sql``}
      ORDER BY priority DESC, published DESC
      LIMIT ${limit}
      OFFSET ${offset}
    `;

        // Выполнение запроса
        const vacancies = await query;

        // Извлечение общего количества записей
        const totalCount = vacancies[0]?.total_count || 0;

        // Форматирование результата
        const result = {
            page,
            limit,
            total: totalCount,
            totalPages: Math.ceil(totalCount / limit),
            data: vacancies.map(v => ({
                id: v.id,
                title: v.title,
                priority: v.priority,
                salary: {
                    from: v.salary_from,
                    to: v.salary_to,
                    currency: v.salary_currency,
                    gross: v.salary_gross
                },
                location: v.location,
                experience: v.experience,
                published: v.published,
                url: v.url
            }))
        };

        console.log("result", result);
        return NextResponse.json(result, { status: 200 });

    } catch (error) {
        console.error("Database error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
