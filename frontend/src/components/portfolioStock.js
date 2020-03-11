import React from "react";
import { List } from "semantic-ui-react";

function PortfolioStock(props) {
  return (
    <List.Item>
      <List.Content>
        <List.Header>
          <h3> {props.data.ticker}</h3>
        </List.Header>
        {props.data.transactionType}
        <br></br>
        {props.data.quantity} Shares Total Value:{" "}
        <span style={{ color: `${props.data.color}` }}>
          {" "}
          ${props.data.total}
        </span>
      </List.Content>
    </List.Item>
  );
}

export default PortfolioStock;
