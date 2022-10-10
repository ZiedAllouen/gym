import React from "react";
import PinDropIcon from '@material-ui/icons/PinDrop';
import "./Listing.css";
import { motion } from "framer-motion";

const Listing = ({ data, open }) => {
  const { imageUrl, title, address,  } =
    data;

  return (
    <motion.div className="listing" onClick={open} whileHover={{ scale: 1.1 }}>
      <div className="listing__content">
        <div className="listing__image-container">
          <img
            className="listing__image"
            alt=""
            src={imageUrl}
          />
        </div>
        <div className="listing__details">

          <div className="listing__row">
            <span className="listing__price">{title}</span>
          </div>


        </div>
      </div>
    </motion.div>
  );
};

export default Listing;