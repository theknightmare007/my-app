const priceFetch = () => {
    let newarr = ["ATOM", "BNB", "BTC", "ONE", "LINK", "DOT", "ID", "HOOK", "AVAX", "ETH", "GRT"];
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
  
    return fetchAllPrices().then(() => priceData);
  };
  
  const getPriceData = async () => {
    const data = await priceFetch();
    return data;
  };
  
  getPriceData().then(data => console.log(data));
  