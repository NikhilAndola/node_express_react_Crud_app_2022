import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./AddEdit.css";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  age: "",
  job: "",
};

function AddEdit() {
  const [addEditData, setAddEditData] = useState(initialState);
  const { name, age, job } = addEditData;

  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    if(id){
      getSingleUser(id);
    }
  }, [id])

  const getSingleUser = async (id) => {
    const res = await axios.get(`http://localhost:8000/user/${id}`);
    // console.log(res);
    setAddEditData({...res.data[0]});
  }

  const handleInputChange = (e) => {
    setAddEditData({...addEditData, [e.target.name]: e.target.value})
  };

  const addContact = async (data) => {
    let res = await axios.post('http://localhost:8000/user', data);
    console.log(res);
    if(res.status === 200) {
      toast.success(res.data);
    }
  }

  const updateContact = async (data, id) => {
    let res = await axios.put(`http://localhost:8000/user/${id}`, data);
    console.log(res);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(!name || !age || !job) {
      toast.error("Please provide values into each input fields!");
    } else {
      if(!id) {
        addContact(addEditData);
        navigate("/");
      } else {
        updateContact(addEditData, id)
        navigate("/");
      }
    }
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleFormSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter name..."
          onChange={handleInputChange}
          value={name}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          name="age"
          placeholder="Enter age..."
          onChange={handleInputChange}
          value={age}
        />
        <label htmlFor="job">Job</label>
        <input
          id="job"
          type="text"
          name="job"
          placeholder="Enter job..."
          onChange={handleInputChange}
          value={job}
        />
        <input type="submit" value={id ? 'Update' : 'Add'}/>
      </form>
    </div>
  );
}

export default AddEdit;
