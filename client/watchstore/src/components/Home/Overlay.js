import React, { Component } from "react";
import "./Home.scss";

export default class Overlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlaystatus: props.open,
    };
  }
  render() {
    return (
      <>
        {this.state.overlaystatus ? (
          <div className="overlayapperance">
            <button> Logout</button>
          </div>
        ) : null}
      </>
    );
  }
}
