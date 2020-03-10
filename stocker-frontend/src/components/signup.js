import React, { useEffect, useState } from "react";
import { Form, Input, Grid } from "semantic-ui-react";
import "./login.css";

function SignUp() {
  const [credentials, setCredentials] = useState({
    name: "",
    password: "", 
    email_address: ""
  });

  // on submit fetch and find/set the id of the current user to redux

    let submitHandler = (e) => {
      e.preventDefault();

      fetch(`http://localhost:3001/api/v1/users`, {
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then((data) => {
             
            if(data.errors) {
                alert(data.errors[0])
            } else {
               console.log("suceess")
            }
        })

      
     
    };

  return (
    <div className="login-container">
      <div className="login-form">
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
export default SignUp;
// export default connect(mapStateToProps, mapDispatchToProps)(Login);
