import styled from 'styled-components';

const Wrapper = styled.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;
  .btn-container {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: flex;
  }
  .page-btn {
    width: 50px;
    height: 40px;
    color: var(--primary-500);
    background: transparent;
    font-size: 1.25rem;
    font-weight: 700;
    border-color: transparent;
    border-radius: var(--border-radius);
    cursor: pointer;
  }
  .active {
    color: var(--white);
    background: var(--primary-500);
  }
  .prev-btn,
  .next-btn {
    width: 100px;
    height: 40px;
    color: var(--primary-color);
    background: var(--background-secondary-color);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    border-color: transparent;
    border-radius: var(--border-radius);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  .prev-btn:hover,
  .next-btn:hover {
    color: var(--white);
    background: var(--primary-500);
    transition: var(--transition);
  }
  .dots {
    display: grid;
    place-items: center;
    cursor: text;
  }
`;

export default Wrapper;
