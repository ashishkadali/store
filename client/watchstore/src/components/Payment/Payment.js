import React, { Component } from "react";
import { Row, Button } from "react-bootstrap";
import "./Payment.scss";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Publish_key =
  "pk_test_51Mh75mSANwZbuNNhpN30tUPU3NJZ09V3ecnUgMzThhSMzQ4KpGw9nr7pBEz6m19JsvaIfz04UZQOVxbSdlUlbfhS00BA1aH8ua";

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tokenId: "",
    };
  }

  makeReq = async () => {
    try {
      const res = await axios.post("http://localhost:5001/api/strip/payment", {
        source: this.state.tokenId,
        amount: 20000,
      });
      console.log(res);
    } catch (error) {
      if (error) throw error;
      alert(error);
    }
  };

  onToken = (token) => {
    this.setState({ tokenId: token.id });
  };

  render() {
    return (
      <div className="paymentButton">
        <StripeCheckout
          currency="INR"
          name="Kadali Store"
          image="https://images.unsplash.com/photo-1673680789065-399a25d1f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
          shippingAddress
          billingAddress
          token={this.onToken}
          stripeKey={Publish_key}
        >
          <Button onClick={this.makeReq}>Payment</Button>
        </StripeCheckout>
      </div>
    );
  }
}
