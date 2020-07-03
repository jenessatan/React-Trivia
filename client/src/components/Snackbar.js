import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {hideSnackbar} from '../redux/actions'
import '../styles/Snackbar.css';

const Snackbar = (props) => {
  let {snackbar, hideSnackbar} = props;

  useEffect(() => {
    let timer = setTimeout(() => hideSnackbar(), 3000)
    return () => clearTimeout(timer);
  })

  return (
    <div className={snackbar.isOpen ? "show" : ""} id="snackbar" >
      <p>{snackbar.data}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    snackbar: state.snackbar
  }
}

export default connect(mapStateToProps, {hideSnackbar})(Snackbar);