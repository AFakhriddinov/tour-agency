import React from 'react';
import APIService from './ApiService';
import { useCookies } from 'react-cookie';
import '../App.css';
import Card from 'react-bootstrap/Card';

export default function ArticleList(props) {
  const [token] = useCookies(['mytoken']);

  const editBtn = (article) => {
    // props.editBtn(article);
    APIService.UpdateArticle(article.id, token['mytoken'])
      .then(() => props.editBtn(article))
      .catch((error) => console.log(error));
  };

  const deleteBtn = (article) => {
    APIService.DeleteArticle(article.id, token['mytoken'])
      .then(() => props.deleteBtn(article))
      .catch((error) => console.log(error));
  };

  return (
    <div className="body">
      <div className="block">
        {props.articles &&
          props.articles.map((article) => {
            return (
              <div className="box package" key={article.id}>
                <h2>{article.tour_title} </h2>

                {/* <img alt="image added" className="insert-image" src={article.image}/> */}
                {/* <Card.Img className='img-fluid' style={{height: '8rem', width: '20rem', }} src={article.image}/> */}

                <p>
                  <b>Country:</b> {article.country}
                </p>
                <p>
                  <b>Price:</b> {article.price}{' '}
                </p>
                <p>
                  <b>Duration:</b> {article.duration}
                </p>
                <p>
                  <b>Itenirary:</b> {article.description}
                </p>
                <p>
                  <b>Status:</b>{' '}
                  {article.status == 1 ? 'To be confirmed by admin' : 'Active'}
                </p>

                <div className="row">
                  <div className="row">
                    <div className="col-md-6">
                      <button
                        className="btn btn-primary"
                        onClick={() => editBtn(article)}
                      >
                        Update
                      </button>
                    </div>

                    <div className="col-md-6">
                      <button
                        onClick={() => deleteBtn(article)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
