import React, { useEffect, useState } from "react";

const priceFetch = async () => {
  let newarr = ["ATOM", "BNB", "BTC", "ONE", "LINK", "DOT", "ID", "HOOK", "AVAX", "ETH", "GRT" ,"KAVA" , "CTSI" ,"COTI" , "BUSD", "USDC", "MATIC"];
  const priceData = {};

  const fetchPrice = (symbol) => {
    return fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}USDT`)
      .then(response => response.json())
      .then(data => {
        priceData[symbol] = data.price;
      });
  };

  const fetchAllPrices = () => {
    const promises = newarr.map(symbol => fetchPrice(symbol));
    return Promise.all(promises);
  };

  await fetchAllPrices();
  return priceData;
};

const PriceTable = () => {
  const [priceData, setPriceData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await priceFetch();
      setPriceData(data);
    };

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  if (!priceData) {
    return <p>Loading...</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th><br/><br></br>
          <th>Price (USD)</th>
        </tr>
      </thead>
      <tbody>
  {Object.entries(priceData)
    .sort(([symbol1], [symbol2]) => symbol1.localeCompare(symbol2))
    .map(([symbol, price]) => (
      <tr key={symbol}>
        <td>{symbol}</td><br/>
        <td>{Number(price).toFixed(4)}</td>
      </tr>
    ))}
</tbody>

    </table>
  );
};

export default PriceTable;
