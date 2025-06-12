import Link from "next/link";
import {ReactNode} from "react";

export default function AdminHome({children}: Readonly<{ children: ReactNode }>) {
    return (
        <div className="grid grid-cols-2">
            <aside className="">
                <nav>
                    <ul>
                        <li>
                            <Link href={"/admin/adaptation"}>Adaptation</Link>
                        </li>
                        <li>
                            <Link href={"/admin/vacancies"}>Vacancies</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
            {children}
        </div>
    )
}
