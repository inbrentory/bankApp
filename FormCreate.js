import React, { useState } from 'react'
import FormCreateData from './FormCreateData';


function FormCreate() {
    const [create, setCreate] = useState(false); // 1.this will be the setter of whether page show createAccount or Success.

    function confirmation() {
        setCreate(true);
    };

    return (
        <div>
            { ! create ? (
                    <FormCreateData confirmation={confirmation}/>
                ):(
                    <>
                    <div>
                        <h2>Success!</h2>
                    </div>
                    <div>
                    <a href="#/Deposit" className="btn btn-primary">Manage Balance!</a>
                    </div>
                    </>
                )
            }
        </div>
    )
}

export default FormCreate
