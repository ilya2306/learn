import Link from "next/link";

export default function SideNav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href={"/admin/dashboard"}>Dashboard</Link>
                </li>
                <li>
                    <Link href={"/admin/adaptation"}>Adaptation</Link>
                </li>
                <li>
                    <Link href={"/admin/vacancies"}>Vacancies</Link>
                </li>
            </ul>
        </nav>
    )
}
