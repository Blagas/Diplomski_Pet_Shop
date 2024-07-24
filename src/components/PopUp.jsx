import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PopUp = ({ sadrzaj, setOpen }) => {
  const stil = {
    sadrzaj: {
      backgroundColor: "rgb(116, 58, 7,0.95)",
      position: "fixed",
      width: "70%",
      height: "60%",
      left: "15%",
      top: "12%",
      zIndex: "2",
      paddingTop: "60px",
      textAlign: "center",
    },
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="divPozadina"></div>
      <div style={stil.sadrzaj}>
        <button className="gasiPopUp" onClick={handleClose}>
          <FontAwesomeIcon icon={faX} />
        </button>
        {sadrzaj}
      </div>
    </>
  );
};
export default PopUp;