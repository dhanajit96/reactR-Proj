import React from 'react'
import { useEffect, useState } from 'react';
import './User.css'

function Users() {

  let [usersData1, setusersData1] = useState([]);
  
    //)
   
  

  useEffect(() => {
    let fetchData = (async () => {
      let response = await fetch('https://api.github.com/users')
      console.log(response);
      let data = await response.json();
      console.log(data)
      setusersData1(data);
    })
    fetchData();
  },[])
  let handleDelete = (id) => {
    setusersData1(usersData1.filter(x=>x.id != id))
  }

  // let usersData = props.data;
  // let handleDelete1 = props.fn
  // let title1 = props.title
  return (

    <div className='newFavourites'>
      <h1>Users Name and Details</h1>
      {usersData1.map((data) => (
        <div className="d-flex justify-content-around my-3">
          <img className="fav" src={data.avatar_url} alt="" />
          <h2>{data.login}</h2>
          <button type="button" className="newbutton btn btn-primary btn-lg" onClick={() => handleDelete(data.id)}>Delete</button>
        </div>
          
      ))
      }
</div>
    

  )
}
export default Users;