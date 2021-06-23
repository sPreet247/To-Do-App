import styled from 'styled-components';

const Add = () => {
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* margin: 0 1rem; */
  `;
  const Input = styled.input`
    width: 30rem;
    height: 3rem;
    border-radius: 0.5rem;
    border: 2px solid #d3d3d3;
    outline: none;
    padding: 6px 10px 6px 20px;
  `;
  const Button = styled.button`
    background-color: #2f80ed;
    color: white;
    width: 7rem;
    height: 2.75rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    margin-left: 0.2rem;
  `;
  return (
    <>
      <Wrapper>
        <Input placeholder=" Add ToDo" />
        <Button>Add</Button>
      </Wrapper>
    </>
  );
};

export default Add;
