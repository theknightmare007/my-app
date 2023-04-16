
import SwapHelper from "@/data/swapHelper";
import React from "react";
import Portfolio from "./portfolio";

const Swap = () => {
    const balance = Portfolio();
    const {priceData} = SwapHelper();
  
    return (
        <div align="center">
            Available balance  =
            Current Price of coin = {JSON.stringify(priceData)}
            
            <h1>Swap your assets here</h1><br/>
            <input type="number" placeholder="Enter coin amount here"></input><br/>
            <button >Buy with usdt</button><br/>
            <input type="number" placeholder="Enter coin amoun to sell"></input><br/>
            <button>Sell for usdt</button>
        </div>
    )
}

export default Swap;