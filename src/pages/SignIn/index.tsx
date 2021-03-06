import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logo from '../../assets/logo.svg';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, AnimationContainer, Background } from './styles';

interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit: SubmitHandler<FormData> = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string().required('Email obrigatório').email(),
          password: Yup.string().required('Senha obrigatória'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);

          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [signIn, addToast],
  );
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu Logon</h1>
            <Input
              type="text"
              icon={FiMail}
              name="email"
              placeholder="E mail"
            />
            <Input
              type="password"
              icon={FiLock}
              name="password"
              placeholder="Senha"
            />
            <Button type="submit">Entrar</Button>
            <Link to="/forgotpassword">Esqueci minha senha</Link>
          </Form>
          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
