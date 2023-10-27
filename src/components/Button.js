import React from 'react';

function Button() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (

      <button className="button" onClick={refreshPage}><strong> Пройти снова! </strong></button>

  );
}

export default Button;
