import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  return (
    <Fragment>
      <div className="belt">
        {props.displayedSushi.map(sushi => {
          return (
            <Sushi
              sushiEaten={props.sushiEaten}
              key={sushi.id}
              eatSushi={props.eatSushi}
              sushi={sushi}
              customerMoney={props.customerMoney}
            />
          );
        })}
        <MoreButton moreSushi={props.moreSushi} />
      </div>
      <button onClick={props.add100}>Add $100 to your balance</button>
    </Fragment>
  );
};

export default SushiContainer;
