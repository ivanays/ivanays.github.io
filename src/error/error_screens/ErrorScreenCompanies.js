import React from "react";

import '../error_content/ErrorContentProc.scss';

export function ErrorScreenCompanies({ error }) {
    console.log(error);
    return (

        <>
            <div className="error error__proc">
                <h2 className="error__message">Всё об оборудовании +7 000 000 00 00</h2>
            </div>
        </>

    );
}