const ComboBox = ({
    vrednost1,
    vrednost2,
    vrednost3,
    vrednost4,
    comboBoxVrednost,
    setComboBoxVrednost,
  }) => {
    const handleComboBox = (e) => {
      setComboBoxVrednost(e.target.value);
    };
    return (
      <div className="custom-select" style={{ width: "200px" }}>
        <select value={comboBoxVrednost} onChange={handleComboBox}>
          <option value="" disabled>
            Izaberite vredonst
          </option>
          <option value={vrednost1}>{vrednost1}</option>
          <option value={vrednost2}>{vrednost2}</option>
          <option value={vrednost3}>{vrednost3}</option>
          <option value={vrednost4}>{vrednost4}</option>
        </select>
      </div>
    );
  };
  export default ComboBox;