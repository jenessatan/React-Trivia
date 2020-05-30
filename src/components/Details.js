import React from 'react';

class Details extends React.Component {
    render() {
        let {question, answer, category} = this.props.trivia;
        return (
            <div className='details-modal'>
                <button className='close-modal-btn' onClick={this.props.onClick}>&times;</button>
                <p>{question}</p>
                <p>{answer}</p>
                <p>{category}</p>
            </div>
        )
    }
}

export default Details;