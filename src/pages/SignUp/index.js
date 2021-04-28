import React from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web'
import  Input  from '../../components/Input'
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { signUpRequest } from '../../store/modules/auth/actions';

import sighUpImg from '../../assets/signup2.svg';

import '../Login/styles.css';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  password: Yup.string().min(8, 'No mínimo 8 caracteres').required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSignUp({ name, email, password }) {
    dispatch(signUpRequest(name, email, password))
  }
  return (
    <>
      <img class="image" src={sighUpImg} alt="Task SignUp" />
      <Form class="form" schema={schema} onSubmit={handleSignUp} >

        <Input name="name" placeholder="Nome" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />
        <button class="btn" type="submit">Criar conta</button>
        <Link class="link" to="/">Já possui conta?</Link>
      </Form>
    </>
  );
}
