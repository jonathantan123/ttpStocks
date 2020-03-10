import React from "react";
import Login from "../components/login";
import SignUp from "../components/signup";

class MainContainer extends React.Component {
  render() {
    return (
        <div>
            <Login/>
            <SignUp/>
        </div>
    )
  }
}

export default MainContainer;
