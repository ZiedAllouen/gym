import React, { useState } from "react";
import Listing from "../Listing/Listing";
import Overlay from "../../Nutrition/Overlay/Overlay";
import Modal from "../Modal/ModalT";
import { AnimatePresence } from "framer-motion";

const CardT = ({ data }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Listing data={data} open={openModal} />
      <AnimatePresence>
        {open && (
          <Overlay close={closeModal}>
            <Modal data={data} close={closeModal} />
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default CardT;