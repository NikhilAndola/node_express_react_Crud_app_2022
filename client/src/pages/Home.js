import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import Header from '../component/header/Header';
import "./Home.css";

function Home() {

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let data = await axios.get('http://localhost:8000/users')
      let result = await data.data;
      setUsersData(data.data)
    }
    getData();
  },[])

  const handleDelete = (id) => {
    const deletePost = async () => {
      let res = await axios.delete(`http://localhost:8000/user/${id}`)
      console.log("deleted data", res)
    }
    deletePost();
  }

  return (
    <div className="home-parent">
      {/* <Header /> */}
      <div style={{marginTop: '150px'}} className="homeChild">
        <table className="styled-table">
            <thead>
              <tr>
                <th style={{textAlign: 'center'}}>No</th>
                <th style={{textAlign: 'center'}}>Name</th>
                <th style={{textAlign: 'center'}}>Age</th>
                <th style={{textAlign: 'center'}}>Job</th>
                <th style={{textAlign: 'center'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              { usersData && usersData.map( (user, index) => (
                <tr key={user.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.job}</td>
                  <td>
                    <Link to={`/update/${user.id}`}>
                      <button className='btn btn-edit'>Edit</button>
                    </Link>
                    <button className='btn btn-delete' onClick={()=> handleDelete(user.id)}>Delete</button>
                    <Link to={`/view/${user.id}`}>
                      <button className='btn btn-view'>View</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
        {/* <Outlet /> */}
    </div>
  )
}

export default Home