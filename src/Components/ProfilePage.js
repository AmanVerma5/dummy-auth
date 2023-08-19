import React, { useState,useEffect } from "react";


const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const id = localStorage.getItem("id");
  

  useEffect(() => {
    const fetchuser = async () => {
      const response = await fetch(`https://dummyjson.com/users/${id}`);
      const data = await response.json();
      console.log(data);
      setUser(data);
    };
    fetchuser();
  }, [id]);

  function logOut(){
    localStorage.removeItem('id');
    window.location.reload();
  }
  
  return <div className="profile-container">
    <h1>{user?.firstName} {user?.lastName}</h1>
    <img src={user?.image} alt="user profile"/>
      <p><span>Email:</span> {user?.email}</p>
      <p><span>Phone:</span> {user?.phone}</p>
      <p><span>Username:</span> {user?.username}</p>
      <p><span>BirthDate:</span> {user?.birthDate}</p>
      <p><span>Address:</span> {user?.address?.address}, {user?.address?.city}, {user?.address?.state}, {user?.address?.postalCode}</p>
      <p><span>Company:</span> {user?.company?.name}</p>
      <p><span>Department:</span> {user?.company?.department}</p>
      <p><span>Title:</span> {user?.company?.title}</p>
      <button className="log-out" onClick={logOut}>Log Out</button>
  </div>;
};
// optional chaining
export default ProfilePage;