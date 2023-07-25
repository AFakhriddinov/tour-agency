import React from 'react';
import { useState, useEffect } from 'react';
import APIService from './ApiService';
import '../App.css';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function AgentSignUp() {
  const [first_name, setFirst_Name] = useState('');
  const [sur_name, setSur_Name] = useState('');
  const [mid_name, setMid_Name] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [passport, setPassport] = useState('');
  const [per_adr, setPer_adr] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [token, setToken] = useCookies(['mytoken']);
  let navigate = useNavigate();

  useEffect(() => {
    if (token['mytoken']) {
      navigate('/');
    }
  }, [token]);

  const registerBtn = () => {
    let groups = 'agent';
    APIService.RegisterUser({
      first_name,
      sur_name,
      mid_name,
      username,
      email,
      phone,
      per_adr,
      company,
      password,
      groups,
    })
      .then((resp) => setToken('mytoken', resp.token))
      .catch((resp) => console.log('error'));
  };
  return (
    <div>
      <h1 className="register-header">Please register</h1>
      <br />
      <br />
      <Container fluid>
        <Row className="mb-3 w-50 m-auto">
          <Col>
            <label htmlFor="first_name" className="form-label">
              First Name
            </label>
            <input
              value={first_name}
              onChange={(e) => setFirst_Name(e.target.value)}
              type="text"
              className="form-control"
              id="first_name"
              placeholder="First name"
            />
            <br />
            <label htmlFor="mid_name" className="form-label">
              Middle Name
            </label>
            <input
              required
              value={mid_name}
              onChange={(e) => setMid_Name(e.target.value)}
              type="text"
              className="form-control"
              id="mid_name"
              placeholder="Middle name"
            />
            <br />
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="email"
              placeholder="aaaa@mail.ru"
            />
            <br />
            <label htmlFor="per_adr" className="form-label">
              Permanent address
            </label>
            <input
              value={per_adr}
              onChange={(e) => setPer_adr(e.target.value)}
              type="text"
              className="form-control"
              id="per_adr"
              placeholder="Please enter address"
            />
            <br />
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Please enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button
              disabled={
                !first_name ||
                !sur_name ||
                !mid_name ||
                !username ||
                !email ||
                !phone ||
                !per_adr ||
                !company ||
                !password ||
                password != password2
              }
              onClick={registerBtn}
              className="btn btn-success"
            >
              Register
            </button>
          </Col>
          <Col>
            <label htmlFor="sur_name" className="form-label">
              Last Name
            </label>
            <input
              required
              value={sur_name}
              onChange={(e) => setSur_Name(e.target.value)}
              type="text"
              className="form-control"
              id="sur_name"
              placeholder="Surname"
            />
            <br />
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Please enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              className="form-control"
              id="phone"
              placeholder="+998901234567"
            />
            <br />
            <label htmlFor="company" className="form-label">
              Company name
            </label>
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              type="text"
              className="form-control"
              id="company"
              placeholder="Please enter your company name"
            />
            <br />
            <label htmlFor="Password confirmation" className="form-label">
              {' '}
              Confirm password
            </label>
            <input
              type="password"
              className="form-control"
              id="password2"
              placeholder="Please confirm password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
