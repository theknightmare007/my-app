import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ShowPrice from '@/myPages/prices'
import PriceTable from '@/data/fetch'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 align="center">CryptoCurrency Prices flashing</h1>
     <PriceTable />
    </div>
  )
}
