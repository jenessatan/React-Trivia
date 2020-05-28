import React from 'react';

class Filter extends React.Component {
  render() {
return (<div className='filters'>
    <p>Filter: </p>
      <button>All</button>
      <button>Disney</button>
      <button>Food</button>
    </div>)
  }
}

export default Filter;