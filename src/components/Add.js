import styled from 'styled-components';

const Add = () => {
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
      <Input placeholder=" Add ToDo" />
      <Button>Add</Button>
    </>
  );
};

export default Add;
