import React, { useState, useEffect } from "react";
import { List, Grid, Segment } from "semantic-ui-react";
import PurchaseForm from "../components/purchase";
import { connect } from "react-redux";
import Transaction from "../components/transaction";

function TransactionsContainer(props) {
  let id = props.user_id;

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
      
    fetch(`http://localhost:3001/api/v1/users/${id}`)
        .then(resp => resp.json())
        .then(resp=> {
            setTransactions(resp)
        });
  }, [id])

  

let renderTransactions = (array) => {
    return array.map((transaction) => <Transaction data={transaction}/>)
  }


  return (
    <div className="portfolio-container">
      <Segment>
        <Grid coumns={1} relaxed="very">
          <Grid.Column>
            <h2>My Transactions</h2>
            <p>ajksdnkjasndasn</p>
            <List animated verticalAlign="middle" divided relaxed>
              {renderTransactions(transactions)}
            </List>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user_id: state.userId,
    balance: state.balance
  };
}

export default connect(mapStateToProps, null)(TransactionsContainer);
