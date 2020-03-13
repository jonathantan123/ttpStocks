import React, { useState, useEffect } from "react";
import { List, Grid, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import Transaction from "../components/transaction";

function TransactionsContainer(props) {
  let id = props.user_id;

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://ttp-stocker-api.herokuapp.com/api/v1/users/${id}`)
      .then(resp => resp.json())
      .then(resp => {
        setTransactions(resp.transactions);
        setLoading(false);
      });
  }, [id]);

  let renderTransactions = array => {
    return array.map(transaction => <Transaction data={transaction} />);
  };

  return (
    <div class="ui raised  padded  container segment">
      <Segment>
        <Grid coumns={1} relaxed="very">
          <Grid.Column>
            <h2>My Transactions</h2>
            <Segment loading={loading}>
              <List animated verticalAlign="middle" divided relaxed>
                {renderTransactions(transactions)}
              </List>
            </Segment>
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
