import React from 'react';

export const UiButton = ({ id, className, children, onClick, ref, onMouseEnter, onMouseLeave, style, disabled }) => {

    return (
        <>
            <button
                id={id}
                className={className}
                onClick={onClick}
                ref={ref}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={style}
                disabled={disabled}
            >
                {children}
            </button>
        </>
    );
};
