import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SHOW_ALERT, CLEAR_ALERT } from '../../types';

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //Show Alert
  const showAlert = (msg, alertStyle) => {
    dispatch({ type: SHOW_ALERT, payload: { msg, alertStyle } });

    setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        showAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;

// import React, { useReducer } from 'react';
// import { SHOW_ALERT, CLEAR_ALERT } from '../../types';
// import AlertContext from './alertContext';
// import AlertReducer from './alertReducer';

// const AlertState = (props) => {
//   const initialState = null;

//   const [state, dispatch] = useReducer(AlertReducer, initialState);

//   //Show Alert
//   const showAlert = (msg, alertStyle) => {
//     dispatch({ type: SHOW_ALERT, payload: { msg, alertStyle } });

//     setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3000);
//   };

//   return (
//     <AlertContext.Provider
//       value={{
//         alert: state,
//         showAlert,
//       }}
//     >
//       {props.children}
//     </AlertContext.Provider>
//   );
// };

// export default AlertState;
