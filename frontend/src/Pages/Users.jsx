import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';


const Users = () => {

  const [Users, setUsers] = useState([]);

  const [DeleteUser, setDeleteUser] = useState(null);

  const [UpdateUser, setUpdateUser] = useState(null);



  const [UserName,setUserName] = useState(null);
  const [UserEmail,setUserEmail] = useState(null);
  const [UserPassword,setUserPassword] = useState(null);


  useEffect(() => {

    const fetchDataApi = async () => {
      const ResponseData = await fetch("http://localhost:5000/getuser");

      const UserData = await ResponseData.json();

      setUsers(UserData.Data)


    }

    fetchDataApi();
  }, []);


  const DeletUserFunc = async () => {
    const Response = await fetch(`http://localhost:5000/deleteuser/${DeleteUser}`, {
      method: "DELETE"
    })


    const data = await Response.json();

    console.log(data)
    setUsers(Users.filter(user => user._id !== DeleteUser));


  }


  const UpdateUserFunc = async () => {

      console.log(UpdateUser);
  
    }



  return (
    <div className='container'>
      <h1 className='text-center mt-3'>Register Users</h1>

      <table className="table text-center">
        <thead>
          <tr className='table-dark'>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

          {
            Users.map((tempvar, key) => {
              return (
                <>
                  <tr>
                    <th scope="row">{key + 1}</th>
                    <td>{tempvar.UserName}</td>
                    <td>{tempvar.UserEmail}</td>

                    <td>
                      <Link className='btn btn-sm btn-primary' data-bs-toggle="modal" data-bs-target="#updateOperation" onClick={() => setUpdateUser(tempvar._id)}>  Update   </Link>
                      <Link className='btn btn-sm btn-danger' data-bs-toggle="modal" data-bs-target="#confirmation" onClick={() => setDeleteUser(tempvar._id)}>   Delete   </Link>
                    </td>
                  </tr>


                </>
              );
            })
          }
        </tbody>
      </table>



      {/* ==================== DELETE CONFIRMATION MODAL CODE  ====================== */}
      <div className="modal fade" id="confirmation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel" >Delete Confirmation </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Are you sure you want this user to delete ??
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={DeletUserFunc} data-bs-dismiss="modal"> Delete</button>
            </div>
          </div>
        </div>
      </div>


      {/* ==================== UPDATE CONFIRMATION MODAL CODE  ====================== */}
      <div className="modal fade" id="updateOperation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel" >Update Record </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">






              <form className="mt-3" onSubmit={UpdateUserFunc}>

                {/* UserName Input Field */}
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">User Name</label>
                  <input type="text" className="form-control"   value = {UserName}  onChange={(e)=>{ setUserName(e.target.value)  }}/>
                </div>

                {/* UserEmail Input Field */}
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                  <input type="email" className="form-control"  value = {UserEmail} onChange={(e)=> { setUserEmail(e.target.value) }}/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                {/* UserPassword Input Field */}
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" value = {UserPassword}  onChange={(e)=>{ setUserPassword(e.target.value)} } />
                </div>



                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary" data-bs-dismiss="modal"> Update</button>
                </div>




              </form>




            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Users
