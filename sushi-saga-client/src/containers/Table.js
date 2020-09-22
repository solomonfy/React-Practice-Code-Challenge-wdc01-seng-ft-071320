import React, { Fragment } from "react";

const Table = (props) => {
  const allSushis = props.allSushis;
  let sum = props.sumOfEatenSushisPrice;
  let eatenSushis = allSushis.filter((sushi) => sushi.eaten === true);
  // let eatenSushisPrice = eatenSushis.map((sushi) => sushi.price);
  // let sumOfPrices = eatenSushisPrice.reduce((a, b) => a + b, 0);
  // let initialMoney = 100;
  const renderPlates = (array) => {
    return array.map((x, index) => {
      // console.log(array);
      return <div className="empty-plate" style={{ top: -7 * index }} />;
    });
  };

  return (
    <Fragment>
      <h1 className="remaining">
        You have: $
        {
          /* Give me how much money I have left */
          props.initialMoneyBalance - sum
        }
        {/* {initialMoney > sumOfPrices ? initialMoney - sumOfPrices : null} */}{" "}
        remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            eatenSushis.length !== 0 ? renderPlates([]) : null
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            // renderPlates([])
          }
        </div>
      </div>
    </Fragment>
  );
};

export default Table;
