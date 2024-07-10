import { useState } from "react";
import "./components/stil.css";
import Dugmici from "./components/Dugmici";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCampground, faChevronDown, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Proizvod from "./components/Proizvodi";
import {listaProizvoda} from "./components/Proizvodi/proizvodi";
import Harmonika from "./components/Harmonika";
import HarmonikaSadrzaj from "./components/HarmonikaSadrzaj";
import { ToastContainer } from "react-toastify";
import toastMessage from "./components/Toast/Toast";
import Korpa from "./components/Korpa/Korpa";
import PopUp from "./components/PopUp";
import Placanje from "./components/Placanje/Placanje";
import Linkovi from "./components/Linkovi";


function App() {
  const [content, setContent] = useState(<p></p>);
  const [oNama,setONama]=useState(<p></p>);
  const [more, setMore] = useState(false);
  const [proizvodi, setProizvodi] = useState(listaProizvoda.slice(0, 8));
  const [filtriranje, setFiltriranje] = useState(listaProizvoda);
  const [openKorpa, setOpenKorpa] = useState(false);
  const [korpaData, setKorpaData] = useState([]);
  const [placanje,setPlacanje] = useState(false);
  const [placanjeData,setPlacanjeData] = useState({});
  const handleMore = () => {
    setMore(true);
    setProizvodi(listaProizvoda);
  };
  function handleONama() {
    setContent(
      <center>
        <div
          style={{
            backgroundColor: "#f5f5f5d1 ",
            width: "1100px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          
          <p style={{ width: "1100px", textAlign: "justify" }}>
            Dobrodošli na našu platformu. Mi smo prodavnica kamp opreme koja se
            fokusirati na pružanje visokokvalitetnih proizvoda za entuzijaste
            kampovanja i ljubitelje prirode. Naša misija je omogućiti kupcima
            nezaboravna iskustva u prirodi kroz vrhunsku opremu i izuzetnu
            korisničku uslugu. Vizija nam je postati vodeći distributer kamp
            opreme u regionu, prepoznatljiv po kvalitetu, raznovrsnosti i
            profesionalnoj usluzi.
          </p>
        </div>
      </center>
    );

    setONama(!oNama);
  }
  const handleOpenKorpa = () => {
    setOpenKorpa(true);
  };
  const handleDodajUKorpu = (proizvod) => {
    console.log(proizvod);
    const list = korpaData;
    const duplicate = list.find((item) => item.id === proizvod.id);
    if (duplicate) {
      toastMessage("Proizvod vec postoji u korpi");
      return;
    }
    list.push(proizvod);
    setKorpaData(list);
    toastMessage("Dodat proizvod u korpu");
  };
  const handleOpenPlacanje = () => {
    setPlacanje(true);
  };
  return (
    <div>
      <ToastContainer />
      {openKorpa && (
        <PopUp
          sadrzaj={
        <Korpa
              data={korpaData}
              setData={setKorpaData}
              setOpen={setOpenKorpa}
              handleOpenPlacanje={handleOpenPlacanje}
            />
          }
          setOpen={setOpenKorpa}
        />
      )}
      {placanje && (
        <PopUp
          sadrzaj={
        <Placanje
              data={placanjeData}
              setData={setPlacanjeData}
              setOpen={setPlacanje}
            />
          }
          setOpen={setPlacanje}
        />
      )}
      <header><h1 className="naslov">PET SHOP PAWS</h1></header>
      <main>
      <menu>
      <Dugmici tekst={handleONama}>
            <FontAwesomeIcon icon={faCircleInfo} /> O nama
          </Dugmici>
          <Dugmici tekst={handleOpenKorpa}>
            <FontAwesomeIcon icon={faCampground} /> KORPA
          </Dugmici>
      </menu>
      {oNama ? <>{content}</> : null}
      <br />
      <center>
        <Harmonika
          sadrzaj={
            <HarmonikaSadrzaj
              filtriranje={filtriranje}
              setFiltriranje={setFiltriranje}
            />
          }
        />
      </center>
      <menu>
      {filtriranje.map((item, key) => {
          if (!more && key > 7) {
            return;
          }
          return (
            <Proizvod
              key={item.id}
              slika={item.Slika1}
              cena={item.cena}
              naslov={item.naslov}
              popust={item.popust}
              opis={item.opis}
              handleDodajUKorpu={() => handleDodajUKorpu(item)}
            />
          );
        })}
      </menu>
      {more === false && filtriranje.length > 8 ? (
        <center>
          <button onClick={handleMore} className="defaultButton">
            Prikaži sve{"   "}
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </center>
      ) : null}
      </main>
      <footer>
        <Linkovi />
      </footer>
    </div>
  );
}

export default App;
