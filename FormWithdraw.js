import React, { useState, useContext } from 'react'
import { UserContext } from './userContext';
import { UserContextList } from './userContextList';
import { UserContextSafe } from './userContextSafe';
import { Card } from './Cards';

function FormWithdraw() {
    const {initialData, setInitialData}       = useContext(UserContext); // this is context to be use in every children compo
    const {storage, setStorage}                 = useContext(UserContextList); // this is context to be use in every children compo
    const {safe, setSafe}                       = useContext(UserContextSafe); // this is context to be use in every children compo

    const [input, setInput]                     = useState(0)

    function Subtract(){
        
        let num1 = Number(initialData.amount);
        let num2 = Number(input);
        console.log(num1 - num2); 
        let result = (num1 - num2);

        let userNew = {
            name: initialData.name, email: initialData.email, password: initialData.password, amount: result
        };

        let userInfo =
        [
            {
              id: 1,
              user: [
                { ...safe,  },
              ]
            },
            { id: 2, user: [{name: initialData.name, email: initialData.email, password: initialData.password, amount: result}] }
        ];
        setInitialData(userNew);
        setStorage([userInfo]);       
    }
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        Subtract(input);
    }
    return (
        <Card
        bgcolor="info"
        header="Withdraw"
        color="black"
        body ={
                <div>
                    <h5>Current Balance: ${Number(initialData.amount)}</h5>
                    {/* <pre>{JSON.stringify(storage, null, 5)}</pre> */}
                    {/* <pre>{JSON.stringify(initialData)}</pre>
                    <pre>{JSON.stringify(safe, null, 5)}</pre> */}
                    <input 
                    type="number" 
                    id="amount" 
                    name='amount'
                    placeholder="Enter amount" 
                    onChange={handleChange}
                    />
                    <button 
                    type="submit"
                    onClick = {handleSubmit} 
                    >
                        Withdraw
                    </button>
                    <h5 className="text-center">Deposit?<a className="text-warning" href="#/Deposit/"> click </a></h5>
                </div>
                }
        />
    )
}


export default FormWithdraw
