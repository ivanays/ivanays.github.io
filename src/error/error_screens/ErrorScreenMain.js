import React from "react";

import '../error_content/ErrorContentProc.scss';

export function ErrorScreenMain({ error }) {
    console.log(error);
    return (

        <>
            <div className="error error__proc">
                <h2 className="error__message">Ваш звонок +7 000 000 00 00</h2>
            </div>
        </>

    );
} 