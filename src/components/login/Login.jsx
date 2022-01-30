import React,{useState} from 'react';
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
          <form onSubmit={handleLogin}>
            <h2 className='login__title'>Enter your name to start playing</h2>
            <input onChange={(ev) => setName(ev.target.value)} value={name} className='login__input' type="text" placeholder='Your Name...' />
            <button type='submit'>Let's Play</button>
          </form>
      </div>
  )
};

export default Login;
