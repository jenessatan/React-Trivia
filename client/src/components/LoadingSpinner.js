import React from 'react';
import {connect} from 'react-redux';
import '../styles/LoadingSpinner.css';

class LoadingSpinner extends React.Component {
  render() {
    return (<div>
      {this.props.loading? <div className='loading-container'><div className='spinner'></div></div> : null}
    </div>)
  }
}

const mapStateToProps = state => ({
  loading: state.trivia.loading
})

export default connect(mapStateToProps)(LoadingSpinner);