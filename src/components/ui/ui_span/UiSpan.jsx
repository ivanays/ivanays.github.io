import React from "react";

export const UiSpan = ({ id, className, children, ref }) => {
    return (
        <>
            <span id={id} className={className} ref={ref}>{children}</span>
        </>
    );
}
