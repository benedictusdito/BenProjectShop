import React, { Component } from "react";
import Display from "./Display";
import Setting from "./Setting";

class ShowSetting extends Component {
  state = {
    tshirtColor: "black",
    upperText: "This is Upper Text",
    lowerText: " This is Lower Text",
    memeImg: ""
  };
  handleTshirtColor = e => {
    this.setState({ tshirtColor: e.target.id });
  };

  handleUpperText = e => {
    this.setState({ upperText: e.target.value });
  };
  handleLowerText = e => {
    this.setState({ lowerText: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <Display display={this.state} />
            </div>
            <div className="col-lg-4">
              <Setting
                color={this.handleTshirtColor}
                upperText={this.handleUpperText}
                lowerText={this.handleLowerText}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowSetting;
