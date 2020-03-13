import React, { useState } from "react";
import { Form, Input, Grid } from "semantic-ui-react";
import "./signup.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function SignUp(props) {
  const [credentials, setCredentials] = useState({
    name: "",
    password: "",
    email_address: ""
  });

  let history = useHistory();


  let submitHandler = e => {
    e.preventDefault();

    fetch(`https://ttp-stocker-api.herokuapp.com/api/v1/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.errors) {
          alert(data.errors[0]);
        } else {
          props.login(data);
          history.push("/portfolio");
        }
      });
  };

  return (
    <div className="signup-container">
        <div  className= "signupImage-container"></div>
      <div className="signup-form">
    
        <h3>Register</h3>
        <Form onSubmit={submitHandler}>
          <Form.Field
            id="name"
            control={Input}
            onChange={e =>
              setCredentials({ ...credentials, name: e.target.value })
            }
            label="Name"
            placeholder="Name"
          />
          <Form.Field
            id="email"
            control={Input}
            onChange={e =>
              setCredentials({ ...credentials, email_address: e.target.value })
            }
            label="email address"
            placeholder="Email Address"
          />
          <Form.Field
            id="password"
            control={Input}
            onChange={e =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            label="Password"
            type="password"
            placeholder="Password"
          />

          <Grid>
            <Grid.Row centered>
              <Form.Button>Sign Up </Form.Button>
            </Grid.Row>
          </Grid>
        </Form>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    login: data => {
      dispatch({ type: "LOGIN", payload: data });
    }
  };
}

export default connect(null, mapDispatchToProps)(SignUp);
