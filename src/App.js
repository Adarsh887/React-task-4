
import './App.css';
import { useState, useEffect } from 'react';
//import { json } from 'stream-consumers';
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import { arrayBuffer, blob, json, text } from '../node_modules/stream-consumers';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function App() {
  const myStyle ={
    width: "75px",
    radius: "5px"
  }
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://dummyjson.com/users")
    .then(res => setData(res.data.users))
    .catch(err =>console.log(err))
    },[]);

  const dataArray = Array.from(data);
  console.log(dataArray);

  return (
    <div className='container bg-dark'>
        <div className='mt-3'>
            <h1 className='text-center text-light'>Dummy data</h1>
            <table className='table table-dark table-striped'>
            <thead>
  <tr>
    <th>Sno</th>
    <th>Profile pic</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Gender</th>
    <th>E-mail</th>
    <th>Username</th>
    <th>Domain</th>
    <th>IP</th>
    <th>University</th>
  </tr>
</thead>
<tbody>
  {
    dataArray.map((user, index) => {
      return <tr key={index}>
        <td>{user.id}</td>
        <td><img style={myStyle} src={user.image} /></td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.gender}</td>
        <td>{user.email}</td>
        <td>{user.username}</td>
        <td>{user.domain}</td>
        <td>{user.ip}</td>
        <td>{user.university}</td>
      </tr>
    })
  }
</tbody>
            </table>
        </div>
    </div>
  )
}

export default App;
