import styled from 'styled-components';
import AppContext from 'context/AppContext';
import Checkbox from '@material-ui/core/Checkbox';
import { useContext } from 'react';
import { MdDelete } from 'react-icons/md';

const List = () => {
  const { checked, handleChange } = useContext(AppContext);

  const Wrapper = styled.ul`
    /* display: flex; */
    width: 20px;

    position: relative;
    left: 200px;

    vertical-align: middle;
  `;
  const Li = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <>
      <Wrapper>
        <Li>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          Do code
          <MdDelete />
        </Li>
        <li>
          <Checkbox
            checked={checked}
            color="primary"
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          Buy Groceries
          <MdDelete />
        </li>
        <li>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          Car Wash
          <MdDelete />
        </li>
      </Wrapper>
    </>
  );
};

export default List;
