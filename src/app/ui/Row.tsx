import React from "react";

export const Row = ({children, className}: { children: React.ReactNode, className?: string }) => {
    return <div className={`flex flex-row gap-x-2 ${className ?? ""}`}>
        {children}
    </div>
}
