import {ReactNode} from "react";

export default function AdminPage(props: Readonly<{ children: ReactNode }>) {
    return (
        <div {...props}/>
    )
}
