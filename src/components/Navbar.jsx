import React from 'react'

function Navbar() {
  return (
    <>
       <div className='w-[100%] flex justify-between gap-[1rem] items-center'>

            <div className='w-[4rem] h-[4rem] bg-zinc-400 rounded-md'></div>

            <div className='flex gap-[1rem]'>
                <a className='border-[1px] border-zinc-300 rounded-md px-[1rem] py-[0.5rem]'
                    href="/pricing">For employers</a>
                <a className='bg-zinc-300 rounded-md px-[1rem] py-[0.5rem]'
                    href="/postjob">Post a Job</a>
            </div>

        </div>
    </>
  )
}

export default Navbar