import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import ButtonCreate from '../../components/ButtonCreate';
import ButtonLogout from '../../components/ButtonLogout';
import SortButton from '../../components/SortButton';

import {MdDelete, MdCreate} from 'react-icons/md';

import { Container, ListTasks} from './styles';

import history from '../../services/history';

import {
  deleteTaskRequest, getTasksRequest, sortTasks
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
    const result = window.confirm('Tem certeza que deseja sair?');
    if (result) {
    dispatch(signOut())
    }
  }

  async function handleSortPriority(tasks) {
      dispatch(sortTasks(tasks))
  }

  async function handleCreate() {
    history.push('/tasks/create');
    window.location.reload();
  }

  return (
    <Container>
      <header>
        <h1>TAREFAS</h1>
        <div>
        <ButtonCreate type="button" onClick={() => {handleCreate()}}/>
        <ButtonLogout type="button" onClick={() => {handleLogout()}}/>
        </div>
      </header>
      <ListTasks>
        <table>
          <thead>
            <tr>
              <th>NOME</th>
              <SortButton type="button" onClick={() => handleSortPriority(tasks)} />
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
                     <Link to={{pathname: `/tasks/edit/${task._id}`,}}>
                     <MdCreate color="#3F3D56" size={20}  ></MdCreate>
                     </Link>
                     <button type="button" onClick={() => handleDelete(task._id)}>
                     <MdDelete color="#3F3D56" size={20} hover={"color=#fff"} ></MdDelete>
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
