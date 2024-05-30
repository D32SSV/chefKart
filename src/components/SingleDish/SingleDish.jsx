import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import clock from "../../assets/icons/clock.svg";
import sabji from "../../assets/images/sabji.png";
import matka from "../../assets/images/matka.png";
import frij from "../../assets/images/frij.png";
import IngredientList from "../Ingredients/IngredientList";

function SingleDish({ data }) {
  return (
    <>
      <div className="relative sm:mx-[25%]">
        <div className="absolute w-40 h-40 bg-[#FFF9F2] rounded-full top-12 right-0"></div>
        <div className="absolute overflow-hidden">
          <MdKeyboardArrowLeft className="absolute text-3xl -ml-2" />
          <section className="flex mt-10">
            <h1 className="font-bold text-3xl">
              {data.name}
              <sub className="bg-[#51C452] -top-1 left-2 font-semibold text-white text-xs rounded-sm px-1">
                4.2 &#9733;
              </sub>
            </h1>
          </section>
          <p className="text-[#A3A3A3] text-sm mt-4 text-justify max-w-[55%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            debitis nihil natus consequuntur.
          </p>
          <div className="bg-red-400 overflow-hidden">
            <img src={sabji} className="absolute  left-40 top-300" />
            <img src={matka} className="absolute left-60 top-10" />
          </div>
          <section className="flex my-8 gap-4 font-semibold">
            <img src={clock} />
            <p>{data.timeToPrepare}</p>
          </section>
          <div className="bg-[#F2F2F2] h-0.5 mt-8"></div>
          <h2 className="text-[#1C1C1C] text-lg font-bold mt-8">Ingredients</h2>
          <p className="text-[#8A8A8A] text-sm">For 2 people</p>

          <div className="bg-[#F2F2F2] h-0.5 mt-8"></div>
          {
            <>
              <IngredientList
                text={`Vegetables (${data.ingredients.vegetables.length})`}
                list={data.ingredients.vegetables}
              />
              <IngredientList
                text={`Spices (${data.ingredients.spices.length})`}
                list={data.ingredients.spices}
              />
            </>
          }
          <h2 className="text-[#1C1C1C] text-lg font-bold my-4">Appliances</h2>
          {data.ingredients.appliances.length > 0
            ? data.ingredients.appliances.map((item, id) => {
                return (
                  <img
                    className="inline p-4 bg-[#F5F5F5] m-2 rounded-md"
                    src={frij}
                  />
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}

export default SingleDish;
