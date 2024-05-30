import React from "react";

function Dish() {
  return (
    <section className="relative">
      <img
        className="rounded-full h-16 w-16 border border-[#FF941A] p-[0.1em] mix-blend-multiply"
        src="https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg"
      />
      <p className="absolute top-5 left-2 text-white">Biryani</p>
    </section>
  );
}

export default Dish;
