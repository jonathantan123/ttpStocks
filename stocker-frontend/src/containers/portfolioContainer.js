import React from "react";
import { Divider, Grid, Segment } from "semantic-ui-react";

function portfolioContainer() {
  return (
    <div className="portfolio-container">

      <Segment>
        <Grid columns={2} relaxed="very">
          <Grid.Column>
              <h2>Portfolio</h2>
            <p>ajksdnkjasndasn</p>
          </Grid.Column>
          <Grid.Column>
            <p>kjasndkjasd</p>
          </Grid.Column>
        </Grid>
        <Divider vertical>OR</Divider>
      </Segment>
    </div>
  );
}

export default portfolioContainer;
