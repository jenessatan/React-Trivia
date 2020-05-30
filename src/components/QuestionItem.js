import React from 'react';
import Details from './Details'

class QuestionItem extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      hover: false,
      showModal: false
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
    this.setState({showModal: true});
  }

  closeDetails = () => {
    this.setState({showModal:false})
  }

  render() {
    let {question, answer} = this.props.item;
    return (
      <div className='question-item'>
      <div className={this.state.hover ? 'card hover' : 'card'} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseOut}>
        {!this.state.hover && <p className='question'>{question}</p>}
        {this.state.hover && 
        <div className='item-options'>
          <button onClick={this.toggle} className='answer-btn'>Answer</button>
          <button onClick={this.showDetails} className='detail-btn'>Details</button>
        </div>
      }
      </div>
      <div className={(this.state.visible ? 'showing' : 'hiding')+' answer-div'}>
        <p className='answer'>{answer}</p>
      </div>
      {this.state.showModal && <Details trivia={this.props.item} onClick={this.closeDetails}/>}
      </div>
    )
  }
}

export default QuestionItem;