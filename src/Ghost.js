import React from 'react';

const Ghost = (props) => {
  const ghost = props.ghost;
  const selectGhost = props.selectGhost;
  return (
    <div>
    <img src={ghost} alt="" onClick={()=>selectGhost(ghost)}/>
    </div>
  )
};

export default Ghost;
