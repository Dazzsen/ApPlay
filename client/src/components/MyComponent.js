import React from 'react';
import ReactVivus from 'react-vivus';
import svg from './example.svg';
 
const MyComponent = () => (
  <ReactVivus
    id="foo"
    option={{
      file: svg,
      animTimingFunction: 'EASE',
      type: 'oneByOne',
      onReady: console.log
    }}
    style={{ height: '200px', width: '200px', color:'white' }}
    callback={console.log}
  />
);
export default MyComponent;