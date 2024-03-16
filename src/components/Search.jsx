import React from 'react'

function Search({setSearchDetails}) {
  return (
    <>
    <div className='flex gap-[1rem] bg-zinc-100 p-[1rem] rounded-md'>
       
       <div className='flex flex-col w-[30%] gap-[0.5rem]'>
             <label htmlFor="jobTitle">What job you looking for ?</label>
             <input className='w-[100%] border-[2px] rounded-md px-[1rem] py-[0.5rem] border-zinc-600'
                   id='jobTitle' type="text" placeholder='Full Stack Engine...'
                   onChange={(e) => setSearchDetails(prevState => ({...prevState, searchInp: e.target.value}))} />
       </div>

       <div className='flex flex-col w-[30%] gap-[0.5rem]'>
             <div className='flex gap-[1rem]'>
                 <label htmlFor="remote">Where ? or Remote</label>
                 <input type="checkbox" id="remote" value={true}
                        onChange={(e) => setSearchDetails(prevState => ({...prevState, searchInp: e.target.value}))} />
             </div>
             
             <input className='w-[100%] border-[2px] rounded-md px-[1rem] py-[0.5rem] border-zinc-600'
                   id='location' type="text" placeholder='Bangalore'
                   onChange={(e) => setSearchDetails(prevState => ({...prevState, location: e.target.value}))} />
       </div>

       <div className='flex flex-wrap w-[30%] gap-[0.5rem] justify-evenly items-center'>
             <div className='flex gap-[0.5rem] w-[40%] items-center justify-start'>      
                 <input type="checkbox" id="fulltime" value={true}
                         onChange={(e) => setSearchDetails(prevState => ({...prevState, fullTime: e.target.value}))} />
                 <label htmlFor="fulltime">Full-Time</label>
             </div>
             <div className='flex gap-[0.5rem] w-[40%] items-center justify-start'>
                 <input type="checkbox" id="partime"
                         onChange={(e) => setSearchDetails(prevState => ({...prevState, partTime: e.target.value}))} />
                 <label htmlFor="partime">Part-Time</label>

             </div>
             <div className='flex gap-[0.5rem] w-[40%] items-center justify-start'>
                 <input type="checkbox" id="contractor"
                         onChange={(e) => setSearchDetails(prevState => ({...prevState, contractor: e.target.value}))} />
                 <label htmlFor="contractor">Contractor</label>

             </div>
             <div className='flex gap-[0.5rem] w-[40%] items-center justify-start'>
                 <input type="checkbox" id="internship"
                         onChange={(e) => setSearchDetails(prevState => ({...prevState, internship: e.target.value}))} />
                 <label htmlFor="internship">Internship</label>
             </div>
       </div>
       
</div>
    </>
  )
}

export default Search