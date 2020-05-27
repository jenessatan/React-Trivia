import React from 'react';

class InputForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    return false;
  }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let res = {[name]: value};
    console.log(res);
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
          <select name='category' required>
            <option value=''>Select One</option>
            <option value='Disney'>Disney</option>
            <option value='Food'>Food</option>
          </select>

          <input type='submit' value='Submit' />
          <input type='reset' value='Reset' />

        </form>
      </div>
    )
  }
}

export default InputForm;