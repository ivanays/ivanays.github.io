import React from "react";

export const UiLi = ({ className, id, children, onMouseEnter, onMouseLeave }) => {
    return (
        <>
            <li className={className} id={id} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {children}
            </li>
        </>
    );
}
