import React from 'react';

class QuestionItem extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      hover: false
    }
  }

  toggle = () => {
    this.setState({visible: !this.state.visible})
  }

  onMouseOver = () => {
    this.setState({hover: true})
  }

  onMouseOut = () => {
    this.setState({hover: false})
  }

  showDetails = () => {
    console.log('show details')
  }

  render() {
    let {question, answer} = this.props.item;
    return (
      <div className='question-item'>
      <div className='card' onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseOut}>
        <p className='question'>{question}</p>
        {this.state.hover && 
        <div className='item-options'>
          <button onClick={this.toggle} className='answer-btn'>Answer</button>
          <button onClick={this.showDetails} className='detail-btn'>Details</button>
        </div>
      }
      </div>
      <div className={this.state.visible ? 'showing' : 'hiding'}>
        <p className='answer'>{answer}</p>
      </div>
      </div>
    )
  }
}

export default QuestionItem;