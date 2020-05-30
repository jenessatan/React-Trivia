import React from 'react';

class Details extends React.Component {
    render() {
        let {question, answer, category} = this.props.trivia;
        return (
            <div className='details-modal'>
                <button>Close Modal</button>
                <p>{question}</p>
                <p>{answer}</p>
                <p>{category}</p>
                <button>Delete Trivia</button>
            </div>
        )
    }
}

export default Details;