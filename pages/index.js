import Head from 'next/head'
import React, { useState, useContext, useEffect } from "react";
import styles from '../styles/Home.module.css'
import Header from '../components/Header';

import { getBanner, getMenu, } from "../helper";
import Footer from '../components/Footer';
import Banner from 'components/Banner';
import TopGiverList from 'components/Topgiver';
import IdeasCard from "@/components/shared/IdeasCard";
import { Row } from 'reactstrap';

export default function Home() {
  const [banner, setBanner] = useState();
  useEffect(() => {
    // const userData = JSON.parse(localStorage.getItem("user"));
    // if (userData) {
      // actions.userLogin(userData);
      getBanner()
        .then((data) => {
          setBanner(data);
          console.log(data)
        })
        .catch((err) => {
          console.log(err);
        });
      getMenu()
        .then((data) => {
          setBanner(data);
          console.log(data)
        })
        .catch((err) => {
          console.log(err);
        });
    // } else {
    //   Router.push("/");
    // }
  }, []);
  console.log(banner)
  return (
    <div>
    <Head>
      <title>Dashboard</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
    <Header />
    <div className={styles.home}>
      <Banner />
      <div className={styles.trendingIdeas}>
        <p>Company Update</p>
      </div>
      <div className={styles.companyUpdateContainer}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* <button>Back</button> */}
            <button className={styles.btn}><i class="material-icons">arrow_back_ios</i></button>
            <div className={styles.companyUpdate}>
              <div style={{ padding: 4 }}>
                <img
                  src='https://static.wikia.nocookie.net/divided-destiny/images/8/86/Avatar_Aang.png/revision/latest?cb=20200131101151'
                  alt=""
                  className={styles.coverImgCompanyUpdate}
                />
              </div>
              <div style={{ padding: 4 }}>
                <img
                  src='https://static.wikia.nocookie.net/divided-destiny/images/8/86/Avatar_Aang.png/revision/latest?cb=20200131101151'
                  alt=""
                  className={styles.coverImgCompanyUpdate}
                />
              </div>
            </div>
            <button className={styles.btn}><i class="material-icons">arrow_forward_ios</i></button>
            {/* <button>Next</button> */}
          </div>
      </div>
      
      <div className={styles.trendingIdeas}>
        <p>Trending Ideas</p>
        <p>See All Ideas</p>
      </div>
      <div className={styles.trendingIdeasListContainer}>
        <Row>
          <IdeasCard currentState="Finished" />  
          <IdeasCard currentState="Finished" />  
          <IdeasCard currentState="Finished" />  
          <IdeasCard currentState="Finished" />
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
  )
}
