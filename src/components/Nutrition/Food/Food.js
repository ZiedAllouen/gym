
import React, { useContext } from 'react';
import "./Food.css";
import Card from "../Card/Card";
import { properties,fats,carbs,supplements } from "../../../constants/data";

import {  Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../../../assets/arrow-right.png';
import LeftArrowIcon from '../../../assets/left.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

function Food() {
  return (
    <div className="Food">
      <hr />
      <div className='title'>Proteines</div>
      <hr/>
      <div className="properties">
      <ScrollMenu >
        {properties.map((item) => (
          <Card data={item} key={item.id} />
        ))}
        </ScrollMenu>
      </div>
      <hr/>
      <div className='title'>Fats</div>
      <hr/>
      <div className="properties">
      <ScrollMenu >
        {fats.map((item) => (
          <Card data={item} key={item.id} />
        ))}
        </ScrollMenu>
      </div>

      <hr/>
      <div className='title'>Carbs</div>
      <hr/>
      <div className="properties">
      <ScrollMenu >
        {carbs.map((item) => (
          <Card data={item} key={item.id} />
        ))}
        </ScrollMenu>
      </div>

      <hr/>
      <div className='title'>Supplements</div>
      <hr/>
      <div className="properties">
      <ScrollMenu >
        {supplements.map((item) => (
          <Card data={item} key={item.id} />
        ))}
        </ScrollMenu>
      </div>


    </div>
    
  );
}

export default Food;