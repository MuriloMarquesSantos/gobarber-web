import React, { useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

interface FormData {
  name: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
  };
  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Logon</h1>
          <Input
            type="text"
            icon={FiMail}
            inputName="email"
            placeholder="E mail"
          />
          <Input
            type="password"
            icon={FiLock}
            inputName="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </Form>
        <Link to="/signup">
          <FiLogIn />
          Criar conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
