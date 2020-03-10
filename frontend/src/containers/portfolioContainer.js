import React, {useEffect} from "react";
import { Divider, Grid, Segment } from "semantic-ui-react";
import PurchaseForm from "../components/purchase";
import {connect} from "react-redux"


function PortfolioContainer(props) {

  


  



  return (
    <div className="portfolio-container">
      <Segment>
        <Grid columns={2} relaxed="very">
          <Grid.Column>
              <h2>Portfolio</h2>
            <p>ajksdnkjasndasn</p>
          </Grid.Column>
          <Grid.Column>
      <h2>Cash ${props.balance}.00 </h2>
            <PurchaseForm/>
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

export default connect(mapStateToProps,null) (PortfolioContainer);
