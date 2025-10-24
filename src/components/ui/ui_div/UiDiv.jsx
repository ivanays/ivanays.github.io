import React from "react";

export const UiDiv = ({ className, id, children, ref }) => {
    return (
        <>
            <div className={className} id={id} ref={ref}>
                {children}
            </div>
        </>
    );
}
