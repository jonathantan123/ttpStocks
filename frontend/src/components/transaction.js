import React from "react";
import {List } from "semantic-ui-react";

import { connect } from "react-redux";

function Transaction(props) {
    
  return (
      
    <List.Item>
      <List.Content>
        <List.Header>
        {props.data.ticker}
        </List.Header>
        {props.data.quantity} Shares 
        @ ${props.data.price}/share 
      </List.Content>
    </List.Item>
  );
}

export default Transaction
