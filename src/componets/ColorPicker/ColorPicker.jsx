import { useState } from "react";
import styles from "./ColorPicker.module.css";

function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  function colorPickerEvent(e) {
    setColor(e.target.value);
  }
  return (
    <div className={styles.pickerContainer}>
      <h1>Color Picker</h1>
      <div className={styles.colorDisplay} style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
      </div>
      <label>Select a Color</label>
      <input type="color" value={color} onChange={colorPickerEvent} />
    </div>
  );
}

export default ColorPicker;
