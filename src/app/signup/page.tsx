"use client";
import Image from 'next/image'
import { toast } from 'react-toastify';
import { useState } from 'react';
export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  
  const createAccount = () => {
    if (email == "" || password == "" || username == "") {
      toast.error('Please fill all fields to create your account', {
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
      fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username, password: password, email: email, isAdmin: false, isPremium: false, isBlocked: false})
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
    <p className='text-3xl font-bold'>Create a FREE Account</p>

    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email: </span>
  </label>
  <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Type here" className="input input-primary w-full max-w-xs" />
 
</div>

    <div className="my-5 form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Username: </span>
  </label>
  <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Type here" className="input input-primary w-full max-w-xs" />
 
</div>

    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Password: </span>
  </label>
  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Type here" className="input input-primary w-full max-w-xs" />
 
</div>



<button onClick={createAccount} className='my-10 btn btn-primary'>Create Account</button>



    </div>
  )
}
