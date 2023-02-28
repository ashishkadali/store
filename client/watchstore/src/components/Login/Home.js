import React, { useContext, useState, useEffect } from "react";
import "./Home.scss";
import categories from "./Category";
import { Row, Col, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="image__banner">
        <img
          style={{ width: "100%", height: "100%" }}
          src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />
      </div>

      <div>
        <h2>Welcome to E-commers website</h2>
      </div>
      <div className="offer__banner__container">
        <img
          style={{ width: "100%", height: "100%" }}
          src="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        />{" "}
      </div>
      <div>
        <h3>Category</h3>

        <div className="categoryTittle">
          {categories.map((element, index) => {
            return (
              // <Link to={`/category/${element.name.toLowerCase()}`}>
              <Col
                key={index}
                style={{ backgroundImage: `url(${element.img})` }}
                className="catergoryImage"
              >
                {element.name}
              </Col>
              // </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
