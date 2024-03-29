import React, {useState} from 'react'
import Form from '../components/Form'
import axios from 'axios'

function PostJob() {

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
<<<<<<< HEAD
        const response = await axios.post("http://localhost:3000/api/v1/insert", formData, {
          headers: {
              // Inform the server about the data type
              "Content-Type": "multipart/form-data",
          },
      })
=======
        const response = await axios.post("http://10.0.0.133:3000//api/v1/insert", jobDetails)
>>>>>>> d3604f20ae5dabd1ffb93b99eba297622b66186e
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}


  return (
    <div className='w-[42rem] mx-auto my-[2rem] flex flex-col items-start justify-center gap-[1rem] font-thin'>
        
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