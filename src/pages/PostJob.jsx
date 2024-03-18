import React, {useState} from 'react'
import Form from '../components/Form'
import axios from 'axios'

function PostJob() {

  const [jobDetails, setJobDetails] = useState({
    company_name: '', //
    website: '', //
    job_title: '', //
    work_loc: '', //
    remote: true, //
    job_link: '', //
    commitment: 'Fulltime',
    description: '',
    name: '',
    email: ''
})

const onSubmit = async() => {
    console.log(jobDetails)
    try {
        const response = await axios.post("http://10.0.0.133:3000//api/v1/insert", jobDetails)
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