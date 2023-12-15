import { useState } from "react";

/*
  border: none;
  padding: 5px 15px;
  color: #745E5E;
*/

const ALT_STYLES = {
  border: "none",
  padding: "5px 15px",
  color: "#745E5E",
  background: "white"
};

const BUTTON_TEXT = ["$2k", "$5k", "No limit"];

export default function ButtonGroup({ updateValue }) {
  const [selectedButton, setSelectedButton] = useState(2);

  return (
    <div className="button-group">
      {BUTTON_TEXT.map((btnText, i) => (
        <button
          key={i}
          onClick={() => {
            setSelectedButton(i);
            updateValue(btnText);
          }}
          style={selectedButton === i ? ALT_STYLES : {}}
        >
          {btnText}
        </button>
      ))}
    </div>
  );
}
