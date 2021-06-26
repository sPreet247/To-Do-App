import styled from 'styled-components';
import '../styles.css';
import { MdDelete } from 'react-icons/md';

const List = () => {
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
  `;

  const Label = styled.label``;

  return (
    <>
      <Wrapper>
        <ListItems>
          <Label>
            <input type="checkbox" />
            Do code
          </Label>
          <MdDelete style={{ fontSize: 30 }} />
        </ListItems>
        <ListItems>
          <input type="checkbox" />
          Buy Groceries
          <MdDelete style={{ fontSize: 30 }} />
        </ListItems>
        <ListItems>
          <input type="checkbox" />
          Car Wash
          <MdDelete style={{ fontSize: 30 }} />
        </ListItems>
      </Wrapper>
    </>
  );
};

export default List;
