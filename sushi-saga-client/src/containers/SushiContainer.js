import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = (props) => {
  const allSushis = props.fourSushis;
  return (
    <Fragment>
      <div className="belt">
        {
          allSushis.map((sushi) => (
            <Sushi sushi={sushi} key={sushi.id} eatSushi={props.eatSushi} />
          ))
          //Render Sushi components here!
        }
        <MoreButton next4Sushis={props.next4Sushis} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
