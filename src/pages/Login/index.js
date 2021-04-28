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
        {/* <span>E-MAIL</span> */}
        <Input name="email" type="email" placeholder="Email" />
        {/* <span>SENHA</span> */}
        <Input name="password" type="password" placeholder="Senha"/>
        <button class="btn" type="submit">{loading ? 'Carregando...' : 'Entrar'}</button>
        <Link class="link" to="/signup">Crie sua conta</Link>
      </Form>
    </>
  )
}

/*
const Login = props => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [token, setToken] =  useState(null);
  const [signed, setSigned] = useState(false)


  async function handleLogin(event) {
    event.preventDefault();
    const response = await api.post('sessions', {enteredEmail, enteredPassword });
    const { token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;
    setToken(token);
    setSigned(true);
    history.push('/tasks');
  }

  const loginUser = (event) => {
    event.preventDefault();
    console.log(enteredEmail, enteredPassword);
  }

  const changeEmailHandle = event => {
    setEnteredEmail(event.target.value);
  }

  const changePasswordHandle = event => {
    setEnteredPassword(event.target.value);
  }

  return (
    <div className="base-container">
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Digite um e-mail válido" value={enteredEmail} onChange={changeEmailHandle} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input type="password" name="password" placeholder="Sua melhor senha" value={enteredPassword} onChange={changePasswordHandle} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn" onClick={handleLogin}>
            Login
          </button>
          <br />
          <br />
          <Link to="/singUp">Ainda não possui conta?</Link>
        </div>
      </div>
  );
}

export default Login;
*/
