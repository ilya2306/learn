import postgres from "postgres";
import {NextResponse} from "next/server";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// Функция для инициализации таблицы
async function initTable() {
    try {
        await sql`
      CREATE TABLE IF NOT EXISTS employees (
        corporate_email VARCHAR(150) UNIQUE NOT NULL PRIMARY KEY,
        photo BYTEA,
        last_name VARCHAR(100) NOT NULL,
        first_name VARCHAR(100) NOT NULL,
        legal_entity VARCHAR(150) NOT NULL,
        department VARCHAR(150) NOT NULL,
        team VARCHAR(150) NOT NULL,
        position VARCHAR(150) NOT NULL,
        work_location VARCHAR(100) NOT NULL,
        about_me TEXT
      )
    `;
        await sql`
    CREATE TABLE IF NOT EXISTS employment_documents (
     id SERIAL PRIMARY KEY,
     document_name VARCHAR(255) NOT NULL
    )
`;
        await sql`
            CREATE TABLE IF NOT EXISTS help_contacts
            (
                email          VARCHAR(150) PRIMARY KEY,
                category       VARCHAR(100) NOT NULL,
                full_name      VARCHAR(200),
                position       VARCHAR(150),
                office_address TEXT,
                phone          VARCHAR(50),
                telegram       VARCHAR(100),
                mattermost     VARCHAR(100)
            )
        `;
        await sql`
            CREATE TABLE IF NOT EXISTS mentors
            (
                email          VARCHAR(150) PRIMARY KEY,
                employee_id    INTEGER REFERENCES employees (id) ON DELETE CASCADE,
                role           VARCHAR(20),
                full_name      VARCHAR(200) NOT NULL,
                position       VARCHAR(150) NOT NULL,
                office_address TEXT,
                phone          VARCHAR(50),
                telegram       VARCHAR(100),
                mattermost     VARCHAR(100)
            )`;
        await sql`
            INSERT INTO employment_documents (document_name)
            VALUES ('Паспорт РФ'),
                   ('Трудовая книжка либо форма СТД-Р'),
                   ('СНИЛС'),
                   ('ИНН'),
                   ('Военный билет (для военнообязанных)'),
                   ('Диплом об образовании'),
                   ('Фактический адрес (если отличается от прописки)'),
                   ('Номер телефона'),
                   ('Адрес личной электронной почты'),
                   ('Реквизиты банковской карты'),
                   ('Свидетельство о заключении брака'),
                   ('Свидетельство о рождении ребёнка'),
                   ('Справка по форме 2-НДФЛ')`;
        console.log("Table checked/created successfully");
    } catch (error) {
        console.error("Error initializing table:", error);
        throw error;
    }
}

export async function GET() {
    try {
        // Инициализация таблицы перед обработкой запроса
        await initTable();
        return NextResponse.json(
            { message: "Vacancy added successfully" },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);
    }
}
