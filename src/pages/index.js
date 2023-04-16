import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ShowPrice from '@/myPages/prices'
import PriceTable from '@/data/fetch'
import Swap from '@/myPages/Swap'
import LowCapAlts from '@/data/lowCapAlts'
import SwapPage from '@/data/lowCapAlts'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [capdata, setCapdata] = useState({});

  useEffect(() => {
    const getCapdata = async () => {
      const capdata = await SwapPage();
      setCapdata(capdata);
    };
    getCapdata();
  }, []);

  return (
    <div>
      <div>
        <h1 align="center">CryptoCurrency Prices flashing<br/>Made by @TheKnightzzz on telegram / @0xTheKnightmare on twitter</h1>
        <PriceTable />
      </div>
      <div align="center">
        <h1>Low priced altcoins chart (less than 0.03 USDT) , pay attention only to USDT and BUSD pairs</h1>
  {Object.keys(capdata).length > 0 ? (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(capdata)
          .sort(([symbol1], [symbol2]) => symbol1.localeCompare(symbol2))
          .map(([symbol, price]) => (
            <tr key={symbol}>
              <td>{symbol}</td>
              <td>{Number(price).toFixed(8)}</td>
            </tr>
          ))}
      </tbody>
    </table>
  ) : (
    "Loading..."
  )}
</div>
    </div>
  );
}