import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import {
  createTaskSuccess,
  createTaskFailure,
  getTasksSuccess,
  getTasksFailed,
  updateTaskSuccess,
  updateTaskFailure,
  deleteTaskSuccess,
  deleteTaskFailure

} from './actions';


export function* createTask({ payload }) {
  try {
    const response = yield call(api.post, '/tasks', payload);

    toast.success('Tarefa criada com sucesso.');

    yield put(createTaskSuccess(response.data));

    history.push('/tasks');
  } catch (error) {
    toast.error('Houve algum problema ao criar a Tarefa');
    yield put(createTaskFailure());
    history.push('/tasks');
  }
}

export function* getTasks() {
  try {
    const response = yield api.get('/tasks');

    if (response) {
      yield put(getTasksSuccess(response.data));
    }
  } catch (error) {
    if (error.response.status === 400) {
      toast.warn('Você não possui tarefas');
    }
    yield put(getTasksFailed());
  }
}

export function* updateTask({ payload }) {
  try {
    const { name, priority, _id } = payload;

    const data = {
      name,
      priority,
    };

    const response = yield call(api.put, `/tasks/${_id}`, data);
    toast.success('Tarefa atualizado com sucesso.');

    yield put(updateTaskSuccess(response.data));

    history.push('/tasks');
  } catch (error) {
    toast.error('Houve algum erro ao atualizar aluno, verifique seus dados.');
    yield put(updateTaskFailure());
  }
}

export function* deleteTask({ payload }) {
  try {
    const { _id } = payload;
    const response = yield call(api.delete, `/tasks/${_id}`);

    if (response) {
      toast.warn('Tarefa deletada com sucesso.');
    } else {
      toast.error('Houve algum problema ao deletar a tarefa');
    }

    yield put(deleteTaskSuccess(response.data));

    history.push('/tasks');
  } catch (error) {
    yield put(deleteTaskFailure());
  }
}


export default all([
  takeLatest('@task/CREATE_TASK_REQUEST', createTask),
  takeLatest('@task/GET_TASKS_REQUEST', getTasks),
  takeLatest('@task/UPDATE_TASK_REQUEST', updateTask),
  takeLatest('@task/DELETE_TASK_REQUEST', deleteTask),
]);
