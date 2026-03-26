import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-2);
  display: grid;
  grid-template-rows: 1fr auto;
  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  .main-icon {
    width: 60px;
    height: 60px;
    color: var(--white);
    background: var(--primary-500);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: var(--border-radius);
    margin-right: 2rem;
    display: grid;
    place-items: center;
  }
  .info {
    h5 {
      margin-bottom: 0.5rem;
    }
    p {
      color: var(--text-secondary);
      text-transform: capitalize;
      letter-spacing: var(--letter-spacing);
      margin: 0;
    }
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    align-items: center;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  .status {
    width: 100px;
    height: 30px;
    text-transform: capitalize;
    text-align: center;
    letter-spacing: var(--letter-spacing);
    border-radius: var(--border-radius);
    display: grid;
    align-items: center;
  }
  .actions {
    margin-top: 1rem;
    display: flex;
    align-items: center;
  }
  .edit-btn,
  .delete-btn {
    height: 30px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
  }
  .edit-btn {
    margin-right: 0.5rem;
  }
`;

export default Wrapper;
