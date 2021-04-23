import { useEffect } from 'react'

import history from '../../services/history';

import { Container, ListTasks } from './styles';

import Header from '../../components/Header';

export default function Tasks() {

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
