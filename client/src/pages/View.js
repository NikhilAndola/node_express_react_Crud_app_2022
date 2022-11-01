import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import "./View.css";

function View() { 
  const [users, setUsers] = useState(null);
  console.log("🚀 ~ file: View.js ~ line 8 ~ View ~ users", users)

  const {id} = useParams();

  useEffect(() => {
    if(id){
      getSingleUser(id);
    }
  }, [id])

    const getSingleUser = async (id) => {
    const res = await axios.get(`http://localhost:8000/user/${id}`);
    // console.log(res);
    setUsers(res.data);
  }

  return (
    <div style={{marginTop: '150px'}} className="homeChild">
          <table className="styled-table">
            <thead>
              <tr>
                <th style={{textAlign: 'center'}}>Name</th>
                <th style={{textAlign: 'center'}}>Age</th>
                <th style={{textAlign: 'center'}}>Job</th>
              </tr>
            </thead>
            <tbody>
      {users?.map((user) => (
            <tr key={user.id}>
                <th>{user.name}</th>
                <th>{user.age}</th>
                <th>{user.job}</th>
              </tr>
            ))}
            </tbody>
          </table>
    </div>
  )
}

export default View