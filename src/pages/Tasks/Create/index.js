import React from 'react';

import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { createTaskRequest } from '../../../store/modules/task/actions';

import { Form } from '@unform/web';
import Input from '../../../components/Input';
import ButtonBack from '../../../components/ButtonBack';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  priority: Yup.string().required('Alta ou Baixa é obrigatória')
});

export default function Create() {

  const dispatch = useDispatch();

  function handleCreate({ name, priority }) {
    dispatch(createTaskRequest(name, priority ));
  }

  return (
    <Container>
      <header>
        <h1>Nova Tarefa</h1>
        <div>
          <ButtonBack type="button" />
        </div>
      </header>

      <Form schema={schema} onSubmit={handleCreate} id="task-form">
        <span>NOME DA TAREFA</span>
        <Input name="name" type="text" placeholder="Nome da Tarefa" />
        <span>PRIORIDADE</span>
        <Input name="email" type="email" placeholder="Alta ou Baixa" />
      </Form>
    </Container>
  );
}





