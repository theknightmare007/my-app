import React from "react";
import priceFetch from "@/data/fetch";
import { useState } from "react";
import { useEffect } from "react";
const ShowPrice = () => {
    const [priceData, setPriceData] = useState({});
  
    const getPriceData = async () => {
      try {
        const data = await priceFetch();
        setPriceData(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      getPriceData();
    }, []);
  
    return (
      <div>
       
      </div>
    );
  };
  
  export default ShowPrice;