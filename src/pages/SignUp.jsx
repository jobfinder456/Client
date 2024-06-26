import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

function SignUp() {

    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: "",
        password: "",
      })

    useEffect(() => {
        const token  = localStorage.getItem("jf_token") || false

        if(token){
            navigate('/dashboard')
            return
        }
    
        async function verify(){
            try {
        
                const response = await axios.get(`http://localhost:3000/api/v1/verifyuser`, { headers: { "Authorization": `Bearer ${token}` } });
                console.log(response)
                navigate('/dashboard')
        
              } catch (error) {
                console.error("Verification error:", error);
              }
        }
        if(token){
            verify()
        }
    },[])

    const onSubmit = async() => {
        try {
            console.log(userDetails)
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", userDetails)
            console.log(response)
            localStorage.setItem("jf_token", response.data.token)
            navigate('/dashboard')
        } catch (error) {
            console.error("Signup error:", error);
        }
    }

  return (
    <div className='relative mx-auto mt-[2rem] w-[20rem] p-[1rem] rounded-[8px] text-black flex flex-col justify-center items-center gap-[1rem] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)];'>

        <label htmlFor="name"></label>
        <input type="text" 
                id='name'
                autoComplete='on'
                onChange={(e) => {
                    setUserDetails(prevState => ({
                        ...prevState,
                        name: e.target.value
                    }));
                }} 
                placeholder='name' />

        <label htmlFor="email"></label>
        <input type="email" 
                id='email'
                autoComplete='on'
                onChange={(e) => {
                    setUserDetails(prevState => ({
                        ...prevState,
                        email: e.target.value
                    }));
                }} 
                placeholder='email' />

        <label htmlFor="password"></label>
        <input type="text"
                id='password' 
                onChange={(e) => {
                    setUserDetails(prevState => ({
                        ...prevState,
                        password: e.target.value
                    }));
                }} 
                placeholder='password' />

        <button onClick={onSubmit}>LogIn</button>

    </div>
  )

}

export default SignUp