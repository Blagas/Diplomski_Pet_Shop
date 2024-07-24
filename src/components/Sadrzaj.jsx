

const Sadrzaj = ({ slika, cena, opis, naslov, popust }) => {
  const stil = {
    okvir: {
      position: "relative",
      border: "7px solid rgb(82, 120, 83)",
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
    },
    akcija: {
      position: "absolute",
      top: "-10px",
      right: "0px",
      width: "80px",
      height: "80px",
      pointerEvents: "none",
    },
    dodaj: {
      width: "206px",
      position: "absolute",
      top: "395px",
      left: "75px",
    },
    naslov: {
      marginTop: "-10px",
      fontWeight: "bold",
    },
    cena: {
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
      marginLeft: "20px",
      fontSize: "20px",
      fontWeight: "bold",
    },
    slide: {
      position: "absolute",
      top: "-35px",
      left: "20px",
    },
    naslovPopUp: {
      position: "absolute",
      top: "-100px",
      left: "330px",
      width: "100%",
      fontSize: "35px",
      textAlign: "justify",
      color: "whitesmoke",
    },
    opis: {
      marginTop: "10px",
      marginLeft: "320px",
      width: "600px",
      textAlign: "justify",
      color: "whitesmoke",
    },
    cenaPopUp: {
      marginTop: "40px",
      marginLeft: "350px",
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
      color: "whitesmoke",
    },
    originalnaCena: {
      fontSize: "40px",
      fontWeight: "bold",
      color: "whitesmoke",
    },
  };
  
  return (
    <>
      <div style={{ position: "relative", width: "600px", height: "600px" }}>
        <div style={stil.slide}>
          <img style={stil.slika} src={slika} alt="Slika nije dostupna" />
        </div>
        <p style={stil.naslovPopUp}>{naslov}</p>
        <p style={stil.cenaPopUp}>
          {" "}
          {popust !== undefined ? (
            <s style={stil.popustPopUp}>{cena}RSD</s>
          ) : (
            <>
              <p style={stil.originalnaCena}>{cena}RSD</p>
            </>
          )}
          {popust !== undefined ? (
            <label style={stil.novaCenaPopUp}>{popust}RSD</label>
          ) : null}
        </p>
        {popust !== undefined ? <br /> : null}
        <hr
          style={{
            margintTop: "640  px",
            width: "620px",
            marginLeft: "300px",
            color: "black",
          }}
        />

        <strong
          style={{
            margintTop: "600px",
            width: "1000px",
            marginLeft: "200px",
            fontSize: "40px",
            marginBottom: "0px",
            color: "whitesmoke",
          }}
        >
          Opis:
        </strong>
        <p style={stil.opis}>{opis} </p>
      </div>
    </>
  );
};
export default Sadrzaj;