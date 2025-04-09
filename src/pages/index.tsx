import Head from "next/head";
import Header from "@/components/Header";
import ProductListPage from "@/components/ProductListPage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Product Listing Page | Appscrip</title>
        <meta name="description" content="Explore a range of cool products!" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Product Listing Page",
              description: "Explore a range of cool products!",
              publisher: {
                "@type": "Organization",
                name: "Appscrip",
              },
            }),
          }}
        />
      </Head>
      <main>
        <Header />
        <ProductListPage />
        <Footer />
      </main>
    </>
  );
}
