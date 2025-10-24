import React from "react";

export const UiP = ({ className, id, children }) => {
    return (
        <>
            <p className={className} id={id}>{children}</p>
        </>
    );
}
