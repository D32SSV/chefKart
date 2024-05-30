import React from "react";
import Cal from "../../assets/icons/CalenderImg.svg";
import clock from "../../assets/icons/clock.svg";

function Calender() {
  function getDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    const formattedDate = day + " " + month.slice(0, 3) + " " + year;
    return formattedDate;
  }

  return (
    <section className="flex gap-2 items-center justify-center shadow-md bg-white relative top-8 mx-[auto] max-w-[340px] py-4 px-1 rounded-md">
      <img src={Cal} className="h-6 m-0" />
      <p className="font-bold text-sm m-0">{getDate()}</p>
      <p className="font-thin text-gray-200 text-3xl m-0">|</p>
      <img src={clock} className="h-6 m-0" />
      <p className="font-bold text-sm m-0">10:30 Pm - 12:30 Pm</p>
    </section>
  );
}

export default Calender;
