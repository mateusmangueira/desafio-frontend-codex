import React from 'react';

import { MdChevronLeft } from 'react-icons/md';
import history from '../../services/history';

import { Button } from './styles';

export default function ButtonBack({ ...props }) {

  async function goBack() {
    history.push('/tasks');
    window.location.reload();
  }
  return (
    <Button onClick={() => goBack()} {...props}>
      <MdChevronLeft color="#fff" size={20} />
      VOLTAR
    </Button>
  );
}
