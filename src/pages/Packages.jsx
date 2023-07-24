import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import SearchList from './SearchList';
import Card from './Card';

export default function Packages() {
  return (
    <Container className="block fluid">
      {articles &&
        articles.map((article) => {
          return (
            <div>
              {article.status == 2 ? (
                <div className="m-2  p-3 active-article" key={article.id}>
                  <h2>{article.tour_title} </h2>
                  <img
                    className="img-fluid"
                    style={{ height: '8rem', width: '20rem' }}
                    src={article.image}
                  />
                  <p>
                    <b>Country:</b> {article.country}
                  </p>
                  <p>
                    <b>Price :</b> {article.price} USD
                  </p>
                  <p>
                    <b>Duration:</b> {article.duration}
                  </p>
                  <p>
                    <b>Company:</b> {article.company}
                  </p>
                  <Link
                    style={{ 'text-decoration': 'none' }}
                    to={{
                      pathname: `tour-details/${article.id}`,
                      state: { articleId: article.id },
                    }}
                  >
                    Buy now
                  </Link>
                </div>
              ) : null}
            </div>
          );
        })}
    </Container>
  );
}
