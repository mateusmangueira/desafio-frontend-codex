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
  deleteTaskFailure,
  sortTasksSuccess,
  sortTasksFailure,

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

    if (response.data.results > 0) {
      yield put(getTasksSuccess(response.data.data.tasks));
    } else {
      toast.info("Você não possui Tarefas")
    }
  } catch (error) {
    toast.error('Falha ao carregar suas Tarefas');
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
    console.log(response);
    toast.success('Tarefa atualizada com sucesso.');

    yield put(updateTaskSuccess(response.data));

    history.push('/tasks');
  } catch (error) {
    toast.error('Houve algum erro ao atualizar tarefa');
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

export function* sortTasks() {

    const response = yield call(api.get, '/tasks/sort');

    console.log(response);

    if(!response) {
      toast.error('Houve erro na ordenação das tarefas');
      yield put(sortTasksFailure());
    }

    yield put(sortTasksSuccess(response.data.tasks));
}


export default all([
  takeLatest('@task/CREATE_TASK_REQUEST', createTask),
  takeLatest('@task/GET_TASKS_REQUEST', getTasks),
  takeLatest('@task/UPDATE_TASK_REQUEST', updateTask),
  takeLatest('@task/DELETE_TASK_REQUEST', deleteTask),
  takeLatest('@task/SORT_PRIORITY_REQUEST', sortTasks),
]);
