import React, { useEffect, useState } from "react";
import { Divider, Grid, Segment, List } from "semantic-ui-react";
import PurchaseForm from "../components/purchase";
import { connect } from "react-redux";
import PortfolioStock from "../components/portfolioStock";

function PortfolioContainer(props) {
  let id = props.user_id;

  const [loading, setLoading] = useState(true);

  const [portfolioStocks, setPortfolioStocks] = useState([]);

  useEffect(() => {
    fetch(`https://ttp-stocker-api.herokuapp.com/find/${id}`)
      .then(resp => resp.json())
      .then(resp => {
        setPortfolioStocks(resp);
        setLoading(false);
      });
  }, [id]);

  let renderPortfolioStocks = array => {
    return array.map(stock => <PortfolioStock data={stock} />);
  };

  return (
    <div class="ui raised  padded  container segment">
      <Segment>
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <h2>Portfolio</h2>
            <Segment loading={loading}>
              <List animated verticalAlign="middle" divided relaxed>
                {renderPortfolioStocks(portfolioStocks)}
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <h2>Cash ${props.balance} </h2>
            <PurchaseForm />
          </Grid.Column>
        </Grid>
        <Divider vertical>OR</Divider>
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

export default connect(mapStateToProps, null)(PortfolioContainer);
