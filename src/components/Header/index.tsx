import React from 'react';

import logoImg from '../../assets/logo.png';

import { Container, Button } from './styles';

interface ButtonsStateProps {
  name: string;
  isPageActive: boolean;
}

interface HeaderProps {
  buttonsState: Array<ButtonsStateProps>;
  changeButtonsState(event: React.MouseEvent<HTMLButtonElement>): void;
}

const Header: React.FC<HeaderProps> = ({
  buttonsState,
  changeButtonsState,
}) => {
  return (
    <Container>
      <img src={logoImg} alt="logo" />

      <div>
        <Button
          name="Books"
          onClick={changeButtonsState}
          isPageActive={buttonsState[0].isPageActive}
        >
          Books
        </Button>

        <Button
          name="Characters"
          onClick={changeButtonsState}
          isPageActive={buttonsState[1].isPageActive}
        >
          Characters
        </Button>

        <Button
          name="Movies"
          onClick={changeButtonsState}
          isPageActive={buttonsState[2].isPageActive}
        >
          Movies
        </Button>
      </div>
    </Container>
  );
};

export default Header;
