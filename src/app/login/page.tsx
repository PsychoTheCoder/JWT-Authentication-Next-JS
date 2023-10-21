"use client";
import Image from 'next/image'
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useUserStore } from '@/store/store';
export default function Home() {
  
  const {setIsLogin, username, setUsername} = useUserStore();
  const [Username, SetUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginAccount = () => {
    if (password == "" || Username == "") {
      toast.error('Please fill all fields', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }

    else {
      fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: Username, password: password})
      })
      .then(res=>res.json())
      .then(data=>{
        if (data.type == "error") {
          toast.error(data.message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        }
        else {
          localStorage.setItem('hoxtrackr_token', data.token);
          setIsLogin(true);
          setUsername(Username);
          toast.success(data.message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        }
      })
    }
    
  }
  return (
  <div className='my-10 flex justify-center items-center flex-col'>
    <p className='text-3xl font-bold'>Login</p>



    <div className="my-5 form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Username: </span>
  </label>
  <input type="text" value={Username} onChange={(e)=>SetUsername(e.target.value)} placeholder="Type here" className="input input-primary w-full max-w-xs" />
 
</div>

    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Password: </span>
  </label>
  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Type here" className="input input-primary w-full max-w-xs" />
 
</div>



<button onClick={loginAccount} className='my-10 btn btn-primary'>Login</button>



    </div>
  )
}
