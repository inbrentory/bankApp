import React, { useState, useContext } from 'react'
import { UserContext } from './userContext';
import { UserContextList } from './userContextList';
import { UserContextSafe } from './userContextSafe';
import { Card } from './Cards';

function FormAllData() {
    const {initialData, setInitialData}         = useContext(UserContext); // this is context to be use in every children compo
    const {storage, setStorage}                 = useContext(UserContextList); // this is context to be use in every children compo
    const {safe, setSafe}                       = useContext(UserContextSafe); // this is context to be use in every children compo

    return (
        <Card
        bgcolor="primary"
        header="Create Account"
        body ={
        <div>
            <pre>{JSON.stringify(storage, null, 5)}</pre>
        </div>
        }
        />
        
        
    )
}

export default FormAllData
