import React from 'react';
import ReduxStoreWrapper from './ReduxStoreWrapper';

const Circle = ({color}) => {

  return (
    <div className={`circle ${color}`} >
    {color}
    <p>
      <ReduxStoreWrapper selectors={{count:`color[${color}].count`}}>
        { ({ count }) => {

          return count;
        } }
      </ReduxStoreWrapper>
      </p>
      </div>

  )
}

export default Circle;
