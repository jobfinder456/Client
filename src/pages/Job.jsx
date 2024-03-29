import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Job() {

  const [details, setDetails] = useState({})
  useEffect( () => {
    async function get () {
      try {
        const id = window.location.href.split("/")[4]
        const response = await axios.get(`http://10.0.0.133:3000//api/v1/job/${id}`)
        setDetails(response.data.result.rows[0])
        console.log(response.data.result.rows[0])
      } catch (error) {
        console.log(error)
      }
    }

    get()
      
  }, [])

  return (
    <div className='relative w-[42rem] mx-auto flex justify-between font-thin py-[2rem]'>

      <div className='w-[70%] flex flex-col items-start justify-center gap-[0.5rem] '>
            <a href={details.website} className='w-[4rem] h-[4rem] bg-zinc-400 rounded-md'></a>
            <h3 className='text-[1.5rem] text-zinc-500'>{details.company_name} is hiring for </h3>
            <h1 className='text-[2rem] font-bold'>{details.job_title}</h1>
            <h3 className='text-[1rem]'>{details.work_loc} <span className='text-[0.8rem] pl-[1rem]'>{details.remote ? "Remote" : null}</span></h3>
            <p className='mt-[1rem]'>{details.description}</p>
      </div>
        
      <div className='w-[28%] flex flex-col gap-[1rem]'>

            <a href={details.job_link} className='bg-zinc-600 px-[1rem] py-[0.5rem] text-white rounded-md'>Apply for this job</a>

            <div className='bg-zinc-200 p-[0.5rem] rounded-md'>

                  <label htmlFor='email' className='text-[0.75rem] leading-tight'> Want to apply interview first ? Drop your mail, we will send the notification as soon as new Job post drops</label>
                  <input type="text" placeholder='your mail' id='email' autoComplete='off'
                          className='w-[100%] border-[2px] rounded-md px-[1rem] py-[0.25rem] border-zinc-600' 
                  />

            </div>
      </div>

    </div>
  )
}

export default Job