import Head from "next/head";
import React, { useState, useContext, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

import { getBanner, getMenu } from "../helper";
import Footer from "../components/Footer";
import Banner from "components/Banner";
import TopGiverList from "components/Topgiver";
import IdeasCard from "@/components/shared/IdeasCard";
import { Row, Button } from "reactstrap";
import IdeasCatalogCard from "components/shared/IdeasCatalogCard";

import Carousel from "components/shared/Carousel";

import Link from "next/link";
import Image from "next/image";

const carouselData = [
  {
    src:
      "https://images.unsplash.com/photo-1619446851981-064779c84cc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80",
    alt: "img1",
    btnText: "a1",
  },
  {
    src:
      "https://images.unsplash.com/photo-1619446851981-064779c84cc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80",
    alt: "img2",
    btnText: "a1",
  },
  {
    src:
      "https://images.unsplash.com/photo-1619446851981-064779c84cc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80",
    alt: "img3",
    btnText: "a1",
  },
  {
    src:
      "https://images.unsplash.com/photo-1619446851981-064779c84cc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80",
    alt: "img4",
    btnText: "a1",
  },
  {
    src:
      "https://images.unsplash.com/photo-1619446851981-064779c84cc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80",
    alt: "img5",
  },
];

export default function Home() {
  const [banner, setBanner] = useState();
  useEffect(() => {
    // const userData = JSON.parse(localStorage.getItem("user"));
    // if (userData) {
    // actions.userLogin(userData);
    getBanner()
      .then((data) => {
        setBanner(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    getMenu()
      .then((data) => {
        setBanner(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    // } else {
    //   Router.push("/");
    // }
  }, []);
  console.log(banner);
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Header />
      <div className={styles.home}>
        <Banner />
        <div className={styles.trendingIdeas}>
          <p>Company Update</p>
        </div>
        <div className={styles.companyUpdateContainer}>
          <Carousel show={2} loop={true}>
            {carouselData.map((data) => {
              return (
                <div key={data.alt}>
                  <div style={{ padding: 8 }} className={styles.container}>
                    <Image
                      src={data.src}
                      alt={data.alt}
                      width={1500}
                      height={600}
                      layout="responsive"
                    />
                    {data.btnText && (
                      <Button
                        color="success"
                        block
                        className={styles.carouselBtn}
                      >
                        <p className={styles.btnTextCarousel}>{data.alt}</p>
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>

        <div className={styles.trendingIdeas}>
          <p>Trending Ideas</p>
          <p>See All Ideas</p>
        </div>
        <div className={styles.trendingIdeasListContainer}>
          <Row>
            <IdeasCatalogCard />
            <IdeasCatalogCard />
            <IdeasCatalogCard />
            <IdeasCatalogCard />
          </Row>
        </div>

        <div>
          <p>Top Idea Creator</p>
        </div>

        <TopGiverList />

        <div className={styles.homeInformation}>
          <div className={styles.homeInformationItem1}>
            <h4>30+</h4>
            <p>Company from all around Kable Group</p>
          </div>
          <div className={styles.homeInformationItem2}>
            <h4>400+</h4>
            <p>Author who submitted their ideas</p>
          </div>
          <div className={styles.homeInformationItem3}>
            <h4>92%</h4>
            <p>Challenges Solved</p>
          </div>
          <div className={styles.homeInformationItem4}>
            <h4>100+</h4>
            <p>Company challenge</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
