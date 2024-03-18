import React, {useEffect, useState} from 'react'
import Form from '../components/Form'
import axios from 'axios'

function EditPost() {

    const [jobDetails, setJobDetails] = useState({
        company_name: '',
        website: '',
        job_title: '',
        work_loc: '',
        remote: true,
        job_link: '',
        description: ''
    });

    useEffect(() => {
        async function get() {
            try {
                const id = window.location.href.split("/")[4]
                console.log(id)
                const response = await axios.get(`http://10.0.0.133:3000//api/v1/job/${id}`)
                setJobDetails(response.data.result.rows[0])
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
        get()
    }, [])
    
    const onSubmit = async() => {
        try {
            const token = localStorage.getItem("token") || false;
            const id = window.location.href.split("/")[4]
            const response = await axios.put(`http://10.0.0.133:3000//api/v1/update/${id}`, jobDetails, { headers: { "Authorization": `Bearer ${token}` } })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='w-[42rem] mx-auto my-[2rem] flex flex-col items-start justify-center gap-[1rem] font-thin'>
        
        <h1 className='text-[2rem]'>Edit your Job Post</h1>

        <Form onSubmit={onSubmit} setJobDetails={setJobDetails} jobDetails={jobDetails} isEdit={true}/>

    </div>
  )
}

export default EditPost