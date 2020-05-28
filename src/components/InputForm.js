import React from 'react';
import {connect} from 'react-redux';
import {addTrivia} from '../redux/actions';

class InputForm extends React.Component {

  constructor() {
    super();
    this.state = {
      question: '',
      answer: '',
      category: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addTrivia(this.state);
  }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className='card'>
        <form onSubmit={this.handleSubmit}>
          <label>Question</label>
          <input type='search' name='question' onChange={this.handleChange} required />

          <label>Answer</label>
          <input type='search' name='answer' onChange={this.handleChange} required />

          <label>Category</label>
          <select name='category' onChange={this.handleChange} required>
            <option value=''>Select One</option>
            <option value='Disney'>Disney</option>
            <option value='Food'>Food</option>
          </select>

        <div className='form-btn'>
          <input type='submit' id='btn-save' className='btn' value='Submit' />
          <input type='reset' id='btn-clear' className='btn' value='Reset' />
        </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {trivia: state.trivia}
}

export default connect(mapStateToProps, {addTrivia})(InputForm);
