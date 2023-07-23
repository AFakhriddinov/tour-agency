import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function Card({ article }) {
  return (
    <div className="block1 fluid">
      {article.status == 2 ? (
        <div className="p-2 ">
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
            <b>Offered by:</b> {article.company}
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
}

export default Card;
