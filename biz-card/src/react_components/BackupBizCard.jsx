//working
import React from 'react';
import { useState } from 'react';
import { Mail,Phone,MessageSquareText,MapPin, } from "lucide-react"
import { Button } from "../components/button"
import { Input } from "../components/input"
import { Label } from "../components/label"
import { Textarea } from "../components/textArea"
import {FaPhoneAlt} from "react-icons/fa"
import {BiSolidMessageDetail} from "react-icons/bi"
import {HiOutlineMail} from "react-icons/hi"
import {TbWorldWww} from "react-icons/tb"
import {FaLocationArrow} from "react-icons/fa"
import {FaTelegramPlane} from "react-icons/fa"
import {FaWhatsapp} from "react-icons/fa"
import {BsFillCalendarDateFill} from "react-icons/bs" 
import { FaTimes } from "react-icons/fa";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaGithub,
  FaSnapchat,
  FaTwitter,
  FaLinkedin,
  FaSpotify
} from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/card"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../components/select"
import { CiFileOn } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { PiTextTLight } from "react-icons/pi";
import { CgClose } from "react-icons/cg";
import { BsUsbC } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";

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
  const [primaryActionData, setPrimaryActionData] = useState({
    mobile: "",
    sms: "",
    email: "",
    location: "",
    website: "",
    telegram: "",
    whatsapp: "",
    calendar: "",
  })

  const { first_name, last_name, gender_pronouns, job_title, business_name, business_address, business_description } = contactData

  const handleInput = (e) => {
    setContactData(prev => ({ ...prev, [e.target.name]: [e.target.value] }))
  }

  let link = ""
  const [visibleButtons, setVisibleButtons] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const handleButtonClick = (buttonId) => {
    const updatedButtons = visibleButtons.filter((id) => id !== buttonId);
    setVisibleButtons(updatedButtons);
  };

  const [primaryActionBtns,setPrimaryActionBtns] = useState(
    [
      {id:1 , isVisible:true, name:"mobile" },
      {id:2 , isVisible:true, name:"sms" },
      {id:3 , isVisible:true, name:"email" },
      {id:4 , isVisible:true, name:"location"},
      {id:5 , isVisible:true, name:"website" },
      {id:6 , isVisible:true, name:"telegram" },
      {id:7 , isVisible:true, name:"whatsapp" },
      {id:8 , isVisible:true, name:"calendar" }
                      ]
  )
  return (
    <div className='app flex w-[100vw] px-48 space-x-16 bg-gray-900'>

      <div className="left  w-[60%] flex flex-col  items-center">

        <div className="contact-info flex flex-col  w-[100%]  place-items-end">
          <div className="flex  w-full space-x-5">
            <div className="grid  w-[100%] items-center gap-1.5 max-w-full my-4 ">
              <Label htmlFor="text" className=" text-white ">First name</Label>
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

        <div className="primary-actions flex flex-col  w-[100%]  my-7 space-y-4">
          <h2 className=" text-white font-extrabold text-2xl my-4">Primary actions</h2>
          <Input type="text" name='business_name' placeholder="Search an action" className="w-full bg-black" spellcheck="false" onChange={handleInput} />
          
          <div className="primary-buttons flex  w-full space-x-4 ">
            <Button className="bg-gray-700 w-[50%] hover:bg-gray-600 justify-start" name="mobile">
              <Phone className="mr-2 h-5 w-5" /><div className=" font-medium text-base">Mobile</div> 
            </Button>
            <Button className=" bg-gray-700 w-[50%] hover:bg-gray-600 justify-start" name="sms">
              <MessageSquareText className="mr-2 h-5 w-5" /> <div className=" font-medium text-base">SMS</div> 
            </Button>
          </div>
          <div className="primary-buttons flex  w-full space-x-4 ">
            <Button className="bg-gray-700 w-[50%] hover:bg-gray-600 justify-start" name="email">
              <Mail className="mr-2 h-5 w-5" /><div className=" font-medium text-base"> Email</div>
            </Button>
            <Button className=" bg-gray-700 w-[50%] hover:bg-gray-600 justify-start" name="location">
              <MapPin className="mr-2 h-5 w-5" /> <div className=" font-medium text-base"> Location</div>
            </Button>
          </div>
          <div className="primary-buttons flex  w-full space-x-4 ">
            <Button className="bg-gray-700 w-[50%] hover:bg-gray-600 justify-start" name="website">
              <TbWorldWww className="mr-2 h-5 w-5" /> <div className=" font-medium text-base">Website</div>
            </Button>
            <Button className=" bg-gray-700 w-[50%] hover:bg-gray-600 justify-start" name="telegram">
              <FaTelegramPlane className="mr-2 h-5 w-5" /> <div className=" font-medium text-base">Telegram</div>
            </Button>
          </div>
          <div className="primary-buttons flex  w-full space-x-4 ">
            <Button className="bg-gray-700 w-[50%] hover:bg-gray-600 justify-start" name="whatsapp">
              <FaWhatsapp className="mr-2 h-5 w-5" /> <div className=" font-medium text-base">Whatsapp</div>
            </Button>
            <Button className=" bg-gray-700 w-[50%] hover:bg-gray-600 justify-start" name="calendar">
              <BsFillCalendarDateFill className="mr-2 h-5 w-5" /> <div className=" font-medium text-base">Calendar</div>
            </Button>
          </div>

        </div>

        <div className="secondary-actions flex flex-col  w-[100%]  my-7 space-y-4">
          <h2 className=" text-white font-extrabold text-2xl my-4">Secondary actions</h2>
          <Input type="text" name='business_name' placeholder="Search an action" className="w-full bg-black" spellcheck="false" onChange={handleInput} />
          
          <div className="primary-buttons flex  w-full space-x-4 ">
            <Button className=" bg-sky-600 w-[50%] hover:bg-sky-800 justify-start ">
              <FaFacebook className="mr-2 h-4 w-4 " /> <div className=" font-medium text-base">Facebook</div>
            </Button>
            <Button className=" bg-red-700 w-[50%] hover:bg-red-600 justify-start ">
              <FaYoutube className="mr-2 h-5 w-5" /> <div className=" font-medium text-base">Youtube</div>
            </Button>
          </div>
          <div className="primary-buttons flex  w-full space-x-4 ">
            <Button className="b w-[50%] hover:from-purple-500 hover:to-pink-400 justify-start bg-gradient-to-r from-purple-700 to-pink-500">
              <FaInstagram className="mr-2 h-5 w-5" /> <div className=" font-medium text-base">Instagram</div>
            </Button>
            <Button className=" bg-stone-600 w-[50%] hover:bg-stone-500 justify-start">
              <FaGithub className="mr-2 h-5 w-5" /> <div className=" font-medium text-base">Github</div>
            </Button>
          </div>
          <div className="primary-buttons flex  w-full space-x-4 ">
            <Button className=" bg-yellow-500 w-[50%] hover:bg-yellow-400 justify-start">
              <FaSnapchat className="mr-2 h-5 w-5" /> <div className=" font-medium text-base">Snapchat</div>
            </Button>
            <Button className=" bg-sky-300 w-[50%] hover:bg-sky-200 justify-start">
              <FaTwitter className="mr-2 h-5 w-5" /> <div className=" font-medium text-base">Twitter</div>
            </Button>
          </div>
          <div className="primary-buttons flex  w-full space-x-4 ">
            <Button className=" bg-sky-900 w-[50%] hover:bg-blue-400 justify-start">
              <FaLinkedin className="mr-2 h-5 w-5" /> <div className=" font-medium text-base">Linkedin</div>
            </Button>
            <Button className="bg-green-500 w-[50%] hover:bg-green-400 justify-start">
              <FaSpotify className="mr-2 h-5 w-5" /> <div className=" font-medium text-base">Spotify</div>
            </Button>
          </div>

        </div>

        <div className="Featured-content flex flex-col  w-[100%]  my-7 space-y-8">
          <h2 className=" text-white font-extrabold text-2xl my-4">Featured content</h2>
          <Card className=" bg-gray-800 border-hidden">
            <CardContent>
              <div className="flex justify-center items-center ml-4 mr-2 ">
                <input type="text" name='section_title' placeholder="Section title" value={'Section title'} className="w-full pl-2 text-white font-medium bg-gray-800 my-4 h-12 border-b-1 border  border-transparent focus:outline-none focus:ring-0 border-b-black" spellcheck="false" onChange={handleInput} />
                {/* <FaTimes className="text-gray-500 text-lg font-thin  h-5 w-5 hover:bg-gray-500 hover:text-white "/> */}
                <div className=" rounded-md h-7 w-7 hover:bg-gray-700 hover:text-white cursor-pointer flex justify-center items-center transition-all duration-300 ease-in-out">
                  {/* <FaTimes className="text-gray-500  text-lg font-thin h-5 w-5  cursor-pointer"/> */}
                  <CgClose className="text-gray-500  text-lg font-thin h-5 w-5  cursor-pointer"/>
                </div>
                

              </div>
              <div className="primary-actions flex flex-col  w-[100%]  my-1 space-y-2">
                <div className="primary-buttons flex  w-full space-x-2 ">
                  <Button className="bg-gray-700 w-[50%] hover:bg-gray-600 justify-start">
                    <CiFileOn className="mr-2 h-5 w-5" /><div className=" font-medium text-base">Add media</div> 
                  </Button>
                  <Button className=" bg-gray-700 w-[50%] hover:bg-gray-600 justify-start">
                    <BsUsbC className="mr-2 h-5 w-5" /> <div className=" font-medium text-base">Embed media</div> 
                  </Button>
                </div>
                <div className="primary-buttons flex  w-full space-x-2 ">
                  <Button className="bg-gray-700 w-[50%] hover:bg-gray-600 justify-start">
                    <CiStar className="mr-2 h-5 w-5" /><div className=" font-medium text-base">Add product</div> 
                  </Button>
                  <Button className=" bg-gray-700 w-[50%] hover:bg-gray-600 justify-start">
                    <PiTextTLight className="mr-2 h-5 w-5" /> <div className=" font-medium text-base">Add text</div> 
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex space-x-4 ">
            <Button className="bg-gray-700 h-12 w-12 hover:bg-gray-600 justify-start flex items-center">
              <HiPlus className=" text-white text-9xl font-extrabold" /> 
            </Button>
            <div className=" font-medium text-base text-white flex  items-center ">Add section</div> 
          </div>
          
        </div>
        <div className="grid grid-cols-2 gap-2 w-[100%]">
      {visibleButtons.map((buttonId) => (
        <button
          key={buttonId}
          className="bg-blue-500 text-white px-4 py-2 w-[100%]"
          onClick={() => handleButtonClick(buttonId)}
        >
          Button {buttonId}
        </button>
      ))}
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
  <Mail className="mr-2 h-5 w-5" /> Login with text
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



