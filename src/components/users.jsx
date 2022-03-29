import React, { useState } from "react"
import api from "../api"

export const Users=()=>{
    const [users, setUsers] = useState(api.users.fetchAll())

    const handleDelete = (userId)=>{
    setUsers(prevState=>prevState.filter(users=>users._id!==userId))} 

    const renderPhrase = ()=>{
        let phrase = <div className="badge bg-primary m-2">{`${users.length} человек тусанет с тобой сегодня`}</div>
        if(users.length > 1 && users.length < 5){
            phrase = <div className="badge bg-primary m-2">{`${users.length} человека тусанут с тобой сегодня`}</div>
        }
        return phrase
    }
    if(users.length <= 0){
       return <div className="badge bg-danger m-2">Никто с тобой не тусанет</div>
    }
    return (
        <>
    {renderPhrase()}
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Имя</th>
      <th scope="col">Качества</th>
      <th scope="col">Профессия</th>
      <th scope="col">Встретился, раз</th>
      <th scope="col">Оценка</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
   {users.map((user)=>(
   <tr key={user._id}>
   <th>{user.name}</th>
   <th>{user.qualities.map((item) => (
     <span className={'badge m-1 bg-' + item.color} key={item._id}>{item.name}</span>))} </th>
   <th>{user.profession.name}</th>
   <th>{user.completedMeetings}</th>
   <th>{user.rate}</th>
   <th><button className="btn btn-danger btn-sm m-2" onClick={()=>handleDelete(user._id)}>Delete</button></th>
   </tr>
    ))} 
  </tbody>
  </table>
    </>
    )
}