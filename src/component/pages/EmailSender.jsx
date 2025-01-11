import axios from 'axios';
import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast';
 
import { Editor } from '@tinymce/tinymce-react';

 function EmailSender() {
   const [emailData, setemailData] = useState({
    to:"",
    subject:"",
    message:""
   });
  const [files, setFiles] = useState(null);

   const editorRef = useRef(null);
   const token = localStorage.getItem("token");

   function handleFilesChange(event) {
    const file = event.target.files[0];
    setFiles(file);
  }


   function handleFileChange(event,name){
 

    setemailData({...emailData,[name]:event.target.value});
    
     //console.log(file);
   }


  //  const handleSubmit=(event)=>{
  //   event.preventDefault();
  //   // if(emailData.to== '' || emailData.subject==' ' || emailData.message=='') {

  //   //     toast.error("invalid fileds!! ");
  //   //     toast.error("Fill the data !! ");
  //   // }

  //   // try {
  //   //     sendEmail(emailData)
  //   //     toast.success("Email send Successfully !!")
  //   //     setemailData({
  //   //         to:"",
  //   // subject:"",
  //   // message:""
  //   //     })
  //   // } catch (error) {
  //   //     console.log(error);
  //   //     toast.error("Email not send !!!")
        
        
  //   // }

  //   // console.log(emailData);
  //   // console.log("sumbit data!")
  //   const { to, subject, message } = emailData;
  // if (!to.trim() || !subject.trim() || !message.trim()) {
  //   toast.error("Please fill all the fields properly!");
  //   return;
  // }
  //   try {
  //     sendEmail(emailData);
  //     toast.success("Email sent successfully!");
  //     setemailData({
  //       to: "",
  //       subject: "",
  //       message: "",
  //     });
  //     editorRef.current.setContent('');
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Failed to send email!");
  //   }

  //  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { to, subject, message } = emailData;
    console.log("click handl submit!!");
    
  
    if (!to.trim() || !subject.trim() || !message.trim()) {
      toast.error("Please fill all the fields properly!");
      return;
    }
  
    if (files !== null) {
      const formData = new FormData();
      formData.append('file', files);
      formData.append('request', new Blob([JSON.stringify(emailData)], {
        type: "application/json"
      }));
  
      try {
       await axios.post("http://localhost:8080/manager/email/sendfile", formData, {
          headers: { 
            "Content-Type": "multipart/form-data",
             Authorization: `Bearer ${token}`

          }
        });
        toast.success("Email sent successfully!");
        setemailData({ to: '', subject: '', message: '' });
        setFiles(null);
      } catch (error) {
        console.error(error);
        toast.error("Failed to send email!");
        setemailData({ to: '', subject: '', message: '' });
        setFiles(null);
        editorRef.current.setContent(''); 
      }
    } else {
      try {
        await axios.post("http://localhost:8080/manager/email/send", emailData,{
            headers: { 
                            Authorization: `Bearer ${token}`
              }
          });
        //sendEmail(emailData);
        toast.success("Email sent successfully!");
        setemailData({ to: "", subject: "", message: "" });
        editorRef.current.setContent(''); 
      } catch (error) {
        console.error(error);
       
        toast.error("Failed to send email!");
        setemailData({ to: "", subject: "", message: "" });
        editorRef.current.setContent(''); 
      }
    }
  };
  
    
     

      
 

  return (
    <div className="w-full min-h-screen flex justify-center items-center text-center bg-cover bg-center  " style={{backgroundImage:'url("https://images.pexels.com/photos/28905003/pexels-photo-28905003/free-photo-of-giraffes-crossing-rail-tracks-in-african-savanna.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'}}  >

    <div className="email-card w-full max-h-full  max-w-3xl p-6 rounded-lg border border-gray-300 shadow-lg light:text-white m-4" style={{ backgroundImage: 'url("https://images.pexels.com/photos/28905003/pexels-photo-28905003/free-photo-of-giraffes-crossing-rail-tracks-in-african-savanna.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }} >
      <h1 className="text-black text-3xl font-semibold mb-4 text-center light:text-white">Email Sender</h1>
      <p className= "light:text-white text-3xl text-black text-center mb-6">
        Send an email to your favorite person with this app...
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-2  ">
          <label htmlFor="email" className="block  light:text-white  font-medium mb-2 text-start text-black ">
            To
          </label>
          <input
            type="email"
            value={emailData.to}
            onChange={(event)=>handleFileChange(event,"to")}
            id="email"
            placeholder="Enter email..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  light:bg-gray-500  focus:ring-sky-500 focus:border-sky-500 hover:bg-white"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="subject" className="block light:text-white text-black font-medium mb-2 text-start">
            Subject
          </label>
          <input
            type="text"
            value={emailData.subject}
            onChange={(event)=>handleFileChange(event,"subject")}
            id="subject"
            placeholder="Enter subject..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg light:bg-gray-500 focus:outline-none focus:ring-2  hover:bg-white focus:ring-sky-500 focus:border-sky-500"
          />
        </div>
       
        <div className="mb-2">
            <label htmlFor="files" className="block light:text-white text-black  font-medium mb-2 text-start">
              Attach files
            </label>
            <input
              type="file"
              onChange={handleFilesChange}
              id="files"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg light:bg-gray-500 focus:outline-none focus:ring-2 hover:bg-white focus:ring-sky-500 focus:border-sky-500"
            />
          </div>

        <div className="mb-2">
          <label htmlFor="message" className="block  light:text-white text-black font-medium mb-2 text-start">
          Message
          </label>
          {/* <textarea
            rows={5}
            type="text"
            value={emailData.message}
            onChange={(event)=>handleFileChange(event,"message")}
            id="subject"
            placeholder="Enter subject..."
            className=" light:bg-gray-500  w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 hover:bg-white light:text-white focus:ring-sky-500 focus:border-sky-500"
          /> */}
           <Editor
        onInit={(evt, editor) => editorRef.current = editor}

        onEditorChange={(event)=>{
          setemailData({...emailData,'message':editorRef.current.getContent()});

          //message:editorRef.current.getContent()
          //console.log(editorRef.current.getContent())

        }}
        apiKey='a4by1fjuaaz82bi8pj9kcd8l4bliiejkkbkjltbd03tmdgup'
    
        init={{
        height: 500,
        menubar: true,
        plugins: [
           'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
           'lists','link','image','file','pdf','charmap','preview','anchor','searchreplace','visualblocks',
           'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
        ],
        toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
           'alignleft aligncenter alignright alignjustify | ' +
           'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
    />
        </div>
        <div className='mt-3 text-start font-medium text-white flex'>
            <button type='submit' className='border-2 p-2 rounded-lg bg-blue-600 hover:bg-blue-700 light:bg-purple-400'> Send Email</button>
            <button  className='border-2  p-2 ml-1 rounded-lg bg-red-700 hover:bg-red-900  light:bg-purple-400 '> Clear</button>

        </div>
        </form>
        </div>
        </div>
  
  )
}

export default EmailSender
