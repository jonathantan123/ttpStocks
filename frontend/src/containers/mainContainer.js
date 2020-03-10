import React from "react";
import Login from "../components/login";
import SignUp from "../components/signup";
import PortfolioContainer from "./portfolioContainer";
import { Route, Switch } from "react-router-dom";
import transactionsContainer from "./transactionsContainer";

class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/portfolio" component={PortfolioContainer} />
          <Route exact path="/transactions" component={transactionsContainer} />
        </Switch>
      </div>
    );
  }
}


export default MainContainer;
