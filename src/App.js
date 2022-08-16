import './App.css';
import UserList from './UserList';
import { useEffect, useState } from 'react';
import axios from 'axios'


function App() {
  const [users, setUsers] = useState([]);
  const image = [
    { 
  poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWt-0JY6auHz0IDZRQhJptP_3anSqmEOu-A&usqp=CAU"     
},
{  poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvWdGDFYIj84vIgtreKfBrAc28TSrkBhRsnw&usqp=CAU"     
}

  ]
  
  useEffect(() => {
    try
  {  axios.get("https://jsonplaceholder.typicode.com/users").then(
      (res) => {
        console.log(res);
        setUsers(res.data)
      });}
  catch (error) {
    console.log(error)}},
     []);
  console.log(users);
  return (
    < >
      <div>
        
        <UserList users={users} image={image}  />
        
      </div>

    </>
  );
}
export default App;
