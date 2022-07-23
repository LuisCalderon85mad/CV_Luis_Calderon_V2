import React from 'react'
import "./Form.css"
import {useState} from 'react'


const Form = () => {
  
    const [data,setData] = useState({
        username:"",
        email:"",
        message:""
      })
      
      const {username,email, message} = data;
      
      const changeHandler = event => {
        setData({...data,[event.target.name]:[event.target.value]});
      }
      
      const submitHandler = event => {
        event.preventDefault();
        console.log(data);
      }
  
    return (

<div className='moreContainer2' id='contact'>
    <h3 className='moreTittle2'>¿Hablamos?</h3>
    
    <form  onSubmit={submitHandler} className='form'>
      <div className='inputForm'>
        <label>Nombre</label>
        <input type="text" name="username" value={username} onChange={changeHandler} placeholder='Escribe tu nombre' required />
      </div>

      <div className='inputForm'>
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={changeHandler} placeholder='Escribe tu email' required />
      </div>

      <div className='inputForm'>
        <label>¿En qué puedo ayudarte?</label>
        <input className='input2' type="text" name="message" value={message} onChange={changeHandler} placeholder='Deja tu mensaje' required />
      </div>
      
      <button>Enviar</button>
      
    </form>

</div>
  )
}

export default Form