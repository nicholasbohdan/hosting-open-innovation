import Head from 'next/head'
import styles from '../../../styles/ChatComponent.module.css';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function ChatInbox() {
  const handleOnSubmit = (value) => {
    console.log(value)
  }
  return (
  <div>
    <Head>
      <title>Chat</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
    <Header />
    <div className={styles.homeChat}>
        <div className={styles.homeGrid}>
            <div className={styles.borderContainer}>
              <input placeholder="Search" className={styles.input_field}/>
              <div style={{ paddingTop: 12 }}>
                <div style={{ display: 'flex', padding: 10 }}>
                  <img
                    src='https://static.wikia.nocookie.net/divided-destiny/images/8/86/Avatar_Aang.png/revision/latest?cb=20200131101151'
                    alt=""
                    className={styles.avatar} 
                  />
                  <div style={{ width: '100%' }}>
                    <div>
                      Arya Wukti
                    </div>
                    <div style={{
                      display: 'grid',
                      gridAutoFlow: 'column',
                      justifyContent: 'space-between'
                    }}>
                      <div>
                        beli 1 dong
                      </div>
                      <div>
                        7 Feb 21
                      </div>
                    </div>
                  </div>
                </div>
                <hr/>
              </div>
            </div>
            <div className={styles.borderContainer}>
            <div style={{
              display: 'grid',
              // gridAutoFlow: 'column',
              gridTemplateColumns: '10% 90%'
            }}>
              <img
                src='https://static.wikia.nocookie.net/divided-destiny/images/8/86/Avatar_Aang.png/revision/latest?cb=20200131101151'
                alt=""
                className={styles.avatar} 
              />
              <div>
                Arya Wukti
              </div>
            </div>
            <hr/>
            </div>
        </div>
    </div>
    <Footer />
  </div>
  )
}
