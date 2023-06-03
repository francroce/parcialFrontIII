import React, { useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Style from './app.module.css';

function App() {
  const[isCard,setIsCard] = useState(false)
  const[item,setItem] = useState({})

  function crearCard(item){
    if(item.iNombre && item.iColor){
      setIsCard(true);
      setItem(item)
    }else{
      setIsCard(false);
    }
  }
  return (
    <div className={Style.app}>
      <h1>Elige un color</h1>
      <Form crearCard={crearCard}/>
      {isCard ? <Card nombre={item.iNombre} color={item.iColor}/> : undefined}
    </div>
  );
}

export default App
