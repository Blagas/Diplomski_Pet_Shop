import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ComboBox from "./ComboBox";
import Dugmici from "./Dugmici";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { listaProizvoda } from "./Proizvodi/proizvodi";

const DodavanjeProizvoda = ({ setLista }) => {
  const [comboLjubimac, setComboLjubimac] = useState("");
  const [comboVrsta, setComboVrsta] = useState("");
  const [naslov, setNaslov] = useState("");
  const [cena, setCena] = useState("");
  const [slika, setSlika] = useState(undefined);
  const [popust, setPopust] = useState(undefined);
  const [kolicina, setKolicina] = useState("");
  const [opis, setOpis] = useState("");

  const handleNaslov = (e) => {
    setNaslov(e.target.value);
  };
  const handleCena = (e) => {
    setCena(e.target.value);
  };
  const handleSlika = (e) => {
    setSlika(e.target.value);
  };
  const handlePopust = (e) => {
    setPopust(e.target.value);
  };
  const handleKolicina = (e) => {
    setKolicina(e.target.value);
  };
  const handleOpis = (e) => {
    setOpis(e.target.value);
  };
  const handlePotvrdi = () => {
    const novaLista = {
      id: listaProizvoda.length + 1,
      vrsta: comboVrsta,
      Slika1: slika,
      naslov: naslov,
      opis: opis,
      cena: cena,
      zivotinja: comboLjubimac,
      kolicina: kolicina,
      popust: popust,
    };
    if (
      comboVrsta === "" ||
      comboLjubimac === "" ||
      !slika ||
      naslov === "" ||
      opis === "" ||
      cena === "" ||
      kolicina === ""
    ) {
      alert("Sva polja moraju biti popunjena da bi se proizvod dodao");
      return;
    }
    alert("Proizvod je uspesno unet");
    setLista((prevLista) => [...prevLista, novaLista]);
    setComboLjubimac("");
    setComboVrsta("");
    setCena("");
    setKolicina("");
    setPopust("");
    setNaslov("");
    setSlika("");
    setOpis("");
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          marginBottom: "15px",
        }}
      >
        <label style={{ fontSize: "20px" }}>Vrsta:</label>
        <ComboBox
          comboBoxVrednost={comboVrsta}
          setComboBoxVrednost={setComboVrsta}
          vrednost1={"Hrana"}
          vrednost2={"Igračke"}
          vrednost3={"Kavez i oprema"}
          vrednost4={"Ogrlice i povoci"}
        />
        <label style={{ fontSize: "20px" }}>Ljubimac:</label>
        <ComboBox
          comboBoxVrednost={comboLjubimac}
          setComboBoxVrednost={setComboLjubimac}
          vrednost1={"Pas"}
          vrednost2={"Mačka"}
          vrednost3={"Papagaj"}
          vrednost4={"Glodari"}
        />
        <br />
      </div>
      <label style={{ fontSize: "20px" }}>Naslov:</label>
      <input
        style={{ width: "35%", marginLeft: "10px" }}
        value={naslov}
        onChange={handleNaslov}
      ></input>
      <label style={{ fontSize: "20px", marginLeft: "10px" }}>Cena:</label>
      <input
        style={{ width: "15%", marginLeft: "10px" }}
        value={cena}
        onChange={handleCena}
      ></input>
      <br />
      <div style={{ marginTop: "10px" }}>
        <label style={{ fontSize: "20px" }}>Slika:</label>
        <input
          style={{ width: "65%", marginLeft: "10px" }}
          value={slika}
          onChange={handleSlika}
        ></input>
      </div>
      <div style={{ marginTop: "10px" }}>
        <label style={{ fontSize: "20px" }}>Popust:</label>
        <input
          style={{ width: "15%", marginLeft: "10px" }}
          value={popust}
          onChange={handlePopust}
        ></input>
        <label style={{ fontSize: "20px", marginLeft: "10px" }}>
          Kolicina:
        </label>
        <input
          style={{ width: "15%", marginLeft: "10px" }}
          value={kolicina}
          onChange={handleKolicina}
        ></input>
      </div>
      <div style={{ marginTop: "10px" }}>
        <label style={{ fontSize: "20px" }}>Opis:</label>
        <br />
        <textarea
          style={{ width: "65%", height: "100px", marginTop: "10px" }}
          value={opis}
          onChange={handleOpis}
        ></textarea>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Dugmici tekst={handlePotvrdi}>
          <FontAwesomeIcon icon={faCheckCircle} /> Potvrdi
        </Dugmici>
      </div>
    </div>
  );
};
export default DodavanjeProizvoda;