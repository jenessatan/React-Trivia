import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {hideSnackbar} from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/Snackbar.css';

const Snackbar = (props) => {
  let {snackbar, hideSnackbar} = props;

  useEffect(() => {
    let timer = setTimeout(() => hideSnackbar(), 3000)
    return () => clearTimeout(timer);
  })

  return (
    <div className={snackbar.isOpen ? snackbar.type==="success"? "show success" : "show error" : ""} id="snackbar" >
      <p>{snackbar.data}</p>
      <FontAwesomeIcon 
              className="close" 
              icon={faTimes} 
              onClick={() => hideSnackbar()}
    />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    snackbar: state.snackbar
  }
}

export default connect(mapStateToProps, {hideSnackbar})(Snackbar);