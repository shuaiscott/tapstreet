import React from 'react';
const List = (props) => {
  const { deet } = props;
  if (!deet) return <p>No deets, sorry</p>;
  return (
          <div id='{deet.id'>
            <h2 className='name'>{deet.name}</h2>
            <h3 className='name'>{deet.id}</h3>
          </div>
  );
};
export default List;