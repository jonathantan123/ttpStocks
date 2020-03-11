import React, { useEffect, useState } from "react";
import { Divider, Grid, Segment, Header} from "semantic-ui-react";

import { connect } from "react-redux";
import Login from "../components/login";
import SignUp from "../components/signup";
import "./landing.css";

function Landing(props) {
 
  return (
    <div className="portfolio-container">
        {/* <h3>Welome to Stocker</h3> */}

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
      {/* <Segment>
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
      </Segment> */}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user_id: state.userId
  };
}

export default connect(mapStateToProps, null)(Landing);
