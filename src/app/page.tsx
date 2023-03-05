'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './assets/styles/page.module.css'
import {Footer} from "@/app/components/common/footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Footer />
    </div>
  )
}
