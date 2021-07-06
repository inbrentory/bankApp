import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './userContext';
import { UserContextList } from './userContextList';
import validate from './validation';

function FormCreateUse(callback, validate) {
            const {initialData, setInitialData}            = useContext(UserContext); // this is context to be use in every children compo
            const {storage, setStorage}                    = useContext(UserContextList); // this is context to be use in every children compo
            const [informCreate, setInformCreate]          = useState(false); // this is a setter telling that all data are filled in.
            const [errors, setErrors]                      = useState({})     // this is a setter telling that 
            const [value, setValue]                        = useState({       // this is what we are collecting
                name:'',
                email:'',
                password:'',
                password2:'',
                amount:''
            });    


            const handleChange = e => {                             // this is where we change our input to match our data collector    
                setValue({
                    ...value,
                    [e.target.name] : [e.target.value]
                });
            };

            const addNewUser = () => {
                setInitialData(value);
                setStorage([...storage, [value]]);
            };

            const handleSubmit = e => {                             // this is to check if there is no errors, let submit all filled-in data 
                e.preventDefault(); 
                
                setErrors(validate(value));
                setInformCreate(true);
                addNewUser(value);
                
                console.log(value)
            }

            useEffect(
                () => {
                  if (Object.keys(errors).length === 0 && informCreate) {
                    callback();
                  }
                },
                [errors, callback, informCreate]
              );

    return {handleChange, handleSubmit, value, errors};              
}

export default FormCreateUse
