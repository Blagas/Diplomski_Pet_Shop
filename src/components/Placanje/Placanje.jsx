import React, { useEffect, useState } from "react";
import styles from "./Placanje.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import toastMessage from "../Toast/Toast";

const Placanje = ({ data = [], setData, setOpen }) => {
  const [placanjeData, setPlacanjeData] = useState(data);
  const [ime,setIme] = useState("");
  const [adresa,setAdresa]= useState("");
  const [kontakt,setKontakt]=useState("");
  const handleInputIme = (event) => {
    setIme(event.target.value);
  };
  const handleInputAdresa = (event) => {
    setAdresa(event.target.value);
  };
  const handleInputKontakt = (event) => {
    setKontakt(event.target.value);
  };
  const handleKupi = () => {
    setOpen(false);
    setData([]);
    setPlacanjeData([]);
    toastMessage("Uspesno ste kupili proizvode.");
  };
  return (
    <div className={styles.mainContainer}>
      <label
          style={{ fontSize: "20px", fontWeight: "bold"}}
        >
          Ime i Prezime:
        </label>
          <input
            type="text"
            placeholder="Unesite Vaše ime"
            value={ime}
            style={{ width: "250px", textAlign: "center" , marginTop:"10px"}}
            onChange={handleInputIme}
          />
      <label
          style={{ fontSize: "20px", fontWeight: "bold",marginTop:"15px" }}
        >
          Adresa:
        </label>
          <input
            type="text"
            placeholder="Unesite Vašu adresu"
            value={adresa}
            style={{ width: "250px", textAlign: "center",marginTop:"10px" }}
            onChange={handleInputAdresa}
          />
          <label
          style={{ fontSize: "20px", fontWeight: "bold",marginTop:"15px" }}
        >
          Kontakt:
        </label>
          <input
            type="text"
            placeholder="Unesite Vaš kontakt"
            value={kontakt}
            style={{ width: "250px", textAlign: "center" , marginTop:"10px"}}
            onChange={handleInputKontakt}
          />
      <button
        onClick={handleKupi}
        disabled={ime === "" || adresa === "" || kontakt === ""}
        className={ ime === "" || adresa === "" || kontakt === "" ? "korpaNeHover" : "defaultButton"}
        style={{marginTop:"80px",marginLeft:"17px"}}
      >
        Kupi
      </button>
    </div>
  );
};

export default Placanje;