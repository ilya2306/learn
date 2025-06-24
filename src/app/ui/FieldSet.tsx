import React, {ReactNode} from "react";

export function FieldSet({legend, children}: { legend: ReactNode; children: ReactNode }) {
    return <fieldset className="border-b border-gray-900/10 pb-6">
        <legend className="pt-2">{legend}</legend>
        <div>
            {children}
        </div>
    </fieldset>
}
