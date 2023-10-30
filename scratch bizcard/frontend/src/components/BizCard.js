
//working
import React from 'react';
import { useState } from 'react';

const BizCard = () => {
  const [contactData, setContactData] = useState({
    first_name:"",
    last_name:"",
    gender_pronouns:"",
    job_title:"",
    business_name:"",
    business_address:"",
    business_description:"",
  })

  const {first_name, last_name, gender_pronouns, job_title, business_name, business_address, business_description} = contactData

  const handleInput = (e) =>{
    setContactData(prev => ({...prev, [e.target.name]:[e.target.value]}))
  }

  let link = ""
  
  
  return (
    <div className='app flex '>

      <div className="left bg-slate-400 w-[60%] flex flex-col  items-center">

        <div className="contact-info flex flex-col items-start w-[90%]">
          <label htmlFor="" className="text-left">First name</label>
          <input className='rounded border w-full h-10 p-1 outline-none mb-5' name='first_name' type="text" placeholder='Enter Name' onChange={handleInput}/>
          <label htmlFor="" className="text-left">Last name</label>
          <input className='rounded border w-full h-10 p-1 outline-none mb-5' name='last_name' type="text" placeholder='Enter Name' onChange={handleInput}/>
          <label htmlFor="" className="text-left">Gender pronouns</label>
          <input className='rounded border w-full h-10 p-1 outline-none mb-5' name='gender_pronouns' type="text" placeholder='Enter Name' onChange={handleInput}/>
          <label htmlFor="" className="text-left">Job title</label>
          <input className='rounded border w-full h-10 p-1 outline-none mb-5' name='job_title' type="text" placeholder='Enter Name' onChange={handleInput}/>
          <label htmlFor="" className="text-left">Business name</label>
          <input className='rounded border w-full h-10 p-1 outline-none mb-5' name='business_name' type="text" placeholder='Enter Name' onChange={handleInput}/>
          <label htmlFor="" className="text-left">Business address</label>
          <textarea className="rounded resize-none border w-full h-28 mb-5 outline-none" name="business_address" onChange={handleInput}></textarea>
          <label htmlFor="" className="text-left">Business description</label>
          <textarea className="rounded resize-none border w-full h-28 mb-5 outline-none" name="business_description" onChange={handleInput}></textarea>
        </div>
        
      </div>
      

      <div className="right bg-slate-700 w-[40%] flex justify-center ">
          
          <div className='preview w-[90%]  bg-slate-800 flex flex-col border border-black rounded'>
            <div className='header'>
              <h2 className=' text-white flex justify-center items-center text-xl font-bold  h-10 bg-black  '>LIVE PREVIEW</h2>
            </div>
            <div className='link'>
              <div className=' hidden'>
                {(!first_name && !last_name?link="https://yoursite/vcard/username" : link="https://yoursite/vcard/"+first_name + last_name)}              
              </div>
              <input type="text" disabled="disabled" value={link.toLowerCase()} className=' w-[95%] bg-black h-10 m-2 p-3 text-white rounded'/>
            </div>
            <div className="preview-content  bg-white overflow-y-scroll">
            <div className='profile bg-green-400 h-28' >

            </div>
              
            <div className='data '>

              <div className="userData ">
                <p className=' text-center font-extrabold text-2xl'>{first_name + " " + last_name}</p>
                {/* <p className=' text-center opacity-70'>{`(${gender_pronouns})`}</p> */}
                <p className=' text-center opacity-70'>{gender_pronouns!="" &&`(${gender_pronouns})`}</p>
                <p className=' text-center font-medium'>{job_title}</p>
                <p className=' text-center opacity-70'>{business_name}</p>
                <p className=' text-center opacity-50'>{business_address}</p>
                <p className=' text-center p-2 opacity-80 font-thin'>{business_description}</p>
              </div>
              <div className="saveContact flex justify-center">
                <button className='bg-green-400 w-[70%] h-10  rounded-2xl text-white  font-medium my-10'>Save Contact</button>
              </div>

              <div className="section-title">
                <p className=' font-bold  text-xl text-center m-4'>Section title</p>
              </div>
              <hr />

            </div>

          </div>
            

          </div>
        

      
      </div>
    </div>
  );
};

export default BizCard;


