import React from 'react';

class Details extends React.Component {
    render() {
        return (
            <div className='details-modal'>
                <button>Close Modal</button>
                <p>Questions</p>
                <p>Answer</p>
                <p>Category</p>
                <button>Delete Trivia</button>
            </div>
        )
    }
}

export default Details;