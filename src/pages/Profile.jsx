import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Table from 'react-bootstrap/Table';
import APIService from './ApiService';
import ArticleList from './ArticleList';

export default function Profile() {
  const [profile, setProfile] = useState([]);
  const [token, setToken, removeToken] = useCookies(['mytoken']);
  const [group_name, setGroup_name] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(
    () => {
      fetch('http://127.0.0.1:8000/api/users/get_by_token', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token['mytoken']}`,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProfile(data.data);
        })
        .catch((resp) => console.log('error'));
    },
    fetch('http://127.0.0.1:8000/api/tours/get_articles_by_user/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token['mytoken']}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setArticles(data);
      })
      .catch((resp) => console.log('error')),

    fetch('http://127.0.0.1:8000/api/users/get_user_group/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token['mytoken']}`,
      },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setGroup_name(resp.user_group);
      })

      .catch((resp) => console.log('error')),

    []
  );

  return (
    <Container className="text-secondary w-50 " fluid>
      <h4 className="text-center">Profile details</h4>
      <Table className="w-75 m-auto">
        <tbody>
          <tr>
            <td>
              <b className="text-success"> First name: </b>
            </td>
            <td>{profile.first_name}</td>
          </tr>
          <tr>
            <td>
              <b className="text-success">Last name:</b>{' '}
            </td>
            <td>{profile.sur_name}</td>
          </tr>
          <tr>
            <td>
              <b className="text-success">Middle name:</b>
            </td>
            <td>{profile.mid_name}</td>
          </tr>
          <tr>
            <td>
              <b className="text-success">Username:</b>
            </td>
            <td>{profile.username}</td>
          </tr>
          <tr>
            <td>
              <b className="text-success">Email address:</b>
            </td>
            <td>{profile.email}</td>
          </tr>
          <tr>
            <td>
              <b className="text-success">Permanent address:</b>
            </td>
            <td>{profile.per_adr}</td>
          </tr>
          <tr>
            <td>
              <b className="text-success">Phone number:</b>
            </td>
            <td>{profile.phone}</td>
          </tr>
          <tr>
            {group_name == 'agent' ? (
              <>
                <td>
                  <b className="text-success">Company name:</b>
                </td>
                <td>{profile.company}</td>
              </>
            ) : (
              ''
            )}
          </tr>
          <tr>
            <td>
              <b className="text-success">User type:</b>
            </td>
            <td>{group_name == 'agent' ? 'Agent user' : 'Client user'}</td>
          </tr>
          <tr>
            {group_name == 'agent' ? (
              <>
                <td>
                  <b className="text-success">Number of packages created</b>
                </td>
                <td>{articles.length}</td>
              </>
            ) : (
              <>
                <td>
                  <b className="text-success">Number of packages bought</b>
                </td>
                <td>nothing bought yet</td>
              </>
            )}
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

// import { useState } from "react";

// function Profile() {

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [emailAddress, setEmailAddress] = useState("");

//   let handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let res = await fetch("http://127.0.0.1:8000/api/customers/", {
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//           },
//         body: JSON.stringify({
//           firstName: firstName,
//           lastName: lastName,
//           phoneNumber: phoneNumber,
//           emailAddress: emailAddress,
//         }),
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={firstName}
//           placeholder="Name"
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//         <input
//           type="text"
//           value={lastName}
//           placeholder="lastname"
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <input
//           type="text"
//           value={phoneNumber}
//           placeholder="phone"
//           onChange={(e) => setPhoneNumber(e.target.value)}
//         />
//         <input
//           type="text"
//           value={emailAddress}
//           placeholder="email"
//           onChange={(e) => setEmailAddress(e.target.value)}
//         />

//         <button type="submit">Create</button>

//       </form>
//     </div>
//   );
// }

// export default Profile;
