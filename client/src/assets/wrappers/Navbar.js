import styled from 'styled-components';

const Wrapper = styled.nav`
  height: var(--nav-height);
  background: var(--background-secondary-color);
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    color: var(--primary-500);
    background: transparent;
    font-size: 1.75rem;
    border-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .logo-text {
    display: none;
  }
  .logo {
    width: 100px;
    display: flex;
    align-items: center;
  }
  .btn-container {
    display: flex;
    align-items: center;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;

export default Wrapper;
