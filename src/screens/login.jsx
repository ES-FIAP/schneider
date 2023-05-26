import React, { useState } from 'react';
import Button from '../components/button';
import Input from '../components/Input';
const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);

    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Tela de Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            id="username"
            placeholder={"Usuário"}
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <Input
            type="password"
            id="password"
            value={password}
             placeholder={"Senha"}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <Button type="submit" text={"Entrar"}>Entrar</Button>
      </form>
    </div>
  );
};

export default LoginScreen;