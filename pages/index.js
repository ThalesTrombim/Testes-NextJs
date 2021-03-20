import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {Layout} from '../components/Layout';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        pagina home
      </Layout>
    </div>
  )
}
