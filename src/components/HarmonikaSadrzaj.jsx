import { useEffect, useState } from "react";
import Checkbox from "./CheckBox";
import { listaProizvoda } from "./Proizvodi/proizvodi";

const HarmonikaSadrzaj = ({ filtriranje, setFiltriranje }) => {
  const [pas, setPas] = useState(false);
  const [macka, setMacka] = useState(false);
  const [glodari, setGlodari] = useState(false);
  const [papagaj, setPapagaj] = useState(false);
  const [hrana, setHrana] = useState(false);
  const [igracka, setIgracka] = useState(false);
  const [kavez, setKavez] = useState(false);
  const [ogrlica, setOgrlica] = useState(false);

  const Filtriranje = () => {
    let filteredItems = listaProizvoda.filter((item) => {
      let passesLjubimac =
        (!pas && !macka && !glodari && !papagaj ) ||
        (pas && item.zivotinja === "Pas") ||
        (macka && item.zivotinja === "Mačka") ||
        (glodari && item.zivotinja === "Glodari") ||
        (papagaj && item.zivotinja === "Papagaj") ;

      let passesOprema =
        (!hrana && !igracka && !kavez && !ogrlica ) ||
        (hrana && item.vrsta === "Hrana") ||
        (igracka && item.vrsta === "Igračke") ||
        (kavez && item.vrsta === "Kavez i oprema") ||
        (ogrlica && item.vrsta === "Ogrlice i povoci") ;

      return passesLjubimac && passesOprema;
    });
    console.log(filteredItems);
    setFiltriranje(filteredItems);
  };

  useEffect(() => {
    Filtriranje();
  }, [
    pas,
    macka,
    glodari,
    papagaj,
    hrana,
    igracka,
    kavez,
    ogrlica,
  ]);

  return (
    <menu>
      <div>
        <strong style={{ fontSize: "20px", marginRight: "40px" }}>Ljubimci</strong>
        <hr />
        <Checkbox tekst={"Pas"} setChecked={setPas} check={pas} />
        <Checkbox tekst={"Mačka"} setChecked={setMacka} check={macka} />
        <Checkbox tekst={"Glodari"} setChecked={setGlodari} check={glodari} />
        <Checkbox tekst={"Papagaj"} setChecked={setPapagaj} check={papagaj} />
      </div>
      <div style={{ marginLeft: "80px" }}>
        <strong style={{ fontSize: "20px", marginRight: "40px" }}>
          Proizvodi
        </strong>
        <hr />
        <Checkbox tekst={"Hrana"} setChecked={setHrana} check={hrana} />
        <Checkbox tekst={"Igračke"} setChecked={setIgracka} check={igracka} />
        <Checkbox tekst={"Kavez i oprema"} setChecked={setKavez} check={kavez} />
        <Checkbox tekst={"Ogrlice i povoci"} setChecked={setOgrlica} check={ogrlica} />
      </div>
    </menu>
  );
};

export default HarmonikaSadrzaj;