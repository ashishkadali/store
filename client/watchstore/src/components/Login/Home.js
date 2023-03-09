import React, { useContext, useState, useEffect } from "react";
import "./Home.scss";
import categories from "./Category";
import { Row, Col, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      {/* {/* <h3>Category</h3>
      
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
      </div> */}
    </div>
  );
}

export default Home;
