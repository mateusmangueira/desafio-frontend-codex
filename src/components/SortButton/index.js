import React from 'react';

import { MdFilterList } from 'react-icons/md';
import { ThCustomized } from './styles';

export default function SortButton({ ...props }) {
  return (
    <ThCustomized {...props}>
      PRIORIDADE
      <MdFilterList color="#000" size={20} />
    </ThCustomized>
  );
}
