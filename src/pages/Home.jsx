import React, { useEffect, useState } from 'react'
import axios from "axios"
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import JobCard from '../components/JobCard'

function Home() {

  const [post, setPost] = useState([])
  const [filteredPost, setFilteredPost] = useState([])
  const [searchDetails, setSearchDetails] = useState({
    searchInp: '',
    location: '',
    remote: false,
    fullTime: true,
    partTime: true,
    contractor: true,
    internship: true,
  })

  useEffect(() => {
      const filter = post.filter((post) => {
        return (post.job_title.toLowerCase()).includes(searchDetails.searchInp.toLowerCase())
      })
      setFilteredPost(filter)
  }, [searchDetails])
  
  useEffect(() => {
    const search = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/list")
        setPost(response.data.all.rows)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
    }

      search()
  },[])

  return (
    <div className='w-[100%] px-[2rem] mx-auto my-[2rem] flex flex-col items-start justify-center gap-[2rem] font-thin'> 

        <Navbar />

        <div className='w-[100%] flex flex-col px-[2rem] gap-[1rem]'>

            <h1 className='text-[2rem] my-[1rem]'>Startup Jobs Help shape the future by joining one of the fastest growing technology startups.</h1>

            <Search setSearchDetails={setSearchDetails} />

            { filteredPost.length > 0 ? (filteredPost.map((post) => (
                    <JobCard post={post} key={post.id} />
             ))) :  (post.map((post) => (
                    <JobCard post={post} key={post.id} />
             )))  }

        </div>

        </div>
  )
}

export default Home