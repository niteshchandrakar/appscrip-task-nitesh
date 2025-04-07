import Head from "next/head";
import { GetServerSideProps } from "next";
import ProductCard from "../components/ProductCard";
import Header from "@/components/Header";
import ProductListPage from "@/components/ProductListPage";
// import styles from '../styles/Home.module.css'

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type Props = {
  products: Product[];
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Product Listing Page | Appscrip</title>
        <meta name="description" content="Explore a range of cool products!" />
      </Head>
      <main>
        {/* <Header /> */}
        <ProductListPage />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  return {
    props: {
      products,
    },
  };
};
