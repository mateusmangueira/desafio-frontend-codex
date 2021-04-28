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
          <ButtonSave type="submit" form="task-form" />
        </div>
      </header>

      <Form class="form" schema={schema} onSubmit={handleCreate} id="task-form">
        <Input name="name" type="text" placeholder="Nome da Tarefa" />
        <Input name="priority" type="text" placeholder="Alta ou Baixa" />
      </Form>
    </Container>
  )
}
