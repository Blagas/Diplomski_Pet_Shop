import { useState } from "react";
import "./components/stil.css";
import Dugmici from "./components/Dugmici";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Proizvod from "./components/Proizvodi";
import {listaProizvoda} from "./components/Proizvodi/proizvodi";
import Harmonika from "./components/Harmonika";
import HarmonikaSadrzaj from "./components/HarmonikaSadrzaj";


function App() {
  const [content, setContent] = useState(<p></p>);
  const [oNama,setONama]=useState(<p></p>);
  const [more, setMore] = useState(false);
  const [proizvodi, setProizvodi] = useState(listaProizvoda.slice(0, 8));
  const [filtriranje, setFiltriranje] = useState(listaProizvoda);
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
  return (
    <div>
      <header><h1 className="naslov">PET SHOP PAWS</h1></header>
      <main>
      <menu>
      <Dugmici tekst={handleONama}>
            <FontAwesomeIcon icon={faCircleInfo} /> O nama
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
    </div>
  );
}

export default App;
