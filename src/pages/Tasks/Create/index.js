import React from 'react';

import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { createTaskRequest } from '../../../store/modules/task/actions';

import { Form } from '@unform/web';
import Input from '../../../components/Input';
import ButtonBack from '../../../components/ButtonBack';
import ButtonSave from '../../../components/ButtonSave';

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
        <h1>NOVA TAREFA</h1>
        <div>
          <ButtonBack type="button"/>
        </div>
      </header>

      <Form class="form" schema={schema} onSubmit={handleCreate} id="task-form">
        <span>Nome da Tarefa</span>
        <Input name="name" type="text" placeholder="Tarefa" />
        <span>Prioridade</span>
        <Input name="priority" type="text" placeholder="Alta ou Baixa" />
        <ButtonSave type="submit" form="task-form" />
      </Form>
    </Container>
  );
}





