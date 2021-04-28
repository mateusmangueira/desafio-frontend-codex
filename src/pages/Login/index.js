import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { signInRequest } from '../../store/modules/auth/actions';

import loginImg from '../../../src/assets/login.svg';

import './styles.css'

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Login() {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleLogin({ email, password }) {
    dispatch(signInRequest(email, password))
  }

  return (
    <>
      <img class="image" src={loginImg} alt="Task Login" />
      <Form class="form" schema={schema} onSubmit={handleLogin}>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha"/>
        <button class="btn" type="submit">{loading ? 'Carregando...' : 'Entrar'}</button>
        <Link class="link" to="/signup">Crie sua conta</Link>
      </Form>
    </>
  )
}
