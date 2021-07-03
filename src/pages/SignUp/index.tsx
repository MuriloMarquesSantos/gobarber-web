import React, { useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
  };

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>
          <Input
            type="text"
            icon={FiUser}
            inputName="nome"
            placeholder="Nome"
          />
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
          <Button type="submit">Cadastrar</Button>
        </Form>
        <Link to="/">
          <FiArrowLeft />
          Voltar para Logon
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
