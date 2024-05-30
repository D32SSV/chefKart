// Ingredients.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader/Loader";
import { useParams } from "react-router-dom";
import SingleDish from "../components/SingleDish/SingleDish";

function Ingredients() {
  const [dishData, setDishData] = useState([]);
  const [loader, setLoader] = useState(true);
  const { dish } = useParams();

  async function getData(url) {
    setLoader(true);
    try {
      const data = await axios(url);
      console.log(data.data);
      setDishData(data.data);
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  }

  useEffect(() => {
    getData(
      "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1"
    );
  }, []);

  //   const filteredData = dishData.filter((item) => item.name === dish);
  //   console.log(dish);

  return (
    <div className="mt-4 ml-[20%] mr-[20%]">
      {loader ? <Loader /> : <SingleDish data={dishData}/>}
    </div>
  );
}

export default Ingredients;
