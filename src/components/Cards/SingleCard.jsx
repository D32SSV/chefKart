import React from "react";
import veg from "../../assets/icons/veg.svg";
import refri from "../../assets/icons/refri.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

function SingleCard({ data }) {
  return (
    <section className="flex justify-between mt-6 pt-6">
      <div>
        <section className="font-semibold">
          {data.name} <img className="inline mr-1" src={veg} />
          <Rating rating={data.rating} />
        </section>
        <div className="flex">
          <div className="flex gap-24 items-center justify-center font-thin text-gray-200 text-3xl">
            {data.equipments.map((e, id) => {
              return (
                <div className="relative">
                  <img className="ml-6 h-5" src={refri} key={id} />
                  <p
                    className={`absolute text-xs text-[#1C1C1C] font-normal top-[${
                      id * 2 + 5
                    }] left-[${id * 2 + 70}]`}
                    key={id + 234}
                  >
                    {e}
                  </p>
                </div>
              );
            })}
            <p className="-ml-8 mr-8 text-3xl">|</p>
          </div>
          <Link to={`/ingredients/${data.name}`}>
            <div className="inline text-xs mt-2 cursor-pointer">
              <p className="font-bold">Ingredients</p>
              <p className="flex items-center text-[#FF8800] text-xs">
                View List <MdKeyboardArrowRight />
              </p>
            </div>
          </Link>
        </div>
        <p className="text-[#707070] text-sm mt-6">{data.description}</p>
      </div>
      <div className="relative">
        <img className="h-24 w-24 rounded-md" src={data.image} />
        <button className="px-4 py-1 font-semibold text-[#FF8800] rounded-md border-[#FF8800] absolute top-20 left-4">
          Add<sup className="left-3 -top-2">+</sup>
        </button>
      </div>
    </section>
  );
}

export default SingleCard;
