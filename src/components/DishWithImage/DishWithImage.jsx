import React from "react";
import Dish from "./Dish";

function DishWithImage() {
  const arr = [1, 1, 1, 1, 1, 1];
  return (
    <>
      <div className="mx-[25%] max-[460px]:mx-[22px]">
        <p className="font-bold text-lg max-w-[320px] mt-4">Popular Dishes</p>
        <section className="flex gap-3  flex-wrap justify-center items-center mt-2">
          {arr.map((item, id) => (
            <Dish key={id} />
          ))}
        </section>
      </div>
      <div className="bg-[#F2F2F2] h-0.5 mt-8"></div>
    </>
  );
}

export default DishWithImage;
