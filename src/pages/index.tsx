import Head from "next/head";
import Header from "@/components/Header";
import ProductListPage from "@/components/ProductListPage";
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Product Listing Page | Appscrip</title>
        <meta name="description" content="Explore a range of cool products!" />
      </Head>
      <main>
        <Header />
        <ProductListPage />
      </main>
    </>
  );
}
