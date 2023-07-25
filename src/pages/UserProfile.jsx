import React from "react";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";


export default function EditableUserProfile({ stored, startEditCallback }) {

  const [profile, setProfile] = useState([]);
  const [token, setToken, removeToken] = useCookies(["mytoken"]);

  
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/users/get_by_token", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token["mytoken"]}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProfile(data.data);
      })
      .catch((resp) => console.log("error"));
  }, []);


  return (
    <div>
      <h5>First name:  </h5> {stored.firstName}
      <h5>Last name: {stored.lastName}</h5> 
      <button onClick={startEditCallback}>Edit</button>
    </div>
  );
}
