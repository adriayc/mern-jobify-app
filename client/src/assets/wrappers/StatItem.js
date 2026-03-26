import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--background-secondary-color);
  padding: 2rem;
  border-bottom: 5px solid ${(props) => props.color}; // Access prop values
  border-radius: var(--border-radius);
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    color: ${(props) => props.color};
    font-size: 50px;
    font-weight: 700;
    line-height: 2;
    display: block;
  }
  .title {
    font-size: 1.25rem;
    text-transform: capitalize;
    text-align: left;
    letter-spacing: var(--letter-spacing);
    margin: 0;
    margin-top: 0.5rem;
  }
  .icon {
    width: 70px;
    height: 60px;
    background: ${(props) => props.bcg};
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: ${(props) => props.color};
      font-size: 2rem;
    }
  }
`;

export default Wrapper;
