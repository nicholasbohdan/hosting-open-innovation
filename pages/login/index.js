import Head from 'next/head'
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import Textfield from '@/components/Textfield';
import styles from '@/styles/Login.module.css';

const schema = yup.object().shape({
  firstName: yup.string().required('Name Is Required'),
});

export default function Login() {
  const handleOnSubmit = (value) => {
    console.log(value)
  }
  return (
    <div>
      <div className={styles.grid_container}>
        <div className={styles.loginLeft}></div>
        <div className={styles.loginRight}>
        <h1 style={{ color:"#306964" }}>Kalbe Idea Platform</h1>
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={schema}
          onSubmit={handleOnSubmit}
        >
        {({
          handleSubmit,
            handleblur,
          /* and other goodies */
          }) => (
              <Form onSubmit={handleSubmit} id={'login'}>
                  <div>
                    <div>
                      <div className={styles.fieldLogin}>
                        <Textfield
                          id={'email'}
                          name={'email'}
                          label={'Email'}
                          placeholder={'Masukan Email'}
                          type={'email'}
                          handleblur={handleblur} 
                        />
                      </div>
                      <div className={styles.fieldLogin}>
                        <Textfield
                          id={'password'}
                          name={'password'}
                          label={'Password'}
                          placeholder={'Masukan Password'}
                          type={'password'}
                          handleblur={handleblur} 
                        />
                      </div>
                    <button className={styles.buttonLogin} type="submit" form={'login'}>Login</button>
                    <div className={styles.forgetPassword}>Forget Password</div>
                      
                    </div>
                      {/* <Button
                        color="secondary"
                        variant={'outlined'}
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.FontButton}
                      >
                        Back
                      </Button>
                      <Button
                        color="secondary"
                        variant={'outlined'}
                        className={classes.FontButton}
                        disabled={values.email === ""}
                        onClick={this.handleNext}>
                        Next
                      </Button> */}
                  </div>
              </Form>
          )}
          </Formik>
        </div>
      </div>
    </div>
  // </div>
  )
}
