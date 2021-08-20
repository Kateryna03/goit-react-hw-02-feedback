import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ state, handleIncrement, name }) => {
  // console.log(name);
  return (
    <button key={state} type="button" onClick={handleIncrement}>
      {name}
    </button>

    // {/* <button type="button" onClick={handleIncrement}>
    //   {state.neutral}
    // </button>
    // <button type="button" onClick={handleIncrement}>
    //   {state.bad}
    //     </button> */}
  );
};

Buttons.propTypes = {
  state: PropTypes.object.isRequired,
  handleIncrement: PropTypes.func.isRequired,
};

export default Buttons;
