
import { useState } from 'react';
import './styles/userlist.css'
const UserList = ({users,image}) => {
    const [show, setShow] = useState(true)
  return (
    <div className='container'>
        {users.map((user) =>( 
           <div className="card">
            <div className='text'>
          <span > {user.name} 
           {user.username} </span> 
           <br />
           <br />
           <h2>{'Email: '}{" "+user.email}</h2>
           <h2>{'Address: '}{" "+user.address.street+" "+user.address.suite}</h2>
           <h3>{user.address.city+" "+user.address.zipcode}</h3> 
           {image.map(img=> <img  className='image'
          src={img.poster}
          alt="a" />)}
          </div>
       <br />
       
          </div>
          
        ))}
       
    </div>
  );
};

export default UserList