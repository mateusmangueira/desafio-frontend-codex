import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { Container, ListTasks} from './styles';

import history from '../../services/history';

import {
  deleteTaskRequest, getTasksRequest
} from '../../store/modules/task/actions'

export default function Tasks() {

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.task.tasks) || [];

  useEffect(() => {
    dispatch(getTasksRequest());
  }, []); // eslint-disable-line


  async function handleDelete(_id) {
    const result = window.confirm('Tem certeza que deseja apagar essa Tarefa?');
    if (result) {
      dispatch(deleteTaskRequest(_id));
    }
  }

  return (
    <Container>
      <header>
        <h1>TAREFAS</h1>
        <div>
        <button type="button" onClick={() => {history.push('/tasks/create')}}/>
        </div>
      </header>
      <ListTasks>
        <table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>PRIORIDADE</th>
            </tr>
          </thead>
           <tbody>
            {tasks.map(task => (
              <tr>
                <td>{task.name}</td>
                <td>{task.priority}</td>
                <td>
                  <div>
                  <Link to={{pathname: `/tasks/edit/${task._id}`, }}>editar</Link>
                  <button type="button" onClick={() => handleDelete(task._id)}>apagar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ListTasks>
    </Container>
  )
}
