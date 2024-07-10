import React, { useEffect, useState } from "react";
import styles from "./Placanje.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import toastMessage from "../Toast/Toast";

const Placanje = ({ data = [], setData, setOpen }) => {
  const [placanjeData, setPlacanjeData] = useState(data);

  const handleKupi = () => {
    setOpen(false);
    setData([]);
    setPlacanjeData([]);
    toastMessage("Uspesno ste kupili proizvode.");
  };
  return (
    <div className={styles.mainContainer}>
      Placanje
      <button
        onClick={handleKupi}
        
      >
        Kupi
      </button>
    </div>
  );
};

export default Placanje;