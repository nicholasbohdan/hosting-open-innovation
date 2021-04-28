import Head from 'next/head'
import styles from '../../../styles/IdeaCatalog.module.css';
import Header from '../../../components/header';
import FilterByTopic from '../../../components/filterbytopic';

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
    <div className={styles.homeIdeaCatalogSubHeader}>
        {/* <div> */}
            <h2>
                Idea Catalog
            </h2>
        {/* </div> */}
        <div>
        <div className={styles.fieldSearch}>
            {/* <i className="material-icons" style={{
                padding: 10,
                // background: dodgerblue;
                // color: white;
                // minWidth: 50,
                textAlign: 'center',
             }}>search</i> */}
            <input placeholder="Search" className={styles.input_field}/>
        </div>
        </div>
        <div className={styles.submitIdeaButton}>
            <a href={'/idea_catalog/submit_idea'}> + Submit Your Idea</a>
        </div>
    </div>
    <hr />
    <div className={styles.homeIdeaCatalog}>
        <div>
            <div className={styles.homeIdeaCatalogBorder}>
                <FilterByTopic />
            </div>
        </div>
        <div>
            <div className={styles.trendingIdeasListContainer}>
                <a href="/idea_catalog/detail">
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
                </a>
                <a href="/idea_catalog/detail">
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
                </a>
                <a href="/idea_catalog/detail">
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
                </a>
                <a href="/idea_catalog/detail">
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
                </a>
            </div>
        </div>
        
    </div>
  </div>
  )
}
