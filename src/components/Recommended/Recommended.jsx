import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import IngredientList from "../Ingredients/IngredientList";

function Recommended() {
  return (
    <section className=" flex justify-between items-center mt-4 mx-[25%] max-[460px]:mx-[22px]">
      <IngredientList text={"Recommended"}/>

      <button className="bg-[#1C1C1C] text-white font-bold rounded-md px-6">
        Menu
      </button>
    </section>
  );
}

export default Recommended;
