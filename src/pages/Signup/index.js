import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
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
      <img src={sighUpImg} alt="Task SignUp" />
      <Form schema={schema} onSubmit={handleSignUp}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já possui conta?</Link>
      </Form>
    </>
  );
}
/*
const SignUp = props => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const signUpUser = (event) => {
        event.preventDefault();
        console.log(enteredName, enteredEmail, enteredPassword);
    }

    const changeNameHandle = event => {
        setEnteredName(event.target.value);
    }

    const changeEmailHandle = event => {
        setEnteredEmail(event.target.value);
    }

    const changePasswordHandle = event => {
        setEnteredPassword(event.target.value);
    }

    return (
        <div className="base-container">
            <div className="header">Sign Up</div>
            <div className="content">
                <div className="image">
                    <img src={sighUpImg} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="text">Name</label>
                        <input type="text" name="text" placeholder="name" value={enteredName} onChange={changeNameHandle} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="email" value={enteredEmail} onChange={changeEmailHandle} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" value={enteredPassword} onChange={changePasswordHandle} />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="submit" className="btn" onClick={signUpUser}>
                    Submit
                </button>
            </div>
        </div>
    );
}
export default SignUp;
*/

