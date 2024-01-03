//working
import React from 'react';
import { useState } from 'react';
import { Mail,Phone,MessageSquareText,MapPin, } from "lucide-react"
import { Button } from "../components/button"
import { Input } from "../components/input"
import { Label } from "../components/label"
import { Textarea } from "../components/textArea"


const BizCard = () => {
  const [contactData, setContactData] = useState({
    first_name: "",
    last_name: "",
    gender_pronouns: "",
    job_title: "",
    business_name: "",
    business_address: "",
    business_description: "",
  })

  const { first_name, last_name, gender_pronouns, job_title, business_name, business_address, business_description } = contactData

  const handleInput = (e) => {
    setContactData(prev => ({ ...prev, [e.target.name]: [e.target.value] }))
  }

  let link = ""


  return (
    <div className='app flex w-[100vw] px-48 space-x-16 bg-gray-900'>

      <div className="left  w-[60%] flex flex-col  items-center">

        <div className="contact-info flex flex-col  w-[100%]  place-items-end">
          <div className="flex  w-full space-x-5">
            <div className="grid  w-[100%] items-center gap-1.5 max-w-full my-4 ">
              <Label htmlFor="text" className=" text-white">First name</Label>
              <Input type="text" name='first_name' placeholder="First namet" className=" text-sm font-medium " spellcheck="false" onChange={handleInput} />
            </div>
            <div className="grid  w-[100%] items-center gap-1.5 max-w-full my-4 ">
              <Label htmlFor="text" className=" text-white">Last name</Label>
              <Input type="text" name='last_name' placeholder="Last name" className="w-full bg-black" spellcheck="false" onChange={handleInput} />
            </div>
          </div>
          <div className="grid  w-[100%] items-center gap-1.5 max-w-full my-4 ">
            <Label htmlFor="text" className=" text-white">Gender pronouns</Label>
            <Input type="text" name='gender_pronouns' placeholder="Gender pronouns" className="w-full bg-black" spellcheck="false" onChange={handleInput} />
          </div>
          <div className="grid  w-[100%] items-center gap-1.5 max-w-full my-4 ">
            <Label htmlFor="text" className=" text-white">Job title</Label>
            <Input type="text" name='job_title' placeholder="Job title" className="w-full bg-black" spellcheck="false" onChange={handleInput} />
          </div>
          <div className="grid  w-[100%] items-center gap-1.5 max-w-full my-4 ">
            <Label htmlFor="text" className=" text-white">Business name</Label>
            <Input type="text" name='business_name' placeholder="Business name  " className="w-full bg-black" spellcheck="false" onChange={handleInput} />
          </div>
          <div className="grid w-full gap-1.5 my-4 ">
            <Label htmlFor="message" className=" text-white">Business address</Label>
            <Textarea placeholder="Type your Business address." name="business_address" id="message" className="resize-none h-28 bg-black block mt-2 px-4 py-3 w-full rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-600 hover:border-gray-600" spellcheck="false" onChange={handleInput} />
          </div>
          <div className="grid w-full gap-1.5 my-4 ">
            <Label htmlFor="message" className=" text-white">Business description</Label>
            <Textarea placeholder="Type your Business description." name="business_description" id="message" className="resize-none h-28 bg-black " spellcheck="false" onChange={handleInput} />
          </div>
        </div>

        <div className="primary-actions flex flex-col  w-[100%]  my-5 space-y-4">
          <h2 className=" text-white font-extrabold text-2xl my-4">Primary actions</h2>
          <Input type="text" name='business_name' placeholder="Search an action" className="w-full bg-black" spellcheck="false" onChange={handleInput} />
          
          <div className="primary-buttons flex  w-full space-x-4 ">
            <Button className="bg-gray-700 w-[50%] hover:bg-gray-600">
              <Phone className="mr-2 h-4 w-4" /> Login with text
            </Button>
            <Button className=" bg-gray-700 w-[50%] hover:bg-gray-600">
              <MessageSquareText className="mr-2 h-4 w-4" /> Login with text
            </Button>
          </div>
          <div className="primary-buttons flex  w-full space-x-4 ">
            <Button className="bg-gray-700 w-[50%] hover:bg-gray-600">
              <Mail className="mr-2 h-4 w-4" /> Login with text
            </Button>
            <Button className=" bg-gray-700 w-[50%] hover:bg-gray-600">
              <MapPin className="mr-2 h-4 w-4" /> Login with text
            </Button>
          </div>
          <div className="primary-buttons flex  w-full space-x-4 ">
            <Button className="bg-gray-700 w-[50%] hover:bg-gray-600">
              <Mail className="mr-2 h-4 w-4" /> Login with text
            </Button>
            <Button className=" bg-gray-700 w-[50%] hover:bg-gray-600">
              <MapPin className="mr-2 h-4 w-4" /> Login with text
            </Button>
          </div>
          <div className="primary-buttons flex  w-full space-x-4 ">
            <Button className="bg-gray-700 w-[50%] hover:bg-gray-600">
              <Mail className="mr-2 h-4 w-4" /> Login with text
            </Button>
            <Button className=" bg-gray-700 w-[50%] hover:bg-gray-600">
              <MapPin className="mr-2 h-4 w-4" /> Login with text
            </Button>
          </div>

        </div>

      </div>


      <div className="right bg-gray-900 w-[45%] flex justify-center my-4">

        <div className='preview w-[100%]  bg-gray-900 flex flex-col border-4 border-black rounded-2xl  max-h-[80vh]'>
          <div className='header'>
            <h2 className=' text-white flex justify-center items-center text-xl font-bold  h-10 bg-black  '>LIVE PREVIEW</h2>
          </div>
          <div className='link'>
            <div className=' hidden'>
              {(!first_name && !last_name ? link = "https://yoursite/vcard/username" : link = "https://yoursite/vcard/" + first_name + last_name)}
            </div>
            <input type="text" disabled="disabled" value={link.toLowerCase()} className=' w-[95%] bg-black h-10 m-2 p-3 text-white rounded' />
          </div>
          <div className="preview-content  bg-white  rounded-b-2xl overflow-y-auto ">
            <div className='profile bg-green-400 h-28' >

            </div>

            <div className='data '>

              <div className="userData ">
                <p className=' text-center font-extrabold text-2xl'>{first_name + " " + last_name}</p>
                {/* <p className=' text-center opacity-70'>{`(${gender_pronouns})`}</p> */}
                <p className=' text-center opacity-70'>{gender_pronouns != "" && `(${gender_pronouns})`}</p>
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


<Button>
  <Mail className="mr-2 h-4 w-4" /> Login with text
</Button>
{/* <Input /> */ }
<div className="grid w-full max-w-sm items-center gap-1.5 ">
  <Label htmlFor="text" className=" text-white">text</Label>
  <Input type="text" placeholder="text" />
</div>
{/* <div className="grid  w-[100%] items-center gap-1.5 max-w-full">
<Label htmlFor="text">text</Label>
<Input type="text"  placeholder="text" className="w-full" />  
</div>  */}
{/* <Textarea /> */ }
<div className="grid w-full gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea placeholder="Type your message here." id="message" />
</div>
