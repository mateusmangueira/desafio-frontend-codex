import { useEffect } from 'react'

import history from '../../services/history';

import api from '../../services/api';

import { Container, ListTasks } from './styles';

import Header from '../../components/Header';

export default function Tasks() {
  useEffect(() => {
    api.get('tasks').then(respose => console.log(respose.data));
  })

  return (
    <Container>
      <Header/>
      <ListTasks>
        <table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>PRIORIDADE</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>Teste</td>
                <td>Alta</td>
              </tr>
          </tbody>
        </table>
      </ListTasks>
    </Container>
  )
}
