import React, { useState } from "react";
import HocButton from "./HocButton";

function CountryTag() {
  const myButton = ({ buttonText, ...rest }) => {
    return (
      <button className="rounded-full px-8" {...rest}>
        {buttonText}
      </button>
    );
  };

  const EnhancedButton = HocButton(myButton);

  return (
    <section className="flex flex-wrap gap-3 mt-16 mx-[21%] max-[640px]:mx-[22px] items-center justify-center">
      <EnhancedButton buttonText={"Indian"} />
      <EnhancedButton buttonText={"Mexican"} />
      <EnhancedButton buttonText={"Continental"} />
      <EnhancedButton buttonText={"Chinese"} />
      <EnhancedButton buttonText={"Japanese"} />
      <EnhancedButton buttonText={"French"} />
    </section>
  );
}

export default CountryTag;
