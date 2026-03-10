import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';


const Users = () => {

  const [Users, setUsers] = useState([]);

  const [DeleteUser, setDeleteUser] = useState(null);


  useEffect(() => {

    const fetchDataApi = async () => {
      const ResponseData = await fetch("http://localhost:5000/getuser");

      const UserData = await ResponseData.json();

      setUsers(UserData.Data)


    }

    fetchDataApi();
  }, []);


  const DeletUserFunc=()=>{
    console.log(DeleteUser)
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
                    <th scope="row">{key+1}</th>
                    <td>{tempvar.UserName}</td>
                    <td>{tempvar.UserEmail}</td>
              
                    <td>

                      <Link className='btn btn-sm btn-primary'>  Update   </Link>
                      <Link className='btn btn-sm btn-danger' data-bs-toggle="modal" data-bs-target="#confirmation"  onClick={()=> setDeleteUser(tempvar._id)}>   Delete   </Link>


                    </td>
                  </tr>


                </>
              );
            })
          }









        </tbody>
      </table>



 {/* ==================== MODAL CODE  ====================== */}
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



    </div>
  )
}

export default Users
