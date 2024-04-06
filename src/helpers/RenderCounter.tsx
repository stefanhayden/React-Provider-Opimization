import React, { useRef } from 'react';

// This does not use memo() because we want it 
// to render every time the parent renders
export const RenderCounter = () => {
    const count = useRef(0);
    count.current = count.current + 1;
    const style = {
      outline: '1px solid #CCC',
      backgroundColor: '#EEE',
      padding: 3,
      display: 'inline-block',
      borderRadius: 5,
      marginTop: 10
    }
    return (<div>
      <div style={style}>Renders: {count.current}</div>
    </div>)
  }