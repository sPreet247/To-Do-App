import styled from 'styled-components';
const Header = () => {
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const All = styled.div`
    margin: 1rem;
  `;
  const Active = styled.div`
    margin: 1rem;
  `;
  const Completed = styled.div`
    margin: 1rem;
  `;
  return (
    <>
      <Wrapper>
        <All>All</All>
        <Active>Active</Active>
        <Completed>Completed</Completed>
      </Wrapper>
    </>
  );
};

export default Header;
