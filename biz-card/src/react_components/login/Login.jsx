import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'


const Login = () => {
    
    const [values,setValues] = useState({
        email:"",
        password:""
    })
    
    const [errors,setErrors] = useState({})

    const navigate = useNavigate()


    const handleInput = (e) =>{
        setValues(prev => ({...prev, [e.target.name]:[e.target.value]}))

    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setErrors(Validation(values))
        if(errors.email === "" && errors.password === ""){
            axios.post("http://localhost:8081/login", values)
            .then(res => {
                if(res.data === "Success"){
                    navigate("/home")
                }
                else{
                    alert("No record existed")
                }
            })
            .catch(err => console.log(err))
        }
        // axios.post("http://localhost:8081/login",{userName,password})
        // .then(res => console.log(res))
        // .catch(err => console.log(err))


    }
  return (
    <div className=' flex flex-col justify-center items-center  h-[100vh] bg-slate-50  w-[100vw]  rounded-md '>
        {/* <h2 className=' text-black font-bold text-3xl text-center mb-6'>Business Card Generator</h2> */}
        <div className=' bg-white p-3 rounded w-[35%] h-fit  shadow-lg border'>
            <form onSubmit={handleSubmit}>
            <h2 className=' text-black font-bold text-3xl text-center mb-6'>Sign in</h2>
                <div className='mb-5'>
                    {/* <label htmlFor="email">Email</label> */}
                    <input className=' rounded border w-full p-1 outline-none' name='email' type="email"  placeholder='Enter Email' onChange={handleInput}/>
                    {errors.email && <span className=' text-red-600'>{errors.email}</span>}
                </div>
                <div className='mb-5'>
                    {/* <label htmlFor="password">Password</label> */}
                    <input className=' rounded border w-full p-1 outline-none' name='password' type="password"  placeholder='Enter Password' onChange={handleInput}/>
                    {errors.password && <span className=' text-red-600'>{errors.password}</span>}

                </div>
                <div>
                    <button className=' bg-green-400 w-[100%] rounded-md p-1 text-white mb-3  font-semibold' type="submit" >Sign in</button>
                    <div className="mx-auto mb-3 flex items-center ">
                        <div className="border-t border-gray-400 w-[48%] h-0"></div>
                        <div className="text-center mx-2 text-gray-400">or</div>
                        <div className="border-t border-gray-400 w-[48%] h-0"></div>
                    </div>
                    <Link to="/signup"><div className=' bg-blue-400 w-full rounded-md p-1 text-white mb-5 text-center font-semibold'>Sign up</div></Link>
                </div>
            </form>
    </div>
    </div>
  )
}

export default Login