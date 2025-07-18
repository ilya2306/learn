import React from "react";

export const RowContent = ({children, className}: { children: React.ReactNode; className?: string }) => {
    return <div className={className}>{children}</div>
}
