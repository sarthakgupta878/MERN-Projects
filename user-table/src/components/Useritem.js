import React from 'react'

const Useritem = (props) => {
    let {name,username,email,phone,website}=props;
  return (
    <tr>
    <th scope="row">{name}</th>
    <td>{username}</td>
    <td>{email}</td>
    <td>{phone}</td>
    <td>{website}</td>
    <td>
        <button className="btn btn-primary">Add</button>
        <button className="btn btn-primary">Delete</button>
    </td>
  </tr>
  )
}

export default Useritem