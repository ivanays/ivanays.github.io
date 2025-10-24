import React from "react";

export const UiH1 = ({ className, id, style, children }) => {
    return (
        <>
            <h1 className={className} id={id} style={style}>{children}</h1>
        </>
    );
}
