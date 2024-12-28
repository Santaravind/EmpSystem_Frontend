import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
function ProfileUpload() {

    const {id}=useParams();
    const [selectedFile, setselectedFile] = useState(null);
    const navigate=useNavigate();
   const [messageStatus, setmessageStatus] = useState(false);
   const [uploading, setuploading] = useState(false);
   const [uploadedSrc, setuploadedSrc] = useState("");

   const token = localStorage.getItem("token");

   //console.log(token);
   const config = {
    headers: {
      Authorization: `Bearer ${token}`,
     
    },
  };

   const handalonchange=(event)=>{
   const file=event.target.files[0];
   //console.log(file);
   if (file.type==='image/png'||file.type==='image/jpeg'||file.type==='') {
       setselectedFile(file);
       }else{
           alert("Select only image !!!")
           setselectedFile(null);
       }
  
   };

//    const handalEmpchange=(event)=>{
      
//       setempId(event.target.value);

//    }      

   const formSubmit=(event)=>{
       event.preventDefault();

       if (!selectedFile) {
           //image upload
          // uplploadImageToServer();
          alert("Select image first!")   

       }
        if(!id) {
           alert("Select id first!!");   
       }
       uplploadImageToServer();   
      
   };

   //function to upload image to server 

   const uplploadImageToServer=()=>
   {
       const URL='http://localhost:8080/api/profile/upload'
       const formData = new FormData();

       formData.append("file", selectedFile);
       formData.append("empID",id);

       axios.post(URL,formData,config)  
           .then((res)=>{console.log(res.data)
           setuploadedSrc(res.data);
          
       })
           .catch((error)=>{
               console.error("Error uploading file:", error);
               alert("Failed to upload file!");
           })
           .finally(
              // setmessageStatus(false),
               setuploading(false)
           );

         
   }
   
   const handalReset=(event)=>{
    event.preventDefault();
    navigate("/home")
   }

 return (
   <div className='main flex justify-center '>
       <div className='rounded-md   w-1/3 p-4 m-4 border bg-gray-150'>
       <h1  className='text-3xl'>Upload your photo</h1>
       <div className='form_container mt-3 '>

           <form action="file" onSubmit={formSubmit}>
             <div className='flex flex-col gap-y-2'>
               <label htmlFor="file"> Select image</label>
               <input onChange={handalonchange} type="file" id='file' />

               <label htmlFor="text"> Employee Id </label>
               <input type='text' id='text' 
               value={id}
               className=' border-2 border-black rounded-md '
               />
             </div>
            <div className='flex justify-end '>
               <button type='submit' className='border m-2 p-2 rounded-lg  text-white  hover:text-red-500 hover:bg-yellow-100 bg-blue-600 '>Upload</button>
               <button type='reser' className='border m-2 p-3 rounded-lg  text-white  hover:text-red-500 hover:bg-yellow-100 bg-red-600  ' onClick={handalReset}>Exit</button>
            </div>
           </form>
           </div>
           {/* {uploaded image view} */}

          
          <div className='uploaded_view '>
               <img  className='h-[300px] mt-4 rounded shadow ' src={uploadedSrc} alt="" />
           </div>
           <div className=''>
           </div>
          

       </div>
       
   </div>
 )
}

export default ProfileUpload
