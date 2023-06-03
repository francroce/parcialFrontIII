import React, { useState } from 'react'
import Style from './form.module.css'

const Form = ({crearCard}) => {
    const[nombre,setNombre] = useState('');
    const[color,setColor] = useState('');
    const[error,setError] = useState('');

    function handleSubmit(e){
        e.preventDefault()

        const item={
            iNombre: nombre.trim(),
            iColor: color
        }

        if(item.iNombre.length >= 3 && item.iColor.length >= 6){
            crearCard(item)
            setError('');
        }else{
            setError('Por favor chequea que la información sea correcta')
            crearCard('')
        }

        setNombre('');
        setColor('');

    }
  return (
    <div className={Style.container}>
        <form action="" onSubmit={handleSubmit} className={Style.form}>
            
            <input type="text"
            className={Style.input}
            value={nombre}
            placeholder='Ingrese su nombre'
            onChange={(e) => setNombre(e.target.value)}
            />

            <input type="text"
            className={Style.input}
            value={color}
            placeholder='Ingrese el codigo HEX'
            onChange={(e) => setColor(e.target.value)}
            />

            <button type='submit' className={Style.button}>Enviar formulario</button>
            {error && <div className={Style.error}>{error}</div>}
        </form>

    </div>
  )
}

export default Form