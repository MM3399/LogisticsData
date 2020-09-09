import React from 'react';
import './App.css';
import Data from './containers/Data.js/Data';
import * as actions from './store/actions/index';
import { connect } from 'react-redux';
import {useEffect} from 'react'

function App(props) {

  useEffect(() => {
    //props.getData();
  }, [])
  return (
    <div className="App">
        <Data db={props.db}></Data>
    </div>
  );
}

const mapStateToProps = (state) => ({
  db: state.db
})

const mapDispatchToProps =  dispatch => (
  {
  getData: () => dispatch (actions.getDataFromServer())
  })

export default connect(mapStateToProps,mapDispatchToProps)(App);
