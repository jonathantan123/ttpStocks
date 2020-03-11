import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { connect } from "react-redux";

function Navbar(props) {
  return (
    <Menu secondary size="large">
      <Menu.Item as={Link} name="Stocker" to="/"></Menu.Item>

      <Menu.Menu position="right">
        {props.user_id !== 0 ? (
          <React.Fragment>
            <Menu.Item as={Link} name="Portfolio" to="/portfolio"></Menu.Item>
            <Menu.Item as={Link} name="Transactions" to="/transactions" />
            <Menu.Item as={Link} name="logout" to="/" onClick={props.logout} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Menu.Item as={Link} name="Login" to="/login"></Menu.Item>
            <Menu.Item as={Link} name="Register" to="/signup"></Menu.Item>
          </React.Fragment>
        )}
      </Menu.Menu>
    </Menu>
  );
}

function mapStateToProps(state) {
  return {
    user_id: state.userId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch({ type: "LOGOUT" });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
