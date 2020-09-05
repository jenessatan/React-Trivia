import React from 'react';

class QuestionItem extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      hover: null,
    }
  }

  toggle = () => {
    this.setState({visible: !this.state.visible})
  }

  onMouseOver = () => {
    this.setState({hover: this.props.item._id})
  }

  onMouseOut = () => {
    this.setState({hover: null})
  }

  toggleDetails = () => {
    this.setState({showModal: !this.state.showModal});
  }

  render() {
    let {question, answer, _id} = this.props.item;
    return (
      <div className='question-item'>
      <div className={this.state.hover === _id ? 'card hover' : 'card'} onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseOut}>
        {(this.state.hover !== _id) && <p className='question'>{question}</p>}
        {(this.state.hover === _id) && 
        <div className='item-options'>
          <button onClick={this.toggle} className='answer-btn'>Answer</button>
          <button onClick={()=> this.props.openModal(this.props.item)} className='detail-btn'>Details</button>
        </div>
      }
      </div>
      <div className={(this.state.visible ? 'showing' : 'hiding')+' answer-div'}>
        <p className='answer'>{answer}</p>
      </div>
      </div>
    )
  }
}

export default QuestionItem;