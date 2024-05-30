import React, { useState } from "react";

function HocButton(WrappedComponent) {
  return function EnhancedComponent(props) {
    const [selected, setSelected] = useState(false);

    const buttonStyles = {
      color: selected ? "#FF941A" : "inherit",
      borderColor: selected ? "#FF941A" : "inherit",
      backgroundColor: selected ? "#FFF9F2" : "inherit",
    };

    return (
      <WrappedComponent
        style={buttonStyles}
        onClick={() => setSelected(!selected)}
        {...props} // Spread props here
      />
    );
  };
}

export default HocButton;
