import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.alertStyle}`}>
        <i className='fas fa-info-circle'></i> <strong>{alert.msg}</strong>
      </div>
    )
  );
};

export default Alert;
