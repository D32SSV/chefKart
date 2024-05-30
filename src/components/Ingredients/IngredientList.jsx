import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function IngredientList({ text, list=0 }) {
  return (
    <>
      <div className="flex font-bold text-lg gap-2 items-center my-4">
        <p>{text}</p>
        <IoMdArrowDropdown />
      </div>
      {list.length > 0 && (
        <table className="w-[360px]">
          {list.map((item, index) => (
            <tr className="text-left" key={index}>
              {item.name}
              <td className="text-right">{item.quantity}</td>
            </tr>
          ))}
        </table>
      )}
    </>
  );
}

export default IngredientList;
