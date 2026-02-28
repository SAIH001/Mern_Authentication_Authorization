import React from 'react'

import auth from '../Images/auth.png';

const Home = () => {
  return (
    <>
    <div className="container-fluid text-center">
      <img className='img-fluid' src={auth} alt=""  />
    </div>
    <div className='container mt-3'>
      <h1 className='mt-2'>Authentication & Authorization</h1>
      
      <p>
        In the world of web applications and digital security, two concepts are essential for protecting user data and controlling access: <strong>Authentication</strong> and <strong>Authorization</strong>.
      </p>

      <h2>1. Authentication</h2>
      <p>
        Authentication is the process of verifying the identity of a user. Think of it as the system asking, "Who are you?" Common methods include:
      </p>
      <ul>
        <li>Username and Password</li>
        <li>Two-Factor Authentication (2FA)</li>
        <li>Biometric verification (fingerprint or face recognition)</li>
      </ul>
      <p>
        In short, authentication confirms <strong>identity</strong>.
      </p>

      <h2>2. Authorization</h2>
      <p>
        Authorization determines what an authenticated user is allowed to do. After confirming your identity, the system asks, "What can you access?" Examples include:
      </p>
      <ul>
        <li>Access to admin panels or restricted pages</li>
        <li>Editing or deleting data</li>
        <li>Downloading or uploading files</li>
      </ul>
      <p>
        Authorization ensures <strong>permissions</strong> are correctly enforced.
      </p>

      <h2>Key Differences</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px", textAlign:"center" }}>
        <thead style={{ textAlign:"center" , backgroundColor:"black", color:'white'}}>
          <tr style={{ borderBottom: "1px solid #ccc" }}>
            <th style={{  padding: "8px" }}>Aspect</th>
            <th style={{ padding: "8px" }}>Authentication</th>
            <th style={{  padding: "8px" }}>Authorization</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "8px" }}>Purpose</td>
            <td style={{ padding: "8px" }}>Verify identity</td>
            <td style={{ padding: "8px" }}>Determine access level</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "8px" }}>Question</td>
            <td style={{ padding: "8px" }}>"Who are you?"</td>
            <td style={{ padding: "8px" }}>"What can you do?"</td>
          </tr>
          <tr>
            <td style={{ padding: "8px" }}>Timing</td>
            <td style={{ padding: "8px" }}>Before authorization</td>
            <td style={{ padding: "8px" }}>After authentication</td>
          </tr>
        </tbody>
      </table>

      <p style={{ marginTop: "15px" }}>
        In summary, both authentication and authorization work together to ensure that your application is secure and users only access what they are allowed to.
      </p>
    </div>

    </>
  )
}

export default Home