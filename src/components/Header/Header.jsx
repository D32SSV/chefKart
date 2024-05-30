import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

function Header({ heading }) {
  return (
    <section className="h-[4rem] font-custom font-semibold text-2xl">
      <p className="flex p-4 gap-2 items-center">
        <MdKeyboardArrowLeft /> {heading}
      </p>
      <section className=" bg-[#1C1C1C] h-[64px] static"></section>
    </section>
  );
}

export default Header;
