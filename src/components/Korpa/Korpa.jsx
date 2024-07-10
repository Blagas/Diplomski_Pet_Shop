import React, { useEffect, useState } from "react";
import styles from "./Korpa.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import toastMessage from "../Toast/Toast";

const Korpa = ({ data = [], setData, setOpen,handleOpenPlacanje }) => {
  const [korpaData, setKorpaData] = useState(data);
  const [ukupnaCena, setUkupnaCena] = useState("");

  const handleDelete = (id) => {
    const newData = korpaData.filter((item) => item.id !== id);
    setKorpaData(newData);
    setData(newData);
  };

  useEffect(() => {
    let newUkupno = 0;
    korpaData.map(
      (item) =>
        (newUkupno += (item.popust ? item.popust : item.cena) * item.kolicina)
    );
    setUkupnaCena(newUkupno);
  }, [korpaData]);

  const handleChangeKolicina = (plus, id) => {
    console.log("plus", plus);
    console.log("id", id);
    let newData = [];
    newData = korpaData.map((item) => {
      if (item.id === id) {
        plus ? (item.kolicina += 1) : (item.kolicina -= 1);

        return item;
      } else {
        return item;
      }
    });
    setKorpaData(newData);
  };
  const handleKupi = () => {
    setOpen(false);
    setData([]);
    setKorpaData([]);
    handleOpenPlacanje();
   // toastMessage("Uspesno ste kupili proizvode.");
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardsContainer}>
        <strong
          style={{
            fontSize: "25px",
            color: "white",
            width: "100%",
          }}
        >
          IZABRANI PROIZVODI
        </strong>
        {korpaData.map((item) => (
          <div className={styles.proizvodCard} key={item.id}>
            <p className={styles.paragrafNaslov}>{item.naslov}</p>
            <div className={styles.kolicinaContainer}>
              <div
                onClick={() => handleChangeKolicina(true, item.id)}
                className={`defaultButton ${styles.plusMinus}`}
              >
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div>{item.kolicina}</div>
              <button
                disabled={item.kolicina === 1}
                onClick={() => handleChangeKolicina(false, item.id)}
                className={`defaultButton ${styles.plusMinus}`}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </div>
            <p className={styles.paragrafCena}>
              {" "}
              {(item.popust ? item.popust : item.cena) * item.kolicina}
            </p>
            <div onClick={() => handleDelete(item.id)} className={styles.xIcon}>
              <FontAwesomeIcon icon={faX} />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.proizvodCard}>
        <p className={styles.paragrafUkupno}>UKUPNO:</p>
        <p className={styles.paragrafCena}> {ukupnaCena}</p>
        {/* <div style= className={styles.xIcon}></div> */}
      </div>
      <button
        onClick={handleKupi}
        disabled={korpaData.length === 0}
        className={korpaData.length === 0 ? "korpaNeHover" : "defaultButton"}
      >
        Kupi
      </button>
    </div>
  );
};

export default Korpa;