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

  const Label = styled.label`
    margin-right: 1.5rem;
    margin-left: 1rem;
  `;

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
          <Label>
            <input type="checkbox" />
            Buy Groceries
          </Label>
          <MdDelete style={{ fontSize: 30 }} />
        </ListItems>
        <ListItems>
          <Label>
            <input type="checkbox" />
            Car Wash
          </Label>
          <MdDelete style={{ fontSize: 30 }} />
        </ListItems>
      </Wrapper>
    </>
  );
};

export default List;
