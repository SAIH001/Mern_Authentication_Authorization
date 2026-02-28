import React, { useState } from 'react'

const Registration = () => {

  const [UserName, setUserName] = useState('');
  const [UserEmail, setUserEmail] = useState('');
  const [UserPassword, setUserPassword] = useState('');


  const handle_UserRegistration = async(e) =>{
    e.preventDefault();
    console.log(UserName);
    console.log(UserEmail);
    console.log(UserPassword);
  }

  return (
    <div className="container">
      <h1 className='text-center mt-4'> User Registration</h1>
      <form className="mt-3" onSubmit={handle_UserRegistration}>

        {/* UserName Input Field */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">User Name</label>
          <input type="text" className="form-control" value={UserName} onChange={(e)=> setUserName(e.target.value)} />
        </div>

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

        <button type="submit" className="btn btn-primary">Register</button>

      </form>
    </div>
  )
}

export default Registration