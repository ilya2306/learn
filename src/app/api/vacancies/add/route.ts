import postgres from 'postgres';
import { NextResponse } from 'next/server';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// Функция для инициализации таблицы
async function initTable() {
    try {
        await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        await sql`
      CREATE TABLE IF NOT EXISTS vacancies (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        active BOOLEAN NOT NULL DEFAULT TRUE,
        title TEXT NOT NULL,
        priority INTEGER NOT NULL CHECK (priority BETWEEN 1 AND 5) DEFAULT 3,
        description TEXT,
        salary_from INTEGER,
        salary_to INTEGER,
        salary_currency VARCHAR(10),
        salary_gross BOOLEAN,
        location TEXT,
        experience TEXT,
        published TIMESTAMP WITH TIME ZONE NOT NULL,
        url TEXT NOT NULL
      )
    `;
        console.log("Table checked/created successfully");
    } catch (error) {
        console.error("Error initializing table:", error);
        throw error;
    }
}

export async function POST(request: Request) {
    try {
        // Инициализация таблицы перед обработкой запроса
        await initTable();

        const body = await request.json();
        console.log(body);

        // Валидация обязательных полей
        if (!body.title) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Проверка приоритета
        if (body.priority < 1 || body.priority > 5) {
            return NextResponse.json(
                { error: "Priority must be between 1 and 5" },
                { status: 400 }
            );
        }

        // Вставка данных в базу
        await sql`
      INSERT INTO vacancies (
        title, active, description, priority, salary_from, salary_to,
        salary_currency, salary_gross, location,
        experience, published,
        url
      ) VALUES (
        ${body.title},
        true,
        ${body.description || ''},
        ${body.priority || 3},
        ${body.salary_from || null},
        ${body.salary_to || null},
        ${body.salary_currency || 'RUB'},
        ${body.salary_gross || false},
        ${body.location || ''},
        ${body.experience || ''},
        ${new Date().toISOString()},
        ${body.url || ''}
      )
    `;

        return NextResponse.json(
            { message: "Vacancy added successfully" },
            { status: 201 }
        );

    } catch (error) {
        console.error("Database error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
