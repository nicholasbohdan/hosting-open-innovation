import Head from 'next/head'
import styles from '../../../styles/IdeaCatalog.module.css';
import Header from '../../../components/header';
import FilterByTopic from '../../../components/filterbytopic';
import Footer from '../../../components/footer';
import { Row } from 'reactstrap';
import IdeasCard from 'components/shared/IdeasCard';
import BaseLayout from 'components/layouts/BaseLayout';
import BaseLayoutFull from 'components/layouts/BaseLayoutFull';

export default function IdeaCatalogHome() {
  const handleOnSubmit = (value) => {
    console.log(value)
  }
  return (
  <div>
    <Head>
      <title>Home</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
    <Header />
    <BaseLayoutFull mode={'SubHeaderMenu'}>
        <div className={styles.homeIdeaCatalog}>
            <Row>
                <IdeasCard currentState="Finished" />  
                <IdeasCard currentState="Finished" />  
                <IdeasCard currentState="Finished" />  
                <IdeasCard currentState="Finished" />
            </Row>
        </div>
    </BaseLayoutFull>
    {/* <div className={styles.homeIdeaCatalogSubHeader}>
        
            <h2>
                Idea Catalog
            </h2>
        <div>
        <div className={styles.fieldSearch}>
            <input placeholder="Search" className={styles.input_field}/>
        </div>
        </div>
        <div className={styles.submitIdeaButton}>
            <a href={'/idea_catalog/submit_idea'}> + Submit Your Idea</a>
        </div>
    </div> */}
    {/* <div className={styles.homeIdeaCatalog}> */}
            {/* <a href="/idea_catalog/detail">
                    <div className={styles.homeIdeaCatalogBorder}>
                        <div className={styles.trendingIdeasList}>
                            <div style={{ display: 'flex' }}>
                            <img
                                src='https://static.wikia.nocookie.net/divided-destiny/images/8/86/Avatar_Aang.png/revision/latest?cb=20200131101151'
                                alt=""
                                className={styles.avatar} 
                            />
                            <div style={{ paddingLeft: 12 }}>
                            <p style={{ padding: '4px 0px 0px 0px', margin: 0 }}>Arya Wukti</p>
                            <p style={{ padding: '0px 0px 24px 0px', margin: 0 }}>3 Feb</p>
                            </div>
                            </div>
                        </div>
                            <img
                            src='https://static.wikia.nocookie.net/divided-destiny/images/8/86/Avatar_Aang.png/revision/latest?cb=20200131101151'
                            alt=""
                            className={styles.coverImg}
                            />
                            
                        <div className={styles.trendingIdeasList}>
                            <h4>Kalbe Chatbot</h4>
                            <p style={{ width: '100%' }}>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </a> */}
        
        
    {/* </div> */}
    <Footer />
  </div>
  )
}
