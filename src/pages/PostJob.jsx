import React, {useEffect, useState} from 'react'
import Form from '../components/Form'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

function PostJob() {

  const [modal, setModal] = useState(false)
  const [jobDetails, setJobDetails] = useState({
    company_name: '', //
    website: '', //
    job_title: '', //
    image: '',
    work_loc: '', //
    remote: true, //
    job_link: '', //
    commitment: 'Fulltime',
    description: '',
    name: '',
    email: ''
})

const onSubmit = async() => {

  const token = localStorage.getItem("jf_token") || false
  if(!token){
    setModal(true)
    return
  }
  
  const formData = new FormData();
    // Append all text fields to formData
    for (const key in jobDetails) {
        if (key !== "image") {
            formData.append(key, jobDetails[key]);
        }
    }
    // Append the file. Ensure 'image' matches your backend expectation
    if (jobDetails.image) {
        formData.append("image", jobDetails.image);
    }

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
  }

    console.log(formData)

    try {

        const response = await axios.post("http://localhost:3000/api/v1/insert", formData, {
          headers: {
              // Inform the server about the data type
              "Content-Type": "multipart/form-data",
          },
      })
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}


  return (
    <div className='relative w-[42rem] mx-auto my-[2rem] flex flex-col items-start justify-center gap-[1rem] font-thin'>

          { modal ? <div className='sticky top-[2rem] rounded-[8px] p-[1rem] bg-white w-[90%] h-[10rem] mx-auto'>
                      
                        <div>
                          New here ? <Link className='underline' to={'/signup'}>Signup</Link>
                        </div>
                        <div>
                          Already have an account ? <Link className='underline' to={'/login'}>Login</Link>
                        </div>
          </div> : null }
        
            <h1 className='text-[2rem]'>Hire the best. Share your job post with thousands of job seekers.</h1>

            <div className='flex flex-col'>
                <h3 className='text-[1.2rem]'>Company Details</h3>
                <p>We will automatically create a company profile with all your job listings.</p>
            </div>

            <Form onSubmit={onSubmit} setJobDetails={setJobDetails} jobDetails={jobDetails} isEdit={false}/>

    </div>
  )
}

export default PostJob