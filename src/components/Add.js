import styled from 'styled-components';

const Add = () => {
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 1rem;
  `;
  const Input = styled.input`
    width: 30rem;
    height: 3rem;
    border-radius: 1rem;
    border: 2px solid #d3d3d3;
    outline: none;
  `;
  const Button = styled.button`
    background-color: #2f80ed;
    color: white;
    width: 7rem;
    height: 3.5rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
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
