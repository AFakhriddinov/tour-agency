import React, { useState, useEffect } from 'react';
import APIService from './ApiService';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Form(props) {
  const [tour_title, setTour_title] = useState('this is tour');
  const [image, setImage] = useState('');
  const [country, setCountry] = useState('');
  const [price, setPrice] = useState('');
  const [price_under_18, setPrice_under_18] = useState('');
  const [price_over_18, setPrice_over_18] = useState('');
  let [quantity, setQuantity] = useState('');
  let [quantity2, setQuantity2] = useState('');
  let [quantity3, setQuantity3] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [token, setToken] = useCookies(['mytoken']);
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  let [flight, setFlight] = useState(false);
  let [hotel, setHotel] = useState(false);
  let [guide, setGuide] = useState(false);
  let [insurance, setInsurance] = useState(false);
  let [company, setCompany] = useState('');
  let [startDate, setStartDate] = useState();
  let [endDate, setEndDate] = useState();

  // useEffect(() => {
  //   setTour_title(props.article.tour_title);
  //   setImage(props.article.image);
  //   setImage2(props.article.image2);
  //   setImage3(props.article.image3);
  //   setCountry(props.article.country);
  //   setPrice(props.article.price);
  //   setDuration(props.article.duration);
  //   setFlight(props.article.flight);
  //   setHotel(props.article.hotel);
  //   setGuide(props.article.guide);
  //   setInsurance(props.article.insurance);
  //   setDescription(props.article.description);
  // }, [props.article]);

  const updateArticle = () => {
    APIService.UpdateArticle(
      props.article.id,
      {
        tour_title,
        image,
        image2,
        image3,
        country,
        price,
        price_under_18,
        price_over_18,
        quantity,
        quantity2,
        quantity3,
        duration,
        flight,
        hotel,
        guide,
        insurance,
        description,
        company,
        startDate,
        endDate,
      },
      token['mytoken']
    ).then((resp) => props.updatedInformation(resp));
  };

  const insertArticle = () => {
    let body = new FormData();
    body.append('image', image);
    body.append('image2', image2);
    body.append('image3', image3);
    body.append('tour_title', tour_title);
    body.append('country', country);
    body.append('price', price);
    body.append('price_under_18', price_under_18);
    body.append('price_over_18', price_over_18);
    body.append('quantity', quantity);
    body.append('quantity2', quantity2);
    body.append('quantity3', quantity3);
    body.append('duration', duration);
    body.append('flight', flight);
    body.append('hotel', hotel);
    body.append('guide', guide);
    body.append('insurance', insurance);
    body.append('description', description);
    body.append('company', company);
    body.append('startDate', startDate);
    body.append('endDate', endDate);
    APIService.InsertArticle(body, token['mytoken']).then((resp) =>
      props.insertedInformation(resp)
    );
  };

  return (
    <div className="w-25 m-auto">
      {props.article ? (
        <div className="mb-3">
          <label htmlFor="tour_title" className="form-label">
            Tour title
          </label>
          <input
            type="text"
            className="form-control"
            id="tour_title"
            placeholder="Please enter the tour title"
            onChange={(e) => setTour_title(e.target.value)}
          />
          <label htmlFor="image" className="form-label">
            Tour image
          </label>
          <input
            type="file"
            className="form-control"
            name="image"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          />{' '}
          <br />
          <label htmlFor="image2" className="form-label">
            Second image
          </label>
          <input
            type="file"
            className="form-control"
            name="image2"
            id="image2"
            onChange={(e) => setImage2(e.target.files[0])}
          />{' '}
          <br />
          <label htmlFor="image3" className="form-label">
            Third image
          </label>
          <input
            type="file"
            className="form-control"
            name="image3"
            id="image3"
            onChange={(e) => setImage3(e.target.files[0])}
          />{' '}
          <br />
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <input
            type="text"
            className="form-control"
            id="country"
            onChange={(e) => setCountry(e.target.value)}
          />
          <br />
          <label htmlFor="prices" className="form-label">
            Prices for different age groups
          </label>
          <Row>
            <Col>
              <input
                type="number"
                className="form-control"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="under 3"
              />
            </Col>
            <Col>
              <input
                type="number"
                className="form-control"
                id="price_under_18"
                onChange={(e) => setPrice_under_18(e.target.value)}
                placeholder="3-18"
              />
            </Col>
            <Col>
              <input
                type="number"
                className="form-control"
                id="price_over_18"
                onChange={(e) => setPrice_over_18(e.target.value)}
                placeholder="Over 18"
              />
            </Col>
          </Row>
          <label htmlFor="prices" className="form-label">
            Quantity for different age groups
          </label>
          <Row>
            <Col>
              <input
                type="number"
                className="form-control"
                id="quantity"
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="under 3"
              />
            </Col>
            <Col>
              <input
                type="number"
                className="form-control"
                id="quantity2"
                onChange={(e) => setQuantity2(e.target.value)}
                placeholder="3-18"
              />
            </Col>
            <Col>
              <input
                type="number"
                className="form-control"
                id="quantity3"
                onChange={(e) => setQuantity3(e.target.value)}
                placeholder="Over 18"
              />
            </Col>
          </Row>
          <br />
          {/* <label className="m-1 form-label" htmlFor="quantity">Quantity</label>
          <input className="form-control" onChange={(e) => setQuantity(e.target.value)} type="number" id="quantity" name="quantity"  /> */}
          <label htmlFor="duration" className="form-label">
            Duration
          </label>
          <input
            type="text"
            className="form-control"
            id="duration"
            onChange={(e) => setDuration(e.target.value)}
          />
          <p>
            <b>Are the following included in the package?</b>
          </p>
          <input
            onChange={(e) => setFlight(e.target.checked)}
            type="checkbox"
            id="flight"
            name="flight"
          />
          <label className="m-1" htmlFor="flight">
            {' '}
            Flight
          </label>
          <input
            onChange={(e) => setHotel(e.target.checked)}
            type="checkbox"
            id="hotel"
            name="hotel"
          />
          <label className="m-1 " htmlFor="hotel">
            {' '}
            Hotel
          </label>
          <input
            onChange={(e) => setGuide(e.target.checked)}
            type="checkbox"
            id="guide"
            name="guide"
          />
          <label className="m-1" htmlFor="guide">
            Guide
          </label>
          <input
            onChange={(e) => setInsurance(e.target.checked)}
            type="checkbox"
            id="insurance"
            name="insurance"
          />
          <label className="m-1" htmlFor="insurance">
            Insurance
          </label>
          <br />
          <br />
          <label className="m-1 form-label" htmlFor="company">
            Your company name
          </label>
          <input
            className="form-control"
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            id="company"
            name="company"
          />
          <label className="m-1 form-label" htmlFor="startDate">
            Start date of tour
          </label>
          <input
            className="form-control"
            onChange={(e) => setStartDate(e.target.value)}
            type="date"
            id="startDate"
            name="startDate"
          />
          <br />
          <label className="m-1 form-label" htmlFor="endDate">
            End date of tour
          </label>
          <input
            className="form-control"
            onChange={(e) => setEndDate(e.target.value)}
            type="date"
            id="endDate"
            name="endDate"
          />
          <br />
          <label htmlFor="description" className="form-label m-1">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="5"
            // value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <br />
          {props.article.id ? (
            <button onClick={updateArticle} className="btn btn-success">
              Update article
            </button>
          ) : (
            <button
              onClick={insertArticle}
              className="btn btn-success"
              // disabled={!tour_title || !country || !price || !duration || !description}
            >
              Insert article
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
}
