import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Akcijaaa from "./Akcijaaa.png";
import PopUp from "./PopUp";
import { useState } from "react";
import Sadrzaj from "./Sadrzaj";

const Proizvod = ({
  slika,
  cena,
  naslov,
  popust,
  opis,
  handleDodajUKorpu,
}) => {
  const handleClick = () => {
    setOpen(true);
  };

  const stil = {
    okvir: {
      position: "relative",
      border: "7px solid #743a07",
      width: "360px",
      padding: "0px",
      height: "440px",
      marginRight: "40px",
      marginTop: "20px",
    },
    slikaContainer: {
      position: "relative",
      width: "100%",
      height: "280px",
    },
    slika: {
      width: "100%",
      height: "280px",
      margin: "0px",
      cursor: "pointer",
      userSelect: "none",
    },
    akcija: {
      position: "absolute",
      top: "10px",
      right: "0px",
      width: "70px",
      height: "70px",
      pointerEvents: "none",
    },
    dodaj: {
      width: "206px",
      position: "absolute",
      top: "395px",
      left: "75px",
    },
    naslov: {
      marginTop: "10px",
      fontWeight: "bold",
    },
    cena: {
      position: "absolute",
      left: "60px",
      top: "358px",
      fontSize: "20px",
      fontWeight: "bold",
      marginLeft: "0px",
    },
    cenaOriginal: {
      position: "absolute",
      left: "70px",
      top: "-32px",
      fontSize: "20px",
      fontWeight: "bold",
      marginLeft: "0px",
    },
    popust: {
      fontSize: "20px",
      fontWeight: "bold",
      marginLeft: "0px",
      color: "red",
    },
    novaCena: {
      position: "absolute",
      top: "358px",

      marginLeft: "20px",
      fontSize: "20px",
      fontWeight: "bold",
    },
    slide: {
      position: "absolute",
      top: "-115px",
      left: "20px",
    },
    naslovPopUp: {
      position: "absolute",
      top: "-130px",
      left: "460px",
      width: "100%",
      fontSize: "40px",
    },
    opis: {
      marginTop: "10px",
      marginLeft: "525px",
      width: "800px",
    },
    cenaPopUp: {
      marginTop: "120px",
      marginLeft: "550px",
    },
    popustPopUp: {
      fontSize: "40px",
      fontWeight: "bold",
      marginLeft: "0px",
      color: "red",
    },
    novaCenaPopUp: {
      marginLeft: "20px",
      fontSize: "40px",
      fontWeight: "bold",
    },
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <div style={stil.okvir}>
        <div style={stil.slikaContainer}>
          <img
            src={slika}
            alt="Slika nije dostupna"
            style={stil.slika}
            onClick={handleClick}
          />
          {popust !== undefined ? (
            <img src={Akcijaaa} alt="akcija" style={stil.akcija} />
          ) : null}
        </div>
        <p style={stil.naslov}>{naslov}</p>
        <center>
          <label style={stil.cena}>
            {popust !== undefined ? (
              <s style={stil.popust}>{cena}RSD</s>
            ) : (
              <p style={stil.cenaOriginal}>{cena}RSD</p>
            )}
          </label>
          {popust !== undefined ? (
            <label style={stil.novaCena}>{popust}RSD</label>
          ) : null}
        </center>
        <center>
          <button
            className="defaultButton"
            onClick={handleDodajUKorpu}
            style={stil.dodaj}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            {"  "}
            Dodaj u korpu
          </button>
        </center>
      </div>

      {open === true ? (
        <PopUp
          setOpen={setOpen}
          sadrzaj={
            <Sadrzaj
              slika={slika}
              opis={opis}
              cena={cena}
              popust={popust}
              naslov={naslov}
            />
          }
        />
      ) : null}
    </>
  );
};

export default Proizvod;