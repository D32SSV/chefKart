import React from "react";

function Dish() {
  return (
    <section className="relative border-2 border-[#FF941A] rounded-full p-[0.1em]">
      <img
        className="rounded-full h-16 w-16  "
        src="https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg"
      />
      <div className="absolute h-16 w-16 left-[2px] top-[1px] bg-black opacity-50 rounded-full"></div>
      <p className="absolute top-5 left-2 text-white">Biryani</p>
    </section>
  );
}

export default Dish;
