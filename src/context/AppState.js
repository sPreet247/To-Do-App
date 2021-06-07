import AppContext from './AppContext';

import { useState } from 'react';

const AppState = (props) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <AppContext.Provider value={{ checked, handleChange }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
