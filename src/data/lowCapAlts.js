import React from "react";

const SwapPage = () => {
    let newarr = ["ATOM", "BNB", "BTC", "ONE", "LINK", "DOT", "ID", "HOOK", "AVAX", "ETH", "GRT" ,"KAVA" , "CTSI" ,"COTI" , "BUSD", "USDC", "MATIC"];
  const priceData = {};

 
    return fetch(`https://api.binance.com/api/v3/ticker/price?`) 
    .then(respose => respose.json())
    .then(data=> {
      for (let i=0;i<data.length;i++){
        if (data[i].price <= 0.03 && !data[i].symbol.includes("BTC") && !data[i].symbol.includes("BNB") && !data[i].symbol.includes("ETH") && !data[i].symbol.includes("TRY") && !data[i].symbol.includes("TRX")){
          priceData[data[i].symbol] = data[i].price;
        }
      }
      const resarr = Object.entries(priceData);
      return priceData;
    })
}


export default SwapPage;

