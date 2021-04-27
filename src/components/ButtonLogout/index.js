import React from 'react';

import { MdPowerSettingsNew } from 'react-icons/md';
import { Button } from './styles';

export default function ButtonLogout({ ...props }) {
  return (
    <Button {...props}>
      <MdPowerSettingsNew color="#fff" size={20} />
      sair
    </Button>
  );
}
