import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Filters from "@/components/Filters";
import ProductGrid from "@/components/ProductGrid";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

function ProductShema({ products }){
  const schema = {
    '@context': 'https://schema.org',
    '@type':'ItemList',
    name: 'Product Listening',
    itemListElement: products.map((p, i) => ({
       '@type': 'Product',
       position: i+1,
       item: {
        '@type': 'Product',
        name: p.title,
        position: i+1,
        image: p.image,
        description: p.description,
        offers:{
          '@type': 'Offer',
            price: p.price,
            priceCurrency: 'Rupees',
          },
        },
    })),
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema)}}
      />
  );
}

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home({ products = []}) {

  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('');

  let filtered = selectedCategory ? (products || []).filter((p) => p.category === selectedCategory) : (products || []);

  if(sortBy === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price);
  if(sortBy === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price);
  if(sortBy === 'rating') filtered = [...filtered].sort((a, b) => b.rating.rate - a.rating.rate);

  return (
    <>
      <Head>
        <title>Product Listining Page | Shop Fashion, Electronics & Jewellery</title>
        <meta name="description" content="Brows our curated collection of fashion, electronics and jewellery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Product Listing Page"/>
        <meta property="og:description" content="Shop fashion, electroics & jewllery." />
        <link rel="icon" href="/favicon.ico" />
        <ProductShema products={products} />
      </Head>

      <Header>

      </Header>

      {/* <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      > */}
        <main >
        
        <Hero>

        </Hero>

          <div className={styles.toolbar}>
            <p className={styles.itemCount}>{filtered.length} ITEMS</p>
            <div className={styles.controls}>
              <label htmlFor="sort" className={styles.srOnly}>Sort by</label>
              <select
                id="sort"
                className={styles.sortSelect}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)} 
                > 
                <option value=""> RECOMENDED</option>
                <option value="price-asc"> PRICE: LOW TO HIGH</option>
                <option value="price-desc"> PRICE: HIGH TO LOW</option>
                <option value="rating"> TOP RATED</option>
                </select>
            </div>
          </div>

          <div className={styles.layout}>
            <Filters 
              selectedCategory= {selectedCategory}
              onCategoryChange={setSelectedCategory} 
              />
              <div className={styles.content}>
                <ProductGrid products={filtered} />
              </div>
            </div>
          </main>

        <footer />
          
      </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      headers: { "Content-Type": "application/json" },
    });
    const products = await res.json();
    console.log("Total products fetched:", products.length);
    return {
      props: {
        products: Array.isArray(products) ? products : [],
      },
    };
  } catch (error) {
    console.error("API fetch error:", error.message);
    return { props: { products: [] } };
  }
}