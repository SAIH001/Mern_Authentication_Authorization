import React from 'react'

import { useState } from 'react';

import { ToastContainer, toast, Bounce } from 'react-toastify';
const Login = () => {

    const [UserEmail, setUserEmail] = useState('');
    const [UserPassword, setUserPassword] = useState('');
  
  
    const handle_UserLogin = async(e) =>{
      e.preventDefault();
     
     
      const Response_UserLogin = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        UserEmail,
        UserPassword
      })
    })
      const res =await Response_UserLogin.json()

      if(Response_UserLogin.status == 404){
        toast.error(res.error)
      }else if(Response_UserLogin.status == 200){
        toast.success(res.message)

      }
    
    
  




    }


  return (
    <div className="container">
      <h1 className='text-center mt-4'> User Login</h1>
      <form className="mt-3" onSubmit={handle_UserLogin}>

        {/* UserEmail Input Field */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
          <input type="email" className="form-control" value={UserEmail} onChange={(e)=> setUserEmail(e.target.value)}/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        {/* UserPassword Input Field */}
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" value={UserPassword} onChange={(e)=> setUserPassword(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary">Login</button>

      </form>


           <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition={Bounce}
            />
    </div>
  )
}

export default Login