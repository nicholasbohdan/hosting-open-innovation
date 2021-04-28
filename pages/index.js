import Head from 'next/head'
import { connect } from 'react-redux';
import styles from '../styles/Home.module.css'

function Dashboard(props) {
  console.log(props)
  return (
    <div>
    dashboard
    </div>
  )
  // const mapStateToProps = state => ({
  //   ManageUserReducer: state.ManageUserReducer,
  // });
}
export default Dashboard;