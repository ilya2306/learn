import React, {ReactNode} from "react";

export function WithLabel({label, children}: { label: ReactNode; children: ReactNode }) {
    return <label>
        <span className="block text-sm/6 font-medium text-gray-900">
            {label}
        </span>
        <div className="mt-2">
            {children}
        </div>
    </label>
}
