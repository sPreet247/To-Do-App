import AppContext from './AppContext';

import { useState } from 'react';

const AppState = (props) => {
  const [checked, setChecked] = useState(true);
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleChange2 = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppContext.Provider
      value={{ checked, handleChange, value, setValue, handleChange2 }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
