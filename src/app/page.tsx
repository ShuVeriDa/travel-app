'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './assets/styles/page.module.css'
import {Footer} from "@/components/common/footer/Footer";
import {Layout} from "@/components/common/Layout";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      Home page
    </Layout>
  )
}
