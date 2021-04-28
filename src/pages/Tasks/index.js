import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import ButtonCreate from '../../components/ButtonCreate';
import ButtonLogout from '../../components/ButtonLogout';

import { Container, ListTasks} from './styles';

import history from '../../services/history';

import {
  deleteTaskRequest, getTasksRequest
} from '../../store/modules/task/actions'

import { signOut } from '../../store/modules/auth/actions'

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

  async function handleLogout() {
    dispatch(signOut())
  }

  return (
    <Container>
      <header>
        <h1>TAREFAS</h1>
        <div>
        <ButtonCreate type="button" onClick={() => {history.push('/tasks/create')}}/>
        <ButtonLogout type="button" onClick={() => {handleLogout()}}/>
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
               <tr key={task._id}>
                 <td>
                    {task.name}
                 </td>
                 <td>
                   {task.priority}
                 </td>
                 <td>
                   <div>
                     <Link to={{pathname: `/tasks/edit/${tasks._id}`,}}>
                       editar
                     </Link>
                     <button type="button" onClick={() => handleDelete(task._id)}>
                       deletar
                     </button>
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


/*


*/
