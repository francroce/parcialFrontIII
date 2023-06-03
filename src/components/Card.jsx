import React from 'react'

function Card(props) {
    return (
      <div style={{backgroundColor:`${props.color}`, padding: "1rem", borderRadius: "7px", marginTop:"1rem",textAlign:"center", width:'18rem'}}>
        <h2>Hola, {props.nombre}!</h2>
        <span>tu color favorito es: {props.color}</span>
      </div>
    );
  }
  
  export default Card;