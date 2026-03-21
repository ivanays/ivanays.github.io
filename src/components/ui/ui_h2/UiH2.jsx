import React from "react";

export const UiH2 = ({ className, id, children }) => {
    return (
        <>
            <h2 className={className} id={id}>{children}</h2>
        </>
    );
}
