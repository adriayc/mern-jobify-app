import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
  }
  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .dropdown {
    width: 100%;
    background: var(--primary-500);
    text-align: center;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
    visibility: hidden;
    position: absolute;
    top: 45px;
    left: 0;
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    width: 100%;
    height: 100%;
    color: var(--white);
    background: transparent;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    padding: 0.5rem;
    border-color: transparent;
    border-radius: var(--border-radius);
    cursor: pointer;
  }
`;

export default Wrapper;
