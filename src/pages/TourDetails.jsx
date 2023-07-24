import React from 'react';
import APIService from './ApiService';
import { useCookies } from 'react-cookie';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Packages from './Packages';
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';

export default function TourDetails(props) {
  function arrayAppend(index, property, value) {
    if (!usersData[index]) {
      usersData[index] = {};
    }
    usersData[index][property] = value;
  }

  const Field = ({ id }: { id: number }) => (
    <Container>
      <form onSubmit={handleSubmit}>
        <h4>Traveler {id}</h4>
        <Row>
          <Col>
            <input
              className="mb-3 p-1 traveller"
              type="text"
              id={`field${id}`}
              placeholder="First name"
              onChange={(e) => arrayAppend(id, 'first_name', e.target.value)}
            />
          </Col>
          <Col>
            <input
              className="mb-3 p-1 traveller"
              type="text"
              id={`field${id}`}
              placeholder="Last name"
              onChange={(e) => arrayAppend(id, 'sur_name', e.target.value)}
            />
          </Col>
          <Col>
            <input
              className="mb-3 p-1 traveller"
              type="text"
              id={`field${id}`}
              placeholder="Phone"
              onChange={(e) => arrayAppend(id, 'phone', e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              className="mb-3 p-1 traveller"
              type="text"
              id={`field${id}`}
              placeholder="Email"
              onChange={(e) => arrayAppend(id, 'email', e.target.value)}
            />
          </Col>
          <Col>
            <input
              className="mb-3 p-1 traveller"
              type="text"
              id={`field${id}`}
              placeholder="Passport number"
              onChange={(e) => arrayAppend(id, 'username', e.target.value)}
            />
          </Col>
          <Col></Col>
        </Row>
      </form>
    </Container>
  );

  // quantity one
  const getInitialState = () => {
    const value = 0;
    return value;
  };
  const [value, setValue] = useState(getInitialState);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  let option = [];
  let option_value = -1;

  for (let i = 0; i < article.quantity; i++) {
    option_value++;
    option.push(<option>{option_value}</option>);
  }

  // quantity two

  const getInitialState2 = () => {
    const value2 = 0;
    return value2;
  };
  const [value2, setValue2] = useState(getInitialState2);
  const handleChange2 = (e) => {
    setValue2(e.target.value);
  };

  let option2 = [];
  let option_value2 = -1;

  for (let i = 0; i < article.quantity2; i++) {
    option_value2++;
    option2.push(<option>{option_value2}</option>);
  }

  // quantity three

  const getInitialState3 = () => {
    const value3 = 1;
    return value3;
  };
  const [value3, setValue3] = useState(getInitialState3);
  const handleChange3 = (e) => {
    setValue3(e.target.value);
  };

  let option3 = [];
  let option_value3 = 0;

  for (let i = 0; i < article.quantity3; i++) {
    option_value3++;
    option3.push(<option>{option_value3}</option>);
  }

  let total_price =
    value * article.price +
    value2 * article.price_under_18 +
    value3 * article.price_over_18;
  let discount =
    (value * article.price +
      value2 * article.price_under_18 +
      value3 * article.price_over_18) /
    10;
  let sum = Number(value) + Number(value2) + Number(value3);
  return (
    <Container className="fluid">
      <div className="text-success m-3  text-center">
        Tour is offered by <b>{article.company}</b> LLC starting from{' '}
        <b>{article.startDate}</b> and ending on <b>{article.endDate}</b>
      </div>
      <Row>
        <Col sm={8} className="carousel">
          <Carousel fade className="w-100 ">
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100 slide"
                src={article.image2}
                alt="First slide"
              />
              <Carousel.Caption className="">
                <h4>Enjoy {article.tour_title}</h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100 slide"
                src={article.image3}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h4> Enjoy {article.tour_title}</h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100 slide"
                src={article.image}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h4>Enjoy {article.tour_title}</h4>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col sm={4} className="billing">
          <center>
            <h1 className="text-secondary">{article.tour_title}</h1>
          </center>
          <br />
          <Table striped bordered className="text-center">
            <thead>
              <tr>
                <td colSpan={3}>Select quantity for each age group</td>
              </tr>
              <tr>
                <th>0-3</th>
                <th>3-18</th>
                <th>over 18</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <select
                    className="w-75"
                    value={value}
                    onChange={handleChange}
                  >
                    {option}
                  </select>
                </td>
                <td>
                  <select
                    className="w-75"
                    value={value2}
                    onChange={handleChange2}
                  >
                    {option2}
                  </select>
                </td>
                <td>
                  <select
                    className="w-75"
                    value={value3}
                    onChange={handleChange3}
                  >
                    {option3}
                  </select>
                </td>
              </tr>
              <tr>
                <td>${value * article.price}</td>
                <td>${value2 * article.price_under_18}</td>
                <td>${value3 * article.price_over_18}</td>
              </tr>
            </tbody>
          </Table>

          <h6>Tour lasts for {article.duration}</h6>
          <h7>
            Inclusions:
            <li>
              Flight {article.flight ? 'is included' : ' is not included'}
            </li>
            <li>Hotel {article.hotel ? 'is included' : ' is not included'}</li>
            <li>
              Guide service {article.guide ? 'is included' : ' is not included'}
            </li>
            <li>
              Health insurance{' '}
              {article.insurance ? 'is included' : ' is not included'}
            </li>
          </h7>
          <hr />
          <p className="text-success">10% discount for four people</p>
        </Col>
      </Row>

      <br />
      <Row className="">
        <Col md="8" className="mb-4 ">
          <div className="mb-4 p-4 billing">
            <h5 className="mb-4">Tour description</h5>
            <div>{article.description}</div>
            <div>
              <h5 className="mb-4">
                {sum <= 1 ? 'Tour participant' : 'Tour participants'}
              </h5>

              {[...Array(sum)].map((value: undefined, index: number) => (
                <Field id={index + 1} key={index} />
              ))}
            </div>

            <button className="m-3 btn btn-success w-25" onClick={handleSubmit}>
              Add people
            </button>
          </div>
        </Col>

        <Col md="4" className="mb-4 total-price-col">
          <div>
            <h5 className="">Summary</h5>
            <Card.Body>
              <ListGroup flush>
                <div className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Total package price:
                  <div>${total_price}</div>
                </div>
                <br />
                <div className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  (10%) Discount :<div>${sum >= 4 ? discount : 0}</div>
                </div>
                <hr className="my-2"></hr>
                <div className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className="mb-0">(including discount)</p>
                    </strong>
                  </div>
                  <span>
                    <strong>
                      ${sum >= 4 ? total_price - discount : total_price}
                    </strong>
                  </span>
                </div>
              </ListGroup>
            </Card.Body>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
