import React, { useState } from "react";

const Checkbox = ({ tekst, setChecked, check }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    setChecked(!check);
    console.log(e.target.value);
  };

  return (
    <div className="checkbox-container" style={{ marginTop: "7px" }}>
      <label className="round-checkbox">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          value={tekst}
        />
        <span className={`checkmark ${isChecked ? "checked" : ""}`}></span>
        <span
          style={{
            margin: "0px",
            fontSize: "16px",
            fontWeight: "bold",
            userSelect: "none",
          }}
        >
          {tekst}
        </span>
      </label>
    </div>
  );
};

export default Checkbox;