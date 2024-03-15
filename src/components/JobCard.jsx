import React from 'react'

function JobCard({post}) {
  return (
    <>
            <a href={`/job/${post.id}`} className='flex gap-[1rem] px-[1rem] py-[0.5rem] bg-zinc-100'>
                              <div className='w-[4rem] h-[4rem] bg-zinc-400 rounded-md'></div>
                              <div>
                                    <h2>{post.job_title}</h2>
                                    <p>{post.company_name}</p>
                              </div>
              
                {post.remote ? <h2 className=''>Remote</h2> :  <h2 className=''>{post.work_loc}</h2>}
            </a>
    </>
  )
}

export default JobCard