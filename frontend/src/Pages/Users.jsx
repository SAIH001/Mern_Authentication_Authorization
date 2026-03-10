import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';


const Users = () => {

  const [Users, setUsers] = useState([]);

  useEffect(() => {

    const fetchDataApi = async () => {
      const ResponseData = await fetch("http://localhost:5000/getuser");

      const UserData = await ResponseData.json();

      setUsers(UserData.Data)


    }

    fetchDataApi();
  }, []);




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
                      <Link className='btn btn-sm btn-danger'>  Delete   </Link>


                    </td>
                  </tr>


                </>
              );
            })
          }









        </tbody>
      </table>

    </div>
  )
}

export default Users
