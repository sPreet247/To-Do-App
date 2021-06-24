import styled from 'styled-components';
import AppContext from 'context/AppContext';
import Checkbox from '@material-ui/core/Checkbox';
import { useContext } from 'react';
import { MdDelete } from 'react-icons/md';

const List = () => {
  const { checked, handleChange } = useContext(AppContext);

  const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin-top: 1rem;
    margin: 0 auto;
  `;

  const ListItems = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <>
      <Wrapper>
        <ListItems>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          Do code
          <MdDelete style={{ fontSize: 30 }} />
        </ListItems>
        <ListItems>
          <Checkbox
            checked={checked}
            color="primary"
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          Buy Groceries
          <MdDelete style={{ fontSize: 30 }} />
        </ListItems>
        <ListItems>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          Car Wash
          <MdDelete style={{ fontSize: 30 }} />
        </ListItems>
      </Wrapper>
    </>
  );
};

export default List;
