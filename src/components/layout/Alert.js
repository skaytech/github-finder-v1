import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.alertStyle}`}>
        <i className='fas fa-info-circle'></i> <strong>{alert.msg}</strong>
      </div>
    )
  );
};

export default Alert;
