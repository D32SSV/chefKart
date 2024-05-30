import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import SingleCard from "./SingleCard";
import chai from "../../assets/icons/chai.svg";
import { FaArrowRightLong } from "react-icons/fa6";

function Card() {
  const [apiData, setApiData] = useState([]);
  const [loader, setLoader] = useState(true);
  async function getData(url) {
    setLoader(true);
    try {
      const data = await axios(url);
      setApiData(data.data.dishes);
      //   console.log(data);
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  }
  useEffect(() => {
    getData(
      "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
    );
  }, []);

  return (
    <div className="mt-4 mx-[25%] max-[460px]:mx-[22px] divide-y">
      {loader ? (
        <Loader />
      ) : (
        apiData.map((d, id) => {
          return (
            <>
              <SingleCard data={d} key={id} />
            </>
          );
        })
      )}

      <section className="h-16 w-72 rounded-lg text-white text-center font-semibold pt-5 bg-black absolute z-10 top-[99%] left-[40%]">
        <div className="flex justify-center items-center gap-3">
          <img className="inline" src={chai} />
          <p>3 Food Items Selected</p>
          <FaArrowRightLong />
        </div>
      </section>
    </div>
  );
}

export default Card;
