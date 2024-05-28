'use client'
import { SetStateAction, useState } from 'react'; 
import styles from './registration.module.scss'; 
import Link from 'next/link';

export default function Mainnn() {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleAddToCart = async () => {
    setErrorMessage(''); 

    try {
      const userData = { username, password };
      const response = await fetch('http://localhost:7777/api/auth/register', { 
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('Пользователь успешно добавлен!'); 
       
      } else {
        const error = await response.json();
        setErrorMessage(error.message); 
      }
    } catch (error) {
      console.error('Ошибка при добавлении пользователя:', error); 
      setErrorMessage('Произошла ошибка. Повторите попытку позже.'); 
    }
  };

  const handleUsernameChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setPassword(event.target.value);
  };

  return (
    <div className={styles.main}>
      <input
        type="text"
        placeholder="Имя пользователя"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={handlePasswordChange}
      />
      <Link href={'/'}><button onClick={handleAddToCart}>Зарегистрироваться</button></Link>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
}