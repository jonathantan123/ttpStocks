import React, { useState } from "react";
import { Form, Input, Grid, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./purchase.css";



function PurchaseForm(props) {
  const [transactionInfo, setTransactionInfo] = useState({
    ticker: "",
    quantity: ""
  });

  let user_id = props.user_id;
  let history = useHistory();
  const [loading, setLoading] = useState(false);

  // on submit fetch and find/set the id of the current user to redux

  let url = `https://ttp-stocker-api.herokuapp.com/api/v1/transactions`;

  let submitHandler = e => {
    e.preventDefault();
    setLoading(true)

    let wholeIntegerCheck = /^[1-9]\d*$/;

    ////check whole integer with regex
    if (wholeIntegerCheck.test(transactionInfo.quantity) === false) {
      alert("Please enter a whole integer");
    } else {
      fetch(`${url}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...transactionInfo, user_id: user_id })
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
            alert(data.error);
          } else {
            setLoading(false)
            alert(data.message);
            props.updateBalance(data.balance)
            history.push("/transactions");
          }
        });
    }
    e.target.querySelector("input#ticker").value = "";
    e.target.querySelector("input#quantity").value = "";
  };

  return (
    <div class="container">
      <div className="purchase-form">
      <Segment loading={loading}>
        <Form onSubmit={submitHandler}>
          <Form.Field
            id="ticker"
            control={Input}
            onChange={e =>
              setTransactionInfo({ ...transactionInfo, ticker: e.target.value })
            }
            placeholder="Ticker"
          />
          <Form.Field
            id="quantity"
            control={Input}
            onChange={e =>
              setTransactionInfo({
                ...transactionInfo,
                quantity: e.target.value
              })
            }
            placeholder="QTY"
          />

          <Grid>
            <Grid.Row centered>
              <Form.Button>Buy</Form.Button>
            </Grid.Row>
          </Grid>
        </Form>
        </Segment>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user_id: state.userId
  };
}
function mapDispatchToProps(dispatch) {
  return {
    updateBalance: data => {
      dispatch({ type: "UPDATEBALANCE", payload: data });
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PurchaseForm);
// export default connect(mapStateToProps, mapDispatchToProps)(Login);
