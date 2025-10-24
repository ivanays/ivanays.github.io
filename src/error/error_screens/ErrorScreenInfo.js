import React from "react";

import '../error_content/ErrorContentProc.scss';

export function ErrorScreenInfo({ error }) {
    console.log(error);
    return (

        <>
            <div className="error error__proc">
                <h2 className="error__message">Вся информация +7 000 000 00 00</h2>
            </div>
        </>

    );
}