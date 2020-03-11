import React, { useEffect, useState } from "react";
import { Divider, Grid, Segment, List} from "semantic-ui-react";
import PurchaseForm from "../components/purchase";
import { connect } from "react-redux";
import PortfolioStock from "../components/portfolioStock";

function PortfolioContainer(props) {
  let id = props.user_id;

  const [portfolioStocks, setPortfolioStocks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/find/${id}`)
      .then(resp => resp.json())
      .then(resp => {
        setPortfolioStocks(resp);
      });
  }, [id]);

  let renderPortfolioStocks = array => {
    return array.map(stock => <PortfolioStock data={stock} />);
  };

  return (
    <div className="portfolio-container">
      <Segment>
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <h2>Portfolio</h2>
            <List animated verticalAlign="middle" divided relaxed>
            {renderPortfolioStocks(portfolioStocks)}
            </List>
          </Grid.Column>
          <Grid.Column>
            <h2>Cash ${props.balance} </h2>
            <PurchaseForm />
          </Grid.Column>
        </Grid>
        <Divider>OR</Divider>
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
