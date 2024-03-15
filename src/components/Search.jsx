import React from 'react'

function Search({setSearchDetails}) {
  return (
    <>
    <div className='flex gap-[1rem] bg-zinc-100 p-[1rem] rounded-md'>
       
       <div className='flex flex-col w-[30%] gap-[0.5rem]'>
             <label htmlFor="companyWebsite">What job you looking for ?</label>
             <input className='w-[100%] border-[2px] rounded-md px-[1rem] py-[0.5rem] border-zinc-600'
                   type="text" placeholder='Full Stack Engine...'
                   onChange={(e) => setSearchDetails(prevState => ({...prevState, searchInp: e.target.value}))} />
       </div>

       <div className='flex flex-col w-[30%] gap-[0.5rem]'>
             <div className='flex gap-[1rem]'>
                 <label htmlFor="address">Where ? or Remote</label>
                 <input type="checkbox" id="address" value={true}
                        onChange={(e) => setSearchDetails(prevState => ({...prevState, searchInp: e.target.value}))} />
             </div>
             
             <input className='w-[100%] border-[2px] rounded-md px-[1rem] py-[0.5rem] border-zinc-600'
                   type="text" placeholder='Bangalore'
                   onChange={(e) => setSearchDetails(prevState => ({...prevState, location: e.target.value}))} />
       </div>

       <div className='flex flex-wrap w-[30%] gap-[0.5rem] justify-evenly items-center'>
             <div className='flex gap-[0.5rem] w-[40%] items-center justify-start'>      
                 <input type="checkbox" id="address" value={true}
                         onChange={(e) => setSearchDetails(prevState => ({...prevState, fullTime: e.target.value}))} />
                 <label htmlFor="address">Full-Time</label>
             </div>
             <div className='flex gap-[0.5rem] w-[40%] items-center justify-start'>
                 <input type="checkbox" id="address"
                         onChange={(e) => setSearchDetails(prevState => ({...prevState, partTime: e.target.value}))} />
                 <label htmlFor="address">Part-Time</label>

             </div>
             <div className='flex gap-[0.5rem] w-[40%] items-center justify-start'>
                 <input type="checkbox" id="address"
                         onChange={(e) => setSearchDetails(prevState => ({...prevState, contractor: e.target.value}))} />
                 <label htmlFor="address">Contractor</label>

             </div>
             <div className='flex gap-[0.5rem] w-[40%] items-center justify-start'>
                 <input type="checkbox" id="address"
                         onChange={(e) => setSearchDetails(prevState => ({...prevState, internship: e.target.value}))} />
                 <label htmlFor="address">Internship</label>
             </div>
       </div>
       
</div>
    </>
  )
}

export default Search