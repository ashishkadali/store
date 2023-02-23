import React, { useContext, useState, useEffect } from "react";
import "./Home.scss";
import categories from "./Category";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="image__banner">
        <img
          style={{ width: "100vw", height: "100vh" }}
          src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />
      </div>

      <div>
        <h2>Welcome to E-commers website</h2>
      </div>
      <div className="offer__banner__container">
        <img
          style={{ width: "100vw", height: "100vh" }}
          src="https://res.cloudinary.com/learn-code-10/image/upload/v1654093280/xkia6f13xxlk5xvvb5ed.png"
        />{" "}
      </div>
      <div className="products_category--container ">
        <h3>Category</h3>
        <Row>
          {categories.map((element, index, array) => (
            <Link to={`/category/${element.name.toLowerCase()}`}>
              <Col md={4} key={index}>
                <div style={{ background: `URL(${element.img})`, gap: "10px" }}>
                  {element.name}
                </div>
              </Col>
            </Link>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Home;
