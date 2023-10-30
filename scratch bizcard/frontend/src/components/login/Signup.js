import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation'


const Signup = () => {
    const [values,setValues] = useState({
        name:"",
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
        if(errors.name === "" && errors.email === "" && errors.password === ""){
            axios.post("http://localhost:8081/signup", values)
            .then(res => {
                navigate("/")
            })
            .catch(err => console.log(err))
        }
        // axios.post("http://localhost:8081/login",{userName,password})
        // .then(res => console.log(res))
        // .catch(err => console.log(err))


    }
  return (
    <div className=' flex flex-col justify-center items-center  h-[100vh] bg-slate-50  w-[100vw]  rounded-md '>
        <div className=' bg-white p-3 rounded w-[35%] h-fit  shadow-lg border'>
            <form onSubmit={handleSubmit}>
                <h2 className=' text-black font-bold text-3xl text-center mb-6'>Sign up</h2>
                <div className='mb-3'>
                    {/* <label htmlFor="email">Name</label> */}
                    {/* <input className=' rounded border' type="text" value={userName} placeholder='Enter Name' onChange={(e)=>{setUserName(e.target.value)}}/> */}
                    <input className=' rounded border w-full p-1 outline-none' name='name' type="text"  placeholder='Enter Name' onChange={handleInput}/>
                    {errors.name && <span className=' text-red-700'>{errors.name}</span>}


                </div>
                <div className='mb-3'>
                    {/* <label htmlFor="email">Email</label> */}
                    {/* <input className=' rounded border' type="email" value={userName} placeholder='Enter Email' onChange={(e)=>{setUserName(e.target.value)}}/> */}
                    <input className=' rounded border w-full p-1 outline-none' name='email' type="email"  placeholder='Enter Email' onChange={handleInput}/>
                    {errors.email && <span className=' text-red-700'>{errors.email}</span>}


                </div>
                <div className='mb-3'>
                    {/* <label htmlFor="password">Password</label> */}
                    {/* <input className=' rounded border' type="password" value={password} placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}}/> */}
                    <input className=' rounded border w-full p-1 outline-none' name='password' type="password"  placeholder='Enter Password' onChange={handleInput}/>
                    {errors.password && <span className=' text-red-700'>{errors.password}</span>}


                </div>
                {/* <div>
                    <button className=' bg-green-700 w-[100%]' type="submit" >Sign up</button>
                    <p>you are agree to terms and policies</p>
                    <Link to="/" className=' bg-slate-300 w-[100%]'>Login</Link>
                </div> */}

                <div>
                    <button className=' bg-green-400 w-[100%] rounded-md p-1 text-white mb-3  font-semibold' type="submit" >Sign up</button>
                    {/* <div className="mx-auto mb-3 flex items-center ">
                        <div className="border-t border-gray-400 w-[48%] h-0"></div>
                        <div className="text-center mx-2 text-gray-400">or</div>
                        <div className="border-t border-gray-400 w-[48%] h-0"></div>
                    </div> */}
                    <div className='mb-3'>Do you have an account? <Link to="/" className=' underline font-semibold'>Sign in</Link></div>
                    {/* <Link to="/"><div className=' bg-blue-400 w-full rounded-md p-1 text-white mb-5 text-center font-semibold'>Sign in</div></Link> */}
                    
                </div>
            </form>
    </div>
    </div>

  )
}

export default Signup