
import React, { useContext } from 'react';
import "./Tips.css";
import Card from "../Card/CardT";
import { tips} from "../../../constants/data";


function Food() {
  return (
    <div className="App">
    <div className="properties">
      {tips.map((item) => (
        <Card data={item} key={item.id} />
      ))}
    </div>
  </div>
);
}


export default Food;