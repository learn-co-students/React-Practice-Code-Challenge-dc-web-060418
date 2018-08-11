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
              key={sushi.id}
              eatSushi={props.eatSushi}
              sushi={sushi}
              customerMoney={props.customerMoney}
            />
          );
        })}
        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
