import Head from 'next/head'
import { useState } from 'react'
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import styles from '../../../styles/IdeaCatalog.module.css';
import Header from '../../../components/Header';
import Textfield from '../../../components/Textfield';
import SelectField from '../../../components/Selectfield';
import Textarea from '../../../components/Textarea';
import RadioButton from '../../../components/Radiobutton';
import Footer from '../../../components/Footer';

const schema = yup.object().shape({
  firstName: yup.string().required('Name Is Required'),
});

export default function IdeaCatalogHome() {
  const [listData, setListData] = useState(
    [
      {
        name: 'Topic 1',
        id: 1
      },
      {
        name: 'Topic 2',
        id: 2
      },
      {
        name: 'Topic 3',
        id: 3
      },
    ]
  );
  const [radioListData, setRadioListData] = useState(
    [
      {
        name: 'Topic 1',
        id: 1
      },
      {
        name: 'Topic 2',
        id: 2
      },
    ]
  );
  const handleOnSubmit = (value) => {
    console.log(value)
  }
  return (
  <div>
    <Head>
      <title>Input Ideas</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
    <Header />
    <div className={styles.submitIdeasContainer}>
       <h2>Submit Idea</h2>
       <Formik
          initialValues={{
            firstName: '',
          }}
          validationSchema={schema}
          onSubmit={handleOnSubmit}
        >
        {({
          handleSubmit,
            handleblur,
          /* and other goodies */
          }) => (
              <Form onSubmit={handleSubmit} id={'submit_idea'}>
                  <div>
                    <div>
                      {/* <Field id="firstName" name="firstName" placeholder="Jane" handleblur={handleblur} /> */}
                    <div>
                      <div >
                        <img alt='img'/>
                        <Textfield
                          id={'cover_image'}
                          name={'cover_image'}
                          label={'Cover Image'}
                          type={'image'}
                          handleblur={handleblur} 
                        />
                      </div>
                      <div >
                        <Textfield
                          id={'idea_title'}
                          name={'idea_title'}
                          label={'Idea Title'}
                          type={'text'}
                          handleblur={handleblur} 
                        />
                      </div>
                      <div>
                        <SelectField
                          id={'topic'}
                          name={'topic'}
                          label={' Topic'}
                          type={'select'}
                          handleblur={handleblur}
                          options={listData}
                        />
                        {/* <Textfield
                          id={'topic'}
                          name={'topic'}
                          label={'Topic'}
                          type={'text'}
                          handleblur={handleblur} 
                        /> */}
                      </div>
                      <div>
                        <SelectField
                          id={'sub_topic'}
                          name={'sub_topic'}
                          label={' Sub Topic'}
                          type={'select'}
                          handleblur={handleblur}
                          options={listData}
                        />
                        {/* <Textfield
                          id={'sub_topic'}
                          name={'sub_topic'}
                          label={'Sub Topic'}
                          type={'text'}
                          handleblur={handleblur} 
                        /> */}
                      </div>
                      <div >
                        <Textarea
                          id={'description'}
                          name={'description'}
                          label={'Description'}
                          type={'textarea'}
                          handleblur={handleblur} 
                        />
                      </div>
                      <div >
                        <Textfield
                          id={'attactment_file'}
                          name={'attactment_file'}
                          label={'Attactment File'}
                          type={'text'}
                          handleblur={handleblur} 
                        />
                      </div>
                      <div >
                        <RadioButton
                          id={'type_of_creator'}
                          name={'type_of_creator'}
                          label={'Type of Creator'}
                          type={'radio'}
                          options={radioListData}
                          handleblur={handleblur} 
                        />
                        {/* <Textfield
                          id={'type_of_creator'}
                          name={'type_of_creator'}
                          label={'Type of Creator'}
                          type={'text'}
                          handleblur={handleblur} 
                        /> */}
                      </div>
                      <div >
                        <Textfield
                          id={'team_name'}
                          name={'team_name'}
                          label={'Team Name'}
                          type={'text'}
                          handleblur={handleblur} 
                        />
                      </div>
                      <div >
                        <Textfield
                          id={'team_member'}
                          name={'team_member'}
                          label={'Team Member'}
                          type={'text'}
                          handleblur={handleblur} 
                        />
                      </div>
                      <div >
                        <Textfield
                          id={'hashtag'}
                          name={'hashtag'}
                          label={'Hashtag'}
                          type={'text'}
                          handleblur={handleblur} 
                        />
                      </div>
                      
                    </div>
                    <button style={{ width: '100%', maxWidth: 1000 }} type="submit" form={'login'}>Submit Idea</button>
                    </div>
                  </div>
              </Form>
          )}
          </Formik>
    </div>
    <Footer />
  </div>
  )
}
