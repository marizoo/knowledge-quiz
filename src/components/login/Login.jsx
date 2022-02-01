import React,{useState} from 'react';
import '../../css/appStyle.min.css'

import {useNavigate} from 'react-router-dom';

const Login = ({onHandlePlayerName}) => {
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const handleLogin = (ev) => {
    ev.preventDefault();

    const newName = name;

    onHandlePlayerName(newName);
    navigate('/welcome')
    setName('')
  }

  return (
      <div className='login'>
          <form className='form' onSubmit={handleLogin}>
            <h2 className='title'>Enter your name to start playing</h2>
            <input className='input' onChange={(ev) => setName(ev.target.value)} value={name} type="text" placeholder='Your Name...' />
            <button className='button' type='submit'>Let's Play</button>
          </form>
      </div>
  )
};

export default Login;
