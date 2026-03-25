import styled from 'styled-components';

const StyleBtn = styled.button`
  font-size: 1.5rem;
  background: red;
  color: white;
`;

const Landing = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <StyleBtn>styled btn</StyleBtn>
    </div>
  );
};

export default Landing;
