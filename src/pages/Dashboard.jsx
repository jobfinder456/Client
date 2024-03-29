import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {

  const [email, setEmail] = useState('');
  const [postData, setPostData] = useState([]);
  const [modal, setModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const token = localStorage.getItem("token") || false;
            const responseVerify = await axios.get(`http://10.0.0.133:3000//api/v1/verifyuser`, { headers: { "Authorization": `Bearer ${token}` } });
            setEmail(responseVerify.data.email);
            console.log(responseVerify.data.email);

            const responseSubmit = await axios.post("http://10.0.0.133:3000//api/v1/users-list", { email: responseVerify.data.email }, { headers: { "Authorization": `Bearer ${token}` } });
            console.log(responseSubmit);
            setPostData(responseSubmit.data.all);
        } catch (error) {
            console.error("Error:", error);
            console.log("please login")
        }
    };

    fetchData();
}, []);

  const onDelete = async (id) => {
    console.log(id)
    try {
      const token = localStorage.getItem("token") || false;
      const response = await axios.delete(`http://10.0.0.133:3000//api/v1/delete/${id}`, { headers: { "Authorization": `Bearer ${token}` }} );
      console.log(response);
      // After deleting, close the modal and reset postIdToDelete
      setModal(false);
      setPostIdToDelete(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='relative w-[42rem] h-screen mx-auto flex-col justify-between font-thin py-[2rem]'>

      {modal && (
        <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-slate-100 p-[1rem] flex flex-wrap justify-evenly items-center gap-[0.5rem]'>
          <h1 className='text-[1.2rem] w-[100%]'>Are you sure you want to delete the post?</h1>
          <button onClick={() => setModal(false)} className='bg-blue-200 rounded-md text-blue-700 p-[0.5rem]'>No</button>
          <button onClick={() => onDelete(postIdToDelete)} className='bg-red-200 rounded-md text-red-700 p-[0.5rem]'>Yes</button>
        </div>
      )}

      {/*<input type="text"
        placeholder='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={onSubmit}>Submit</button>*/}

      <h1>Welcome Back</h1>

      { postData[0] ? postData.map((post) => (
        <div key={post.id} className='flex items-center gap-[1rem] px-[1rem] py-[0.5rem] bg-zinc-100 mt-[1rem]'>
          <div className='w-[4rem] h-[4rem] bg-zinc-400 rounded-md'></div>
          <div>
            <h2>{post.job_title}</h2>
            <p>{post.company_name}</p>
          </div>

          {post.remote ? <h2 className=''>Remote</h2> : <h2 className=''>{post.work_loc}</h2>}

          <a href={`/editpost/${post.id}`} className='bg-blue-200 rounded-md text-blue-700 p-[0.5rem]'>Edit post</a>

          <button onClick={() => {
            setModal(true);
            setPostIdToDelete(post.id);
          }} className='bg-red-200 rounded-md text-red-700 p-[0.5rem]'>Delete post</button>
        </div>
      )) : <p>Please log In</p> }

    </div>
  );
}

export default Dashboard;
