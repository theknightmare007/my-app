const priceFetch = () => {
    let newarr = ["ATOM", "BNB", "BTC", "ONE", "LINK", "DOT", "ID", "HOOK", "AVAX", "ETH", "GRT"];
    const priceData = {};
  
    const fetchPrice = (symbol) => {
        const userAgents = [
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
          ];
        
          const randomUserAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
          const options = {
            headers: {
              'User-Agent': randomUserAgent,
            },
          };
          
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
  