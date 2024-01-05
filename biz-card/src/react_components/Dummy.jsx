//working
import React from 'react';
import { useState } from 'react';
import { Mail, Phone, MessageSquareText, MapPin, } from "lucide-react"
import { Button } from "../components/button"
import { Input } from "../components/input"
import { Label } from "../components/label"
import { Textarea } from "../components/textArea"
import { FaPhoneAlt } from "react-icons/fa"
import { BiSolidMessageDetail } from "react-icons/bi"
import { HiOutlineMail } from "react-icons/hi"
import { TbWorldWww } from "react-icons/tb"
import { FaLocationArrow } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { BsFillCalendarDateFill } from "react-icons/bs"
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
import { CiFileOn } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { PiTextTLight } from "react-icons/pi";
import { CgClose } from "react-icons/cg";
import { BsUsbC } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";

const Dummy = () => {
  const [visibleButtons, setVisibleButtons] = useState([
    { id: 1, name: "mobile", isVisible: true },
    { id: 2, name: "sms", isVisible: true },
    { id: 3, name: "email", isVisible: true },
    { id: 4, name: "location", isVisible: true },
    { id: 5, name: "website", isVisible: true },
    { id: 6, name: "telegram", isVisible: true },
    { id: 7, name: "whatsapp", isVisible: true },
    { id: 8, name: "calendar", isVisible: true },
  ]);

  //   const handleButtonClick = (buttonId) => {
  //     const updatedButtons = visibleButtons.map((button) =>
  //       button.id === buttonId ? { ...button, isVisible: false } : button
  //     );
  //     setVisibleButtons(updatedButtons);
  //   };

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
    // setContactData(prev => ({ ...prev, [e.target.name]: [e.target.value] }))
    setContactData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  let link = ""
  // const [visibleButtons, setVisibleButtons] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  // const handleButtonClick = (buttonId) => {
  //   const updatedButtons = visibleButtons.filter((id) => id !== buttonId);
  //   setVisibleButtons(updatedButtons);
  // };  gpt

  const [primaryActionBtns, setPrimaryActionBtns] = useState(
    [
      { id: 1, isVisible: true, name: "mobile", icon: Phone },
      { id: 2, isVisible: true, name: "sms", icon: MessageSquareText },
      { id: 3, isVisible: true, name: "email", icon: Mail },
      { id: 4, isVisible: true, name: "location", icon: MapPin },
      { id: 5, isVisible: true, name: "website", icon: TbWorldWww },
      { id: 6, isVisible: true, name: "telegram", icon: FaTelegramPlane },
      { id: 7, isVisible: true, name: "whatsapp", icon: FaWhatsapp },
      { id: 8, isVisible: true, name: "calendar", icon: BsFillCalendarDateFill }
    ]
  )
  const [secondaryActionBtns, setSecondaryActionBtns] = useState(
    [
      { id: 1, isVisible: true, name: "facebook", icon: FaFacebook, color: "bg-sky-600", hover: "bg-sky-800" },
      { id: 2, isVisible: true, name: "youtube", icon: FaYoutube, color: "bg-red-700", hover: "bg-red-600" },
      { id: 3, isVisible: true, name: "instagram", icon: FaInstagram, color: "bg-gradient-to-r from-purple-700 to-pink-500", hover: "to-pink-400 justify-start bg-gradient-to-r from-purple-700 to-pink-500" },
      { id: 4, isVisible: true, name: "github", icon: FaGithub, color: "bg-stone-600", hover: "bg-stone-500" },
      { id: 5, isVisible: true, name: "snapchat", icon: FaSnapchat, color: "bg-yellow-500", hover: "bg-yellow-400" },
      { id: 6, isVisible: true, name: "twitter", icon: FaTwitter, color: "bg-sky-300", hover: "bg-sky-200" },
      { id: 7, isVisible: true, name: "linkedin", icon: FaLinkedin, color: "bg-sky-900", hover: "bg-blue-400" },
      { id: 8, isVisible: true, name: "spotify", icon: FaSpotify, color: "bg-green-500", hover: "bg-green-400" }
    ]
  )


  // const handleButtonClick = (buttonId) => {
  //   // Update visibility of the clicked button
  //   const updatedButtons = visibleButtons.map((button) =>
  //     button.id === buttonId ? { ...button, isVisible: false } : button
  //   );
  //   setVisibleButtons(updatedButtons);
  // };
  const handleButtonClick = (buttonId, isPrimary) => {
    // Update visibility of the clicked button
    if (isPrimary) {
      const updatedPrimaryButtons = primaryActionBtns.map((button) =>
        button.id === buttonId ? { ...button, isVisible: false } : button
      );
      setPrimaryActionBtns(updatedPrimaryButtons);
    }
    else {
      const updatedSecondaryButtons = secondaryActionBtns.map((button) =>
        button.id === buttonId ? { ...button, isVisible: false } : button
      );
      setSecondaryActionBtns(updatedSecondaryButtons);
    }
  };

  const getHoverColorBasedOnContrast = (baseColor) => {
    const contrast = getContrast(baseColor);
    return getHoverColor(baseColor, contrast);
  };

  const contactFields = [
    { label: "First name", name: "first_name", placeholder: "First name", type: "text" },
    { label: "Last name", name: "last_name", placeholder: "Last name", type: "text" },
    { label: "Gender pronouns", name: "gender_pronouns", placeholder: "Gender pronouns", type: "text" },
    { label: "Job title", name: "job_title", placeholder: "Job title", type: "text" },
    { label: "Business name", name: "business_name", placeholder: "Business name", type: "text" },
    { label: "Business address", name: "business_address", placeholder: "Type your Business address.", type: "textarea" },
    { label: "Business description", name: "business_description", placeholder: "Type your Business description.", type: "textarea" },
  ];

  const [featuredContent, setFeaturedContent] = useState([
    {
      id: 1,
      sectionTitle: 'Section title',
      primaryActions: [
        { id: 1, icon: CiFileOn, label: 'Add media' },
        { id: 2, icon: BsUsbC, label: 'Embed media' },
        { id: 3, icon: CiStar, label: 'Add product' },
        { id: 4, icon: PiTextTLight, label: 'Add text' },
      ],
    },
  ]);

  const handleAddSection = () => {
    setFeaturedContent((prevContent) => [
      ...prevContent,
      {
        id: prevContent.length + 1,
        sectionTitle: 'New Section',
        primaryActions: [
          { id: 1, icon: CiFileOn, label: 'Add media' },
          { id: 2, icon: BsUsbC, label: 'Embed media' },
          { id: 3, icon: CiStar, label: 'Add product' },
          { id: 4, icon: PiTextTLight, label: 'Add text' },
        ],
      },
    ]);
  };

  // Add this function to handle removing a section
  const handleRemoveSection = (sectionId) => {
    setFeaturedContent((prevContent) =>
      prevContent.filter((section) => section.id !== sectionId)
    );
  };

  return (
    <div className='app flex w-[100vw] px-48 space-x-16 bg-gray-900'>

      <div className="left w-[60%] flex flex-col  items-center">

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
        {/* dynamic */}
        {/* <div className="contact-info flex flex-col w-[100%] place-items-end">
          {contactFields.map((field) => (
            <div key={field.name} className={`grid w-[100%] items-center gap-1.5 max-w-full my-4`}>
              <Label htmlFor={field.name} className="text-white">{field.label}</Label>
              {field.type === "textarea" ? (
                <Textarea
                  placeholder={field.placeholder}
                  name={field.name}
                  id={field.name}
                  className="resize-none h-28 bg-black block mt-2 px-4 py-3 w-full rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-600 hover:border-gray-600"
                  spellCheck="false"
                  onChange={handleInput}
                />
              ) : (
                <Input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="w-full bg-black h-12 rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-600 hover:border-gray-600 px-3 py-2 text-white text-sm font-medium"
                  spellCheck="false"
                  onChange={handleInput}
                />
              )}
            </div>
          ))}
        </div> */}


        {/* <div className="grid grid-cols-2 gap-2 w-[100%]">
          {primaryActionBtns.map((button) => (
            <Button key={button.id} className="bg-gray-700 w-[100%] hover:bg-gray-600 justify-start" name={button.name}>
              {React.createElement(button.icon, { className: "mr-2 h-5 w-5" })}<div className=" font-medium text-base">{button.name}</div> 
            </Button>

          ))}
        </div> */}
        <div className="primary-actions flex flex-col w-[100%] my-7 space-y-4">
          <h2 className="text-white font-extrabold text-2xl my-4">Primary actions</h2>
          {/* btn -> i/p */}
          <div className=' space-y-6 '>
            {primaryActionBtns.map((button) => (
              !button.isVisible && (
                <div className='flex '>
                  <div className='h-12 w-12 bg-green-500 flex justify-center items-center rounded-l'>
                    {React.createElement(button.icon, { className: "h-6 w-6 text-white" })}
                  </div>
                  <Input type="text" name={button.name} placeholder={`Enter your ${button.name}`} className="w-full bg-black  rounded-l-none" spellCheck={false} onChange={handleInput} />
                </div>
              )
            ))}
            {/* <hr className="border-b-1  border-gray-500" /> */}
            {primaryActionBtns.some((button) => !button.isVisible) && (
              <hr className="border-b-1 border-gray-500" />
            )}

          </div>
          {/* <Input type="text" name='search_primary_action' placeholder="Search an action" className="w-full bg-black" spellCheck={false} onChange={handleInput} /> */}

          <div className="grid grid-cols-2 gap-2 w-[100%]">
            {primaryActionBtns.map((button) => (
              // Render only visible buttons
              button.isVisible && (
                <Button
                  key={button.id}
                  className="bg-gray-700 w-[100%] hover:bg-gray-600 justify-start"
                  name={button.name}
                  onClick={() => handleButtonClick(button.id, true)}
                >
                  {React.createElement(button.icon, { className: "mr-2 h-5 w-5" })}
                  <div className="font-medium text-base">{button.name}</div>
                </Button>
              )
            ))}
          </div>
        </div>

        <div className="secondary-actions flex flex-col  w-[100%]  my-7 space-y-4">
          <h2 className=" text-white font-extrabold text-2xl my-4">Secondary actions</h2>
          <div className=' space-y-6 '>
            {secondaryActionBtns.map((button) => (
              !button.isVisible && (
                <div className='flex '>
                  <div className={`${button.color} h-12 w-12  flex justify-center items-center rounded-l`}>
                    {React.createElement(button.icon, { className: "h-6 w-6 text-white" })}
                  </div>
                  <Input type="text" name={button.name} placeholder={`Enter your ${button.name}`} className="w-full bg-black  rounded-l-none" spellCheck={false} onChange={handleInput} />
                </div>
              )
            ))}
            {/* <hr className="border-b-1  border-gray-500" /> */}
            {secondaryActionBtns.some((button) => !button.isVisible) && (
              <hr className="border-b-1 border-gray-500" />
            )}

          </div>
          {/* <Input type="text" name='search_primary_action' placeholder="Search an action" className="w-full bg-black" spellcheck="false" onChange={handleInput} /> */}

          <div className="grid grid-cols-2 gap-2 w-[100%]">
            {secondaryActionBtns.map((button) => (
              // Render only visible buttons
              button.isVisible && (
                <Button
                  key={button.id}
                  className={`${button.color} w-[100%] transition duration-300 ease-in-out transform hover:${button.hover}  justify-start`}
                  name={button.name}
                  onClick={() => handleButtonClick(button.id, false)}
                >
                  {React.createElement(button.icon, { className: "mr-2 h-5 w-5" })}
                  <div className="font-medium text-base">{button.name}</div>
                </Button>
              )
            ))}
          </div>

        </div>

        {/* <div className="Featured-content flex flex-col  w-[100%]  my-7 space-y-8">
          <h2 className=" text-white font-extrabold text-2xl my-4">Featured content</h2>
          <Card className=" bg-gray-800 border-hidden">
            <CardContent>
              <div className="flex justify-center items-center ml-4 mr-2 ">
                <input type="text" name='section_title' placeholder="Section title" value={'Section title'} className="w-full pl-2 text-white font-medium bg-gray-800 my-4 h-12 border-b-1 border  border-transparent focus:outline-none focus:ring-0 border-b-black" spellcheck="false" onChange={handleInput} />
                <div className=" rounded-md h-7 w-7 hover:bg-gray-700 hover:text-white cursor-pointer flex justify-center items-center transition-all duration-300 ease-in-out">
                  <CgClose className="text-gray-500  text-lg font-thin h-5 w-5  cursor-pointer" />
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

        </div> */}
        <div className="Featured-content flex flex-col w-[100%] my-7 space-y-8">
          <h2 className="text-white font-extrabold text-2xl my-4">Featured content</h2>

          {featuredContent.map((section) => (
            <Card key={section.id} className="bg-gray-800 border-hidden">
              <CardContent>
                <div className="flex justify-center items-center ml-4 mr-2">
                  {/* ... (same as before) */}
                  <input type="text" name='section_title' placeholder="Section title" value={'Section title'} className="w-full pl-2 text-white font-medium bg-gray-800 my-4 h-12 border-b-1 border  border-transparent focus:outline-none focus:ring-0 border-b-black" spellcheck="false" onChange={handleInput} />
                  <div onClick={() => handleRemoveSection(section.id)} className=" rounded-md h-7 w-7 hover:bg-gray-700 hover:text-white cursor-pointer flex justify-center items-center transition-all duration-300 ease-in-out">
                    <CgClose className="text-gray-500  text-lg font-thin h-5 w-5  cursor-pointer" />
                  </div>
                </div>

                {/* <div className="primary-actions flex flex-col w-[100%] my-1 space-y-2">
              <div className="primary-buttons flex w-full space-x-2">
                {section.primaryActions.map((action) => (
                  <Button
                    key={action.id}
                    className="bg-gray-700 w-[25%] hover:bg-gray-600 justify-start"
                  >
                    {React.createElement(action.icon, { className: 'mr-2 h-5 w-5' })}
                    <div className="font-medium text-base">{action.label}</div>
                  </Button>
                ))}
              </div>
            </div> */}
                <div className="primary-actions flex flex-col w-[100%] my-1 space-y-2">
                  <div className="primary-buttons grid grid-cols-2 gap-2 w-full">
                    {section.primaryActions.map((action) => (
                      <Button
                        key={action.id}
                        className="bg-gray-700 w-[full] hover:bg-gray-600 justify-start"
                      >
                        {React.createElement(action.icon, { className: 'mr-2 h-5 w-5' })}
                        <div className="font-medium text-base">{action.label}</div>
                      </Button>
                    ))}
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}

          <div className="flex space-x-4">
            <Button
              className="bg-gray-700 h-12 w-12 hover:bg-gray-600 justify-start flex items-center"
              onClick={handleAddSection}
            >
              <HiPlus className="text-white text-9xl font-extrabold" />
            </Button>
            <div className="font-medium text-base text-white flex items-center">Add section</div>
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
              {link = `https://yoursite/vcard/${first_name.toLowerCase()}${last_name.toLowerCase()}`}
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

export default Dummy;






