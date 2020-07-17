import React, { useState, useCallback } from 'react';

import Header from './components/Header';
import ListBooks from './components/List/ListBooks';
import ListCharacters from './components/List/ListCharacters';
import ListMovies from './components/List/ListMovies';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  const [buttonsState, setButtonsState] = useState([
    { name: 'Books', isPageActive: true },
    { name: 'Characters', isPageActive: false },
    { name: 'Movies', isPageActive: false },
  ]);

  const handleButtonClick = useCallback(
    event => {
      const clickedBtn = event.target.name;

      const changeButtonsState = buttonsState.map(button => {
        if (button.name === clickedBtn) {
          button.isPageActive = true;
        } else {
          button.isPageActive = false;
        }

        return button;
      });

      setButtonsState(changeButtonsState);
    },
    [buttonsState],
  );

  return (
    <>
      <GlobalStyles />

      <Header
        buttonsState={buttonsState}
        changeButtonsState={handleButtonClick}
      />

      {(buttonsState[0].isPageActive && <ListBooks />) ||
        (buttonsState[1].isPageActive && <ListCharacters />) ||
        (buttonsState[2].isPageActive && <ListMovies />)}
    </>
  );
};

export default App;
