import Link from "next/link";

export default function Vacancies() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main>
                <div>
                    <Link href={"/admin/vacancies/add"}>Add new</Link>
                </div>
                <div>
                    Vacancies list
                </div>
            </main>
        </div>
    );
}
