import React from 'react';

import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { updateTaskRequest } from '../../../store/modules/task/actions';

import { Form } from '@unform/web';
import Input from '../../../components/Input';
import ButtonBack from '../../../components/ButtonBack';
import ButtonSave from '../../../components/ButtonSave';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  priority: Yup.string(),
});

export default function Edit() {

  const dispatch = useDispatch();

  function handleCreate({ name, priority }) {
    dispatch(updateTaskRequest(name, priority ));
  }

  return (
    <Container>
      <header>
        <h1>EDITAR TAREFA</h1>
        <div>
          <ButtonBack type="button"/>
        </div>
      </header>

      <Form class="form" schema={schema} onSubmit={handleCreate} id="task-form">
        <span>Novo Nome</span>
        <Input name="name" type="text" placeholder="Nome" />
        <ButtonSave type="submit" form="task-form" />
      </Form>
    </Container>
  )
}
