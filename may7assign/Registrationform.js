/* eslint-disable */
import React,{useRef} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
export default function RegistrationForm (){
    const {register, handleSubmit, watch, formState:{errors}} = useForm();
    const password = useRef({});
    password.current = watch('password',"");

    const doRegistration = (formOb) =>{
        console.log(formOb);
        axios.post('/users/register', formOb)
        .then((res)=>{
            console.log(res.data);
        })
    }   
    return(
        <div>
            <form onSubmit={handleSubmit(doRegistration)}>
                <input
                type="text"
                placeholder="Enter Email"
                name="email"
                {...register('email',{
                    required: "Email is required",
                    pattern:{
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: 'Email is not valid'
                    }
                })}/><br/>
                {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
                <input 
                type="text"
                placeholder="Enter username"
                name="username"
                {...register('username',{
                    required: "Username is required",
                    message:"Username is required"
                })}/><br/>
                {errors.username && <p style={{color:"red"}}>{errors.username.message}</p>}
                <input
                type="password"
                placeholder="Enter password"
                name="password"
                {...register('password',{
                    required:" You must specify a password",
                    minLength: {
                        value: 6,
                        message: "Password must have at least 6 characters"
                    }
                })}/><br/>
                {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}
                <input 
                type="password"
                placeholder="Re-Enter Password"
                name="confirmpassword"
                {...register("confirmpassword",{
                    validate: (value) =>{
                        value === password.current || "The passwords do not match"
                    }
                })}/><br/>
                {errors.confirmpassword && <p style={{color:"red"}}>{errors.confirmpassword.message}</p>}
                <button>submit</button>
            </form>
        </div>
    )
}