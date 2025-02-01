import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dugmici from "./Dugmici";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const AdminForma = ({ sifra, setSifra, setDozvola }) => {
  const handleSifra = (e) => {
    setSifra(e.target.value);
  };
  const handlePotvrdi = () => {
    if (sifra !== "admin123") {
      alert("Šifra nije tačna");
      return;
    }
    if (sifra === "admin123") {
      alert("Pristup odobren");
      setDozvola(true);
    }
  };
  return (
    <div>
      <center>
        <h1>Admin meni</h1>
      </center>
      <label style={{ fontSize: "20px" }}>Šifra:</label>
      <br />
      <input
        value={sifra}
        onChange={handleSifra}
        style={{ width: "55%", marginTop: "35px" }}
      ></input>
      <div style={{ marginTop: "40px" }}>
        <Dugmici tekst={handlePotvrdi}>
          <FontAwesomeIcon icon={faCheckCircle} /> Potvrdi
        </Dugmici>
      </div>
    </div>
  );
};
export default AdminForma;