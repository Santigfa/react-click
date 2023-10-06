import React from 'react';
import '../hoja-de-estilos/Contador.css'


function contador({numClics}){
  return (
    <div className='contador'>
      {numClics}
    </div>
  )
}

export default contador;