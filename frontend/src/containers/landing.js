import React, { useEffect, useState } from "react";
import { Divider, Grid, Segment } from "semantic-ui-react";

import { connect } from "react-redux";
import Login from "../components/login";
import SignUp from "../components/signup";

function Landing(props) {
 
  return (
    <div className="portfolio-container">
        <h3>Welome to Stocker</h3>
      <Segment>
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <h2>Login</h2>
            <Login/>
          </Grid.Column>
          <Grid.Column>
            <h2>Register</h2>
            <SignUp/>
          </Grid.Column>
        </Grid>
        <Divider vertical>OR</Divider>
      </Segment>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user_id: state.userId
  };
}

export default connect(mapStateToProps, null)(Landing);
