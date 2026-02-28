import React, { useState } from 'react'

import { ToastContainer, toast, Bounce } from 'react-toastify';


const Registration = () => {

  const [UserName, setUserName] = useState('');
  const [UserEmail, setUserEmail] = useState('');
  const [UserPassword, setUserPassword] = useState('');


  const handle_UserRegistration = async (e) => {
    e.preventDefault();


 if(!UserName || !UserEmail || !UserPassword){
         toast.error("Kindly fill the fields Correctly !!")  
    }else{

   

    const Response_UserRegist = await fetch("http://localhost:5000/registeruser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        UserName,
        UserEmail,
        UserPassword
      })
    })

    const Response_Data = await Response_UserRegist.json();

     if(Response_UserRegist.status == 400){
      toast.error(Response_Data.error)
     }else if(Response_UserRegist.status == 200){
       toast.success(Response_Data.message)
      }else{
        toast.error("Kuch chal hi nh raha")
      }

     }

  }

  return (
    <div className="container">
      <h1 className='text-center mt-4'> User Registration</h1>
      <form className="mt-3" onSubmit={handle_UserRegistration}>

        {/* UserName Input Field */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">User Name</label>
          <input type="text" className="form-control" value={UserName} onChange={(e) => setUserName(e.target.value)} />
        </div>

        {/* UserEmail Input Field */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
          <input type="email" className="form-control" value={UserEmail} onChange={(e) => setUserEmail(e.target.value)} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        {/* UserPassword Input Field */}
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" value={UserPassword} onChange={(e) => setUserPassword(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary">Register</button>

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

export default Registration