import React from "react";
import Login from "../components/login";
import SignUp from "../components/signup";
import PortfolioContainer from "./portfolioContainer";
import { Route, Switch, Redirect } from "react-router-dom";
import transactionsContainer from "./transactionsContainer";
import landing from "./landing";
import { connect } from "react-redux";

function MainContainer(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={landing} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
  
        {props.user_id !== 0 ? (
          <React.Fragment>
            <Route exact path="/portfolio" component={PortfolioContainer} />
            <Route
              exact
              path="/transactions"
              component={transactionsContainer}
            />
          </React.Fragment>
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user_id: state.userId,
    balance: state.balance
  };
}

export default connect(mapStateToProps)(MainContainer);
