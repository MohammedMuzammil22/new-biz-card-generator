import AddImages from './components/AddImages';
import Content from './components/Content';
import Header from './components/Header';
import Icons from './components/Icons';
import LabelAndInput from './components/LabelAndInput';
import Preview from './components/Preview';
import './index.css'
import { useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
// import Flex from './components/Flex';
import ActionInput from './ActionInput'; 
 
import {FaPhoneAlt} from "react-icons/fa"
import {BiSolidMessageDetail} from "react-icons/bi"
import {HiOutlineMail} from "react-icons/hi"
import {TbWorldWww} from "react-icons/tb"
// import {FaLocationDot} from "react-icons/fa"
import {FaLocationArrow} from "react-icons/fa"
// import { FaLocationDot } from 'react-icons/fa';
import {FaTelegramPlane} from "react-icons/fa"
import {FaWhatsapp} from "react-icons/fa"
import {BsFillCalendarDateFill} from "react-icons/bs" 
import FeaturedContent from './components/FeaturedContent';
// import AddMedia from './mail/AddMedia';
import axios from 'axios'
// import CircularJSON from 'circular-json';


 
function App() {
  // const [img, setImg] = useState()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [genderPronouns, setGenderPronouns] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [businessName, setBusinessName] = useState("")
  const [businessAddress, setBusinessAddress] = useState("")
  const [businessDescription, setBusinessDescription] = useState("")


  const [facebookUrl, setFacebookUrl] = useState("")
  const [youtubeUrl, setYoutubeUrl] = useState("https://www.youtube.com/")
  const [instagramUrl, setInstagramUrl] = useState("https://www.instagram.com/")
  const [githubUrl, setGithubUrl] = useState("https://github.com/")
  const [snapchatUrl, setSnapchatUrl] = useState("https://www.snapchat.com/")
  const [twitterUrl, setTwitterUrl] = useState("https://twitter.com/")
  const [linkedinUrl, setLinkedinUrl] = useState("https://www.linkedin.com/")
  const [spotifyUrl, setSpotifyUrl] = useState("https://open.spotify.com/?")

  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [mail, setMail] = useState("")
  const [website, setWebsite] = useState("")
  const [location, setLocation] = useState("")
  const [telegram, setTelegram] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [date, setDate] = useState("")

  // secondary actions social media
  const[secondaryIconData, setSecondaryIconData] = useState(
    [ 
      {id:1 , icon: <FaFacebook />, isVisible:true, name:"Facebook" ,url:facebookUrl, setUrl:setFacebookUrl },
      {id:2 , icon: <FaYoutube />, isVisible:true, name:"Youtube" ,url:youtubeUrl, setUrl:setYoutubeUrl },
      {id:3 , icon: <FaInstagram />, isVisible:true, name:"Instagram" ,url:instagramUrl, setUrl:setInstagramUrl },
      {id:4 , icon: <FaGithub />, isVisible:true, name:"Github" ,url:githubUrl, setUrl:setGithubUrl},
      {id:5 , icon: <FaSnapchat />, isVisible:true, name:"Snapchat" ,url:snapchatUrl, setUrl:setSnapchatUrl },
      {id:6 , icon: <FaTwitter />, isVisible:true, name:"Twitter" ,url:twitterUrl, setUrl:setTwitterUrl },
      {id:7 , icon: <FaLinkedin />, isVisible:true, name:"Linkedin" ,url:linkedinUrl, setUrl:setLinkedinUrl },
      {id:8 , icon: <FaSpotify />, isVisible:true, name:"Spotify" ,url:spotifyUrl, setUrl:setSpotifyUrl }
                      ]
  )
 
  const [primaryPreviewData, setPrimaryPreviewData] = useState([])
  const [secondaryPreviewData, setSecondaryPreviewData] = useState([])
  // let rendericon = []

// user details
  const userInputData = [
      {id:1 , name:"FirstName" ,url:firstName, setUrl:setFirstName },
      {id:2 , name:"lastName" ,url:lastName, setUrl:setLastName },
      {id:3 , name:"genderPronouns" ,url:genderPronouns, setUrl:setGenderPronouns },
      {id:4 , name:"jobTitle" ,url:jobTitle, setUrl:setJobTitle},
      {id:5 , name:"businessName" ,url:businessName, setUrl:setBusinessName },
      {id:6 , name:"businessAddress" ,url:businessAddress, setUrl:setBusinessAddress },
      {id:7 , name:"businessDescription" ,url:businessDescription, setUrl:setBusinessDescription },
  ] 
  
  const [primaryAction,setPrimaryAction] =  useState(
    [
      {id:1 , icon: <FaPhoneAlt />, isVisible:true, name:"Phone" ,url:phone, setUrl:setPhone },
      {id:2 , icon: <BiSolidMessageDetail />, isVisible:true, name:"Message" ,url:message, setUrl:setMessage },
      {id:3 , icon: <HiOutlineMail />, isVisible:true, name:"Mail" ,url:mail, setUrl:setMail },
      {id:4 , icon: <TbWorldWww />, isVisible:true, name:"Website" ,url:website, setUrl:setWebsite},
      {id:5 , icon: <FaLocationArrow />, isVisible:true, name:"Location" ,url:location, setUrl:setLocation },
      {id:6 , icon: <FaTelegramPlane />, isVisible:true, name:"Telegram" ,url:telegram, setUrl:setTelegram },
      {id:7 , icon: <FaWhatsapp />, isVisible:true, name:"Whatsapp" ,url:whatsapp, setUrl:setWhatsapp },
      {id:8 , icon: <BsFillCalendarDateFill />, isVisible:true, name:"Date" ,url:date, setUrl:setDate }
                      ]
   )           
  
   const [featuredContentArr,setFeaturedContentArr] = useState([1])
   const [position,setPosition] = useState(0)
   const [comp,setComp]=useState({media:<input type="text" value={"media"} />,embededMedia:<input type="text" value={"embededmedia"} />,product:<input type="text" value={"product"} />,text:<input type="text" value={"text"} />});


  // const position = 0
  // const [fContent,setFContent] = useState(
  //     [{id:1,text:[{position:position,text:""}],media:[{position:position,mediaLink:""}], product:[{position:position,image:"",productTitle:"",productDescription:"",productPrice:"",productButtonLink:"",productButtonLabel:"",}], embedMedia:[{position:position,embedCode:""}], position:[] }]
  //   ) 
  const [fContent,setFContent] = useState(
      [{id:1,
        title:"Section Title",
        orderOfRender: []}]
    ) 
    // position:position,type:""
  console.log(fContent);
   
  // const [a,setA] = useState([{id:1,text:[{position:position,text:""}],media:[{position:position, mediaLink:""}], product:[{image:"",productTitle:"",productDescription:"",productPrice:"",productButtonLink:"",productButtonLabel:"",}], embedMedia:[{position:position,embedCode:""}], position:[{position:position,type:""}] }])
  

  // const handleUpload = (e)=>{
  //     // console.log('img..');
  //     setImg(URL.createObjectURL(e.target.files[0]))
  //     // console.log(e.target.files[0]);
  //     // console.log(img);
  // }
    
  function handleImageUpload(event){
    const file = event.target.files[0];
  }
  
  

  // const handleAddIcon = (id,icon) => {
    
  //   previewData.push(icon)

    
  //   const listIcons = iconData.map((icon)=>(icon.id==id)?  {...icon,isVisible:!icon.isVisible} :icon)
  //   setIconData(listIcons)

  // }

  // const handleTextChange = (setter) => (newValue) => {
  //   setter(newValue);
  // };

  const handleAddIcon = (id, icon, isPrimary) => {
    if(isPrimary){
    const updatedPrimaryPreviewData = [...primaryPreviewData, icon]; 
    setPrimaryPreviewData(updatedPrimaryPreviewData);
    const updatedprimaryAction = primaryAction.map(item =>
      item.id === id ? { ...item, isVisible: !item.isVisible } : item
    );
    setPrimaryAction(updatedprimaryAction);
    console.log(primaryAction)
    }
    else{
      const updatedSecondaryPreviewData = [...secondaryPreviewData, icon]; 
      setSecondaryPreviewData(updatedSecondaryPreviewData);
      const updatedSecondaryIconData = secondaryIconData.map(item =>
        item.id === id ? { ...item, isVisible: !item.isVisible } : item
      );
      setSecondaryIconData(updatedSecondaryIconData);
    }

  };

  const addFeaturedContent = () =>{
    // const newFeaturedContent = {id:fContent.length+1,text:[{position:null,text:""}],media:[{position:null,mediaLink:""}], product:[{position:null,image:"",productTitle:"",productDescription:"",productPrice:"",productButtonLink:"",productButtonLabel:"",}], embedMedia:[{position:null,embedCode:""}], position:[{position:null,type:""}] }
    const newFeaturedContent = {id:fContent.length+1,
      title:"Section Title",
      orderOfRender: []}

    setFContent([...fContent, newFeaturedContent ])
    // {console.log("... "+fContent)}
    fContent.map((c)=>{console.log("con ... "+ c)})


  }

  const openLink = (link) =>{
    window.open(link)
  }
 
  // const data = {
  //   userInputData:userInputData,
  //   primaryAction:primaryAction,
  //   secondaryIconData:secondaryIconData,
  //   fContent:fContent,
    
  // }
  // const data = {
  //   userInputData:userInputData,
  //   primaryAction:primaryAction,
  //   secondaryIconData:secondaryIconData
  // }

  // const addUserData = async ()=>{
  //   try {
  //     const data = {
  //       userInputData,
  //       primaryAction,
  //       secondaryIconData,
  //       fContent,
  //     };
  //     await axios.post("http://localhost:8800/userdata",data)
  //     console.log("aagaiya!!!");
  //   } catch (err) {
  //     console.log(err)
  //     console.log("nai ho raha")
      
  //   }
  // } 

  // const sendDataToBackend = () => {
  //   const dataToSend = {
  //     userInputData,
  //     primaryAction,
  //     secondaryIconData,
  //     fContent,
  //   };
  
  //   axios
  //     .post('http://localhost:8800/userdata', dataToSend)
  //     .then((response) => {
  //       // Handle success (if needed)
  //       console.log('Data sent to the backend:', response.data);
  //     })
  //     .catch((error) => {
  //       // Handle error (if needed)
  //       console.error('Error sending data to the backend:', error);
  //     });
  // };

  // const sendDataToBackend = () => {
  //   // Serialize the data using CircularJSON
  //   const serializedData = CircularJSON.stringify({
  //     userInputData,
  //     primaryAction,
  //     secondaryIconData,
  //     fContent,
  //   });
  
  //   axios
  //     .post('http://localhost:8800/userdata', { data: serializedData })
  //     .then((response) => {
  //       // Handle success (if needed)
  //       console.log('Data sent to the backend:', response.data);
  //     })
  //     .catch((error) => {
  //       // Handle error (if needed)
  //       console.error('Error sending data to the backend:', error);
  //     });
  // };

  const addUserData = async () => {
    try {
      const data = {
        userInputData,
        primaryAction,
        secondaryIconData,
        fContent,
      };
  
      
      await axios.post('http://localhost:8800/userdata', data);
      
    } catch (err) {
      
      console.error(err);
    }
  };
  
  
  


 


  return (
    <div className='App  bg-gray-900 '>
      {/* <Header
        img={img}
        setImg={setImg}
        // handleUpload={handleUpload}
      /> */}
      {/* <AddImages
        img={img}
        setImg={setImg}
      />
      <Content img={img}/> */}
      {/* <Content/> */}
      {/* <label htmlFor="inputField">firstName</label>
      <input  value={firstName} type="text" name="inputField"  onChange={(e)=>(setFirstName(e.target.value))} /> */}
      {/* <form >   
        <input type="file" onChange={handleImageUpload} style={{ display: "none"}} />
        <button type='submit' className='border bg-red-400'>upload img</button>
      </form> */}

      <div className="flex flex-row justify-around py-4 ">

        <div className=" max-w-xl">
          {userInputData.map((element)=>
            <LabelAndInput
              key={element.id}
              label={element.name}
              text={element.url}
              setText={element.setUrl}
              />
          )}

       
          

          
          <hr className='my-2 '/>
          <h1 className='text-white '>Primary action</h1>

          <div>
            {primaryPreviewData.map((data) => (
                <ActionInput
                  key={data.id}
                  iconLabel={data.icon}
                  text={data.url}
                  setText={(newValue) =>
                    setPrimaryPreviewData((prevData) =>
                      prevData.map((prevItem) =>
                        prevItem.id === data.id ? { ...prevItem, url: newValue } : prevItem
                      )
                    )
                  }
                />
                
              ))}
            
            </div>

          <div className='bg-gray-800  p-4 space-x-2 space-y-2  flex flex-wrap justify-between '>
                {primaryAction.map((icon)=>(icon.isVisible)?(
                <div className='w-[48%] '>
                  <button className='  w-[100%] h-8  flex flex-row   items-center bg-gray-700' onClick={()=>handleAddIcon(icon.id,icon,true)}>
                    <div className='pl-4'>{icon.icon}</div>
                    <div className=' flex justify-start px-4'>{icon.name}</div>
                    </button>
                </div>):null
                
                )}
            </div>



          <hr />
          <h1>Secondary action</h1>
          
          
            <div>
            {/* {previewData.map((data)=>          
              <ActionInput 
                key={data.id}
                iconLabel={data.icon}
                text={data.url}
                // setText={data.setUrl} // Pass the setUrl function directly
                // setText={(newValue) => data.setUrl(newValue)} // Pass the setUrl function directly
                setText={handleTextChange(data.setUrl)}
              />
            )} */}
            {secondaryPreviewData.map((data) => (
                <ActionInput
                  key={data.id}
                  iconLabel={data.icon}
                  text={data.url}
                  setText={(newValue) =>
                    setSecondaryPreviewData((prevData) =>
                      prevData.map((prevItem) =>
                        prevItem.id === data.id ? { ...prevItem, url: newValue } : prevItem
                      )
                    )
                  }
                />
              ))}

            
            </div>

          <div className='bg-gray-800 p-4 space-x-2 space-y-2  flex flex-wrap justify-between '>
                {secondaryIconData.map((icon)=>(icon.isVisible)?(
                <div className='w-[48%] '>
                  <button className='  w-[100%] h-8  flex flex-row   items-center bg-gray-700' onClick={()=>handleAddIcon(icon.id,icon,false)}>
                    <div className='pl-4'>{icon.icon}</div>
                    <div className=' flex justify-start px-4'>{icon.name}</div>
                    </button>
                </div>):null
                )}
            </div>

            <h1>Featured content</h1>

            {/* {fContent.map((content)=><div className='my-4'> <FeaturedContent key={content.id} comp={comp} orderOfrender={content.position} setFContent={setFContent} id={content.id} fContent={fContent} content={content}/></div>)} */}
            {fContent.map((content,index)=><div className='my-4'> <FeaturedContent key={index}   setFContent={setFContent} id={index+1} fContent={fContent} content={content} /></div>)}
      
            {/* {fContent.forEach((e) => console.log("Fcontent:", e))}  */}

            <div className='flex m-2 ml-0'>
              <button className='bg-gray-700 h-8 w-8' onClick={()=>addFeaturedContent()}>+</button>
              <h1 className='m-1'>Add section</h1>
            </div>
            {/* {fContent.map((e)=>console.log("fcontent : "+e))} */}



         

        </div>

        <div>
          <Preview
            firstName={firstName}
            lastName={lastName}
            genderPronouns={genderPronouns}
            jobTitle={jobTitle}
            businessName={businessName}
            businessAddress={businessAddress}
            businessDescription={businessDescription}
            secondaryPreviewData={secondaryPreviewData}
            primaryPreviewData={primaryPreviewData}
            openLink={openLink}
          
          />
        </div>
        {/* <AddMedia/> */}

      </div>

      {/* <button onClick={sendDataToBackend} className=' border '>Add..</button> */}
      <button onClick={addUserData} className='border' id="backend">Add..</button>



    </div>
  );
}

export default App;

