import AppContext from 'context/AppContext';
import Checkbox from '@material-ui/core/Checkbox';
import { useContext } from 'react';
const List = () => {
  const { checked, handleChange } = useContext(AppContext);

  return (
    <>
      <ul>
        <li>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          Do code
        </li>
        <li>
          <Checkbox
            checked={checked}
            color="primary"
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          Buy Groceries
        </li>
        <li>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          Car Wash
        </li>
      </ul>
    </>
  );
};

export default List;
