import React from "react";

export const UiLink = ({ href, className, dataBlock, dataTab, id, children, style, disabled, ref }) => {
    return (
        <>
            <a
                href={href}
                className={className}
                data-block={dataBlock}
                dataTab={dataTab}
                id={id}
                style={style}
                disabled={disabled}
                ref={ref}
            >
                {children}
            </a>
        </>
    );
}
