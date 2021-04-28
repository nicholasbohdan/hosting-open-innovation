import Head from 'next/head'
import React from 'react';
import styles from '../../../styles/ideaCatalog.module.css';
import Header from '../../../components/header';

export default function DetailIdea() {
  const [permission, setPermission] = React.useState('0')
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
       Back
    </div>
    {permission === '0' ? ( // user page
    <div className={styles.ideaCatalogDetailContainer}>
      <div>
        <div className={styles.coverImgContainer}>
          <img
            src='https://static.wikia.nocookie.net/divided-destiny/images/8/86/Avatar_Aang.png/revision/latest?cb=20200131101151'
            alt=""
            className={styles.coverImg}
          />
        </div>
        <div style={{ display: 'flex' }}>
          <img
            src='https://static.wikia.nocookie.net/divided-destiny/images/8/86/Avatar_Aang.png/revision/latest?cb=20200131101151'
            alt=""
            className={styles.avatar} 
          />
          <div>
            <div>
              Arya Wukti
            </div>
            <div>
              Lv. 3 The Inovator
            </div>
          </div>
        </div>
        <div>
          2 feb 2021
        </div>
        <div>
          Kalbe Chatbot untk Pelayanan Customer Sistem 4.0
        </div>
        <div>
          <p style={{ width: '100%' }}>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.coverImgContainer}>
          <img
            src='https://static.wikia.nocookie.net/divided-destiny/images/8/86/Avatar_Aang.png/revision/latest?cb=20200131101151'
            alt=""
            className={styles.coverImg}
          />
        </div>
        <div>
          <p style={{ width: '100%' }}>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        
        <div>
          <p style={{ width: '100%' }}>
            Lorem ipsum dolor sit amet,
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridAutoFlow: 'column',
          justifyContent: 'space-between'
        }}>
          <div> 212 47 </div>
          <div> 11 comment</div>
        </div>
        <div style={{
          display: 'grid',
          gridAutoFlow: 'column'
        }}>
          <div className={styles.submitIdeaButton}>
            <a href={'/idea_catalog/submit_idea'}>Like</a>
          </div>
          <div className={styles.submitIdeaButton}>
            <a href={'/idea_catalog/submit_idea'}>Comment</a>
          </div>  
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '10% 90%',
          justifyContent: 'space-between'
        }}>
          <div>
            <img
              src='https://static.wikia.nocookie.net/divided-destiny/images/8/86/Avatar_Aang.png/revision/latest?cb=20200131101151'
              alt=""
              className={styles.avatar} 
            />
          </div>
          <div>
            <div style={{
              display: 'grid',
              gridAutoFlow: 'column',
              justifyContent: 'space-between'
            }}>
              <div>Shasa Junita</div>
              <div>01 Feb 21</div>
            </div>
            <div>
              asdasdasdasdasdsadasdasdasdasdasd
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          Topics
          <div className={styles.containerTopics}>
            <div className={styles.itemTopics}>
              Product/Service
            </div>
            <div className={styles.itemTopics}>
              Chat Bot
            </div>
          </div>
        </div>
        <div style={{ paddingTop: 14 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            justifyContent: 'space-between'
          }}>
            <div>
              Attachment
            </div>
            <div>
            Download All
            </div>
          </div>
          <div className={styles.containerAttachment}>
            <div className={styles.itemAttachment}>
              <div>
                <p>Chat Bot Planning.pptx</p>
              </div>
              <div style={{ margin: 12 }}>
                <i class="material-icons">file_download</i>
              </div>
              {/* <p>Product</p><p>Product</p> */}
            </div>
            <div className={styles.itemAttachment}>
              <div>
                <p>videoperaga.mp4</p>
              </div>
              <div style={{ margin: 12 }}>
                <i class="material-icons">file_download</i>
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: 14 }}>
          <div className={styles.teamMemberContainer}>
            <div>
              Team Member - Briliant Boys
            </div>
            <div style={{ display: 'flex', padding: 10 }}>
              <img
                src='https://static.wikia.nocookie.net/divided-destiny/images/8/86/Avatar_Aang.png/revision/latest?cb=20200131101151'
                alt=""
                className={styles.avatar} 
              />
              <div>
                <div>
                  Arya Wukti
                </div>
                <div>
                  Lv. 3 The Inovator
                </div>
              </div>
            </div>
            <div className={styles.submitIdeaButton}>
              <a href={'/idea_catalog/submit_idea'}>Request to Join Team</a>
            </div>
            <div className={styles.submitIdeaButton}>
              <a href={'/profile/chat'}>Chat Author</a>
            </div>  
          </div>
        </div>
      </div>
    </div>
    ): permission === '1' ? ( // waiting verification
    <div className={styles.ideaCatalogDetailContainer}>
      <div>
        <div className={styles.coverImgContainer}>
          <img
            src='https://static.wikia.nocookie.net/divided-destiny/images/8/86/Avatar_Aang.png/revision/latest?cb=20200131101151'
            alt=""
            className={styles.coverImg}
          />
        </div>
        <div style={{ display: 'flex' }}>
          <img
            src='https://static.wikia.nocookie.net/divided-destiny/images/8/86/Avatar_Aang.png/revision/latest?cb=20200131101151'
            alt=""
            className={styles.avatar} 
          />
          <div>
            <div>
              Arya Wukti
            </div>
            <div>
              Lv. 3 The Inovator
            </div>
          </div>
        </div>
        <div>
          2 feb 2021
        </div>
        <div>
          Kalbe Chatbot untk Pelayanan Customer Sistem 4.0
        </div>
        <div>
          <p style={{ width: '100%' }}>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div>
        <div style={{
          display: 'grid',
          gridAutoFlow: 'column'
        }}>
          <div className={styles.submitIdeaButton}>
            <a href={'/idea_catalog/submit_idea'}>Delete</a>
          </div>
          <div className={styles.submitIdeaButton}>
            <a href={'/idea_catalog/submit_idea'}>Edit</a>
          </div>  
        </div>
        <div>
          Topics
          <div className={styles.containerTopics}>
            <div className={styles.itemTopics}>
              Product/Service
            </div>
            <div className={styles.itemTopics}>
              Chat Bot
            </div>
          </div>
        </div>
        <div style={{ paddingTop: 14 }}>
          <div className={styles.teamMemberContainer}>
            <div>
              Team Member - Briliant Boys
            </div>
            <div style={{ display: 'flex', padding: 10 }}>
              <img
                src='https://static.wikia.nocookie.net/divided-destiny/images/8/86/Avatar_Aang.png/revision/latest?cb=20200131101151'
                alt=""
                className={styles.avatar} 
              />
              <div>
                <div>
                  Arya Wukti
                </div>
                <div>
                  Lv. 3 The Inovator
                </div>
              </div>
            </div> 
          </div>
        </div>
        <div style={{ paddingTop: 14 }}>
          <div className={styles.teamMemberContainer}>
            <div style={{
              display: 'grid',
              gridAutoFlow: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
              Idea Status
              </div>
              <div>
              Verify proses
              </div>
            </div>
            <hr/>
            <div>
              oaskdoaskoaskdoaksaodkosadk
            </div>
          </div>
        </div>
      </div>
    </div>
    ) : ( //publisher page
    <div className={styles.ideaCatalogDetailContainer}>
      <div>
        <div className={styles.coverImgContainer}>
          <img
            src='https://static.wikia.nocookie.net/divided-destiny/images/8/86/Avatar_Aang.png/revision/latest?cb=20200131101151'
            alt=""
            className={styles.coverImg}
          />
        </div>
        <div style={{ display: 'flex' }}>
          <img
            src='https://static.wikia.nocookie.net/divided-destiny/images/8/86/Avatar_Aang.png/revision/latest?cb=20200131101151'
            alt=""
            className={styles.avatar} 
          />
          <div>
            <div>
              Arya Wukti
            </div>
            <div>
              Lv. 3 The Inovator
            </div>
          </div>
        </div>
        <div>
          2 feb 2021
        </div>
        <div>
          Kalbe Chatbot untk Pelayanan Customer Sistem 4.0
        </div>
        <div>
          <p style={{ width: '100%' }}>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridAutoFlow: 'column',
          justifyContent: 'space-between'
        }}>
          <div> 212 47 </div>
          <div> 11 comment</div>
        </div>
        <div style={{
          display: 'grid',
          gridAutoFlow: 'column'
        }}>
          <div className={styles.submitIdeaButton}>
            <a href={'/idea_catalog/submit_idea'}>Like</a>
          </div>
          <div className={styles.submitIdeaButton}>
            <a href={'/idea_catalog/submit_idea'}>Comment</a>
          </div>  
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '10% 90%',
          justifyContent: 'space-between'
        }}>
          <div>
            <img
              src='https://static.wikia.nocookie.net/divided-destiny/images/8/86/Avatar_Aang.png/revision/latest?cb=20200131101151'
              alt=""
              className={styles.avatar} 
            />
          </div>
          <div>
            <div style={{
              display: 'grid',
              gridAutoFlow: 'column',
              justifyContent: 'space-between'
            }}>
              <div>Shasa Junita</div>
              <div>01 Feb 21</div>
            </div>
            <div>
              asdasdasdasdasdsadasdasdasdasdasd
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={{
          display: 'grid',
          gridAutoFlow: 'column'
        }}>
          <div className={styles.submitIdeaButton}>
            <a href={'/idea_catalog/submit_idea'}>Delete</a>
          </div>
          <div className={styles.submitIdeaButton}>
            <a href={'/idea_catalog/submit_idea'}>Edit</a>
          </div>  
        </div>
        <div>
          Topics
          <div className={styles.containerTopics}>
            <div className={styles.itemTopics}>
              Product/Service
            </div>
            <div className={styles.itemTopics}>
              Chat Bot
            </div>
          </div>
        </div>
        <div style={{ paddingTop: 14 }}>
          <div className={styles.teamMemberContainer}>
            <div>
              Team Member - Briliant Boys
            </div>
            <div style={{ display: 'flex', padding: 10 }}>
              <img
                src='https://static.wikia.nocookie.net/divided-destiny/images/8/86/Avatar_Aang.png/revision/latest?cb=20200131101151'
                alt=""
                className={styles.avatar} 
              />
              <div>
                <div>
                  Arya Wukti
                </div>
                <div>
                  Lv. 3 The Inovator
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: 14 }}>
          <div className={styles.submitIdeaButton}>
            <a href={'/idea_catalog/submit_idea'}>Submit to Konvensi Inovasi</a>
          </div>
        </div>
      </div>
    </div>
    )}
  </div>
  )
}
