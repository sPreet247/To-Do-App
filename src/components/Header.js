import styled from 'styled-components';
const Header = () => {
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  return (
    <>
      <Wrapper>
        <div>All</div>
        <div>Active</div>
        <div>Completed</div>
      </Wrapper>
    </>
  );
};

export default Header;
