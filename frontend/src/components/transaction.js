import React from "react";
import {List } from "semantic-ui-react";
//// time is set to EDT to localize to NYC 

function Transaction(props) {
    
  return (
      
    <List.Item>
      <List.Content>
        <List.Header>
        {props.data.ticker}
        </List.Header>
        {props.data.quantity} Shares 
        @ ${props.data.price}/share
        on {new Date (props.data.created_at).toLocaleString('en-US', {timeZone: "America/New_York"})} 
      </List.Content>
    </List.Item>
  );
}

export default Transaction
