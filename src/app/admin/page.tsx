import {ReactNode} from "react";

type AdminPageProps = {
    children: ReactNode
}

export default function AdminPage(props: AdminPageProps) {
    return (
        <div {...props}/>
    )
}
