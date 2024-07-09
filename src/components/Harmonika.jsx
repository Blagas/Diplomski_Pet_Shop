import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const { faFilter } = require("@fortawesome/free-solid-svg-icons/faFilter");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");

const Harmonika = ({ sadrzaj }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const stil = {
    div1: {
      width: "600px",
      backgroundColor: "whiteSmoke",
      cursor: "pointer",
      borderRadius: "20px",
      position: "relative",
      padding: "1px",
    },
    tekst: {
      userSelect: "none",
      fontSize: "25px",
      width: "100%",
      height: "100%",
    },
    ikonica: {
      position: "absolute",
      top: "18px",
      right: "15px",
      fontSize: "30px",
    },
  };
  return (
    <div style={stil.div1}>
      <div>
        <h1 style={stil.tekst} onClick={handleClick}>
          Filter <FontAwesomeIcon icon={faFilter} />
        </h1>
        <FontAwesomeIcon
          icon={open === true ? faChevronUp : faChevronDown}
          style={stil.ikonica}
          onClick={handleClick}
        />
      </div>
      {open === true ? <div>{sadrzaj}</div> : null}
    </div>
  );
};
export default Harmonika;