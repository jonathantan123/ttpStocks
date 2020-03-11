import React from "react";
import { Header } from "semantic-ui-react";

import { connect } from "react-redux";

import "./landing.css";

function Landing(props) {
  return (
    <div className="portfolio-container">
      <div className="landing-container">
        <div className="welcome-text">
          <Header style={{ color: "white" }} as="h1">
            The Stock Market is confusing.
          </Header>

          <Header style={{ color: "white" }} as="h1">
            Let Stocker Help
          </Header>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user_id: state.userId
  };
}

export default connect(mapStateToProps, null)(Landing);
