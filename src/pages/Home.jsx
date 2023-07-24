import React from 'react';
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

function Home() {
  const [articles, setArticles] = useState([]);

  return (
    <div>
      <div className="main">
        <img alt="fdfd" className="img-fluid shadow-4" src="images/main1.jpg" />
      </div>

      <Container className="">
        <Search details={articles} />
      </Container>
    </div>
  );
}

export default Home;
