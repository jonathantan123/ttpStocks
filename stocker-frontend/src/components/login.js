import React, { useEffect, useState } from "react";
import { Form, Input, Grid } from "semantic-ui-react";
import "./login.css";

function Login() {
  const [credentials, setCredentials] = useState({
    email_address: "",
    password: ""
  });

  // on submit fetch and find/set the id of the current user to redux

  let url = `http://localhost:3000/login`

    let submitHandler = (e) => {
      e.preventDefault();

      fetch(`${url}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          credentials 
        )
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.errors) {
            alert("Incorrect Username/password");
          } else {
            console.log("success")
            // this.props.login(parseInt(data.data.id));
          }
        });
    };

  return (
    <div className="login-container">
      <div className="login-form">
        <h3>Sign In</h3>
        <Form onSubmit={submitHandler}>
          <Form.Field
            id="username"
            control={Input}
            onChange={e =>
              setCredentials({ ...credentials, email_address: e.target.value })
            }
            label="Email Address"
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
              <Form.Button>Log In </Form.Button>
            </Grid.Row>
          </Grid>
        </Form>
      </div>
    </div>
  );
}

// function mapDispatchToProps(dispatch) {
//   return {
//     login: id => {
//       dispatch({ type: "LOGIN", payload: id });
//     }
//   };
// }

// function mapStateToProps(state) {
//   return {
//     user_id: state.user_id
//   };
// }
export default Login;
// export default connect(mapStateToProps, mapDispatchToProps)(Login);
