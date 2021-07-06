import React, { useContext } from 'react'
import FormCreateUse from './FormCreateUse'
import { UserContext } from './userContext';
import { UserContextList } from './userContextList';
import { UserContextSafe } from './userContextSafe';
import validate from './validation'
import { Card } from './Cards';

export default function FormCreateData({confirmation}) {
    const {handleChange, handleSubmit, value, errors} = FormCreateUse(confirmation, validate);
    const {initialData}                            = useContext(UserContext); // this is context to be use in every children compo
    const {storage}                                = useContext(UserContextList); // this is context to be use in every children compo
    const {safe}                                   = useContext(UserContextSafe);
    
    console.log(JSON.stringify(storage));
    console.log(JSON.stringify(initialData, null, 2));
    console.log(JSON.stringify(safe, null, 5));
    return (
        <Card
        bgcolor="primary"
        header="Create Account"
        body ={
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input 
                            type        ='text'
                            name        ='name'
                            placeholder ='Enter Name'
                            value       = {value.name}
                            onChange    = {handleChange}
                            />
                            {errors.name && <p>{errors.name}</p>}
                        </div>
                        <div>
                            <input 
                            type        ='email'
                            name        ='email'
                            placeholder ='Enter Email'
                            value       = {value.email}
                            onChange    = {handleChange}
                            />
                            {errors.email && <p>{errors.email}</p>}
                        </div>
                        <div>
                            <input 
                            type        ='password'
                            name        ='password'
                            placeholder ='Enter Password'
                            value       = {value.password}
                            onChange    = {handleChange}
                            />
                            {errors.password && <p>{errors.password}</p>}
                        </div>
                        {/* <div>
                            <input 
                            type        ='password'
                            name        ='password2'
                            placeholder ='Confirm Password'
                            value       = {value.password2}
                            onChange    = {handleChange}
                            />
                            {errors.password2 && <p>{errors.password2}</p>}
                        </div> */}
                        <div>
                            <input 
                            type        ='number'
                            name        ='amount'
                            placeholder ='Initiate your account balance'
                            value       = {value.amount}
                            onChange    = {handleChange}
                            />
                            {errors.amount && <p>{errors.amount}</p>}
                        </div>
                        <div>
                            <button className="btn btn-warning">
                                sign up
                            </button>
                        </div>
                    </form>
                </div>
                }
        />
    )
}
