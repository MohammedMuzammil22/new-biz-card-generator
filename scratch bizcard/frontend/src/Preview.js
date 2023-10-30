import React from "react";

const Preview = ({
    firstName,
    lastName,
    genderPronouns,
    jobTitle,
    businessName,
    businessAddress,
    businessDescription,
    secondaryPreviewData,
    primaryPreviewData,
    openLink
}) => {
    return (
        <div className=" border-black  border-2 bg-green-700 max-w-[450px]  rounded-lg ">
            <div className=" bg-black text-white flex justify-center">
                <h2>LIVE PREVIEW</h2>
            </div>
            <div className=" bg-slate-800">
                <input
                    type="text"   
                    className="m-1"
                    disabled
                    placeholder="https://yoursite/vcard/username"
                />
            </div>

            <div className="overflow-y-scroll max-h-96">
            <div className=" bg-yellow-300 max-h-fit h-20">
                {/* {coverPhoto}
                {profile} */}
                
            </div>
            <div className=" bg-white flex  flex-col justify-center items-center space-y-4 py-3 rounded-b-lg ">
                <div>{firstName + " " + lastName}</div>
                <div>{genderPronouns&& `{${genderPronouns}}`}</div>
                <div>{jobTitle}</div>
                <div>{businessName}</div>
                <div>{businessAddress}</div> 
                <div>{businessDescription}</div>
                <button className="bg-blue-400 rounded-lg  w-[50%] flex justify-center">save contact</button>

                
            </div>

            <div className=' bg-lime-300 flex  flex-wrap justify-center p-4 max-w-[450px]'>
                {primaryPreviewData.map((icon)=>(icon.isVisible)?<button className='' onClick={()=>{console.log(icon.url);openLink(icon.url)}}> <div className="h-8 w-8 rounded-full bg-red-400 mx-5 my-1 flex justify-center items-center max-w-[450px]">{icon.icon}</div></button>:null)}
            </div>

            <div className=' bg-cyan-300 flex  flex-wrap justify-center p-4 max-w-[450px]'>
                {secondaryPreviewData.map((icon)=>(icon.isVisible)?<button className='' onClick={()=>console.log(icon.url)}><div className="h-8 w-8 rounded-full bg-blue-800 mx-5 my-1 flex justify-center items-center max-w-[450px]">{icon.icon}</div></button>:null)}
            </div> 
             
            </div>
        </div>
    );
};

export default Preview;
