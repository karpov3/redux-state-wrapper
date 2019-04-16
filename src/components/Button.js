import React from 'react';
import ReduxStoreWrapper from './ReduxStoreWrapper';
import { updateColorAction } from '../actions';
import { connect } from 'react-redux';

const Button = ({updateColorAction, color}) => {

  return (
    <div className="container">

    <ReduxStoreWrapper selectors={{color:`color.current`}}>
      { ({ color }) => {
        return (
          <button className={`button ${color}`} onClick={() => updateColorAction()}>{`change ${color} color`}</button>
        )
      } }
    </ReduxStoreWrapper>
    </div>
  )
}

export default connect(null, { updateColorAction }, null)(Button);
