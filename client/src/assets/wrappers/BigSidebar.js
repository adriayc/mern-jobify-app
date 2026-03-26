import styled from 'styled-components';

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    box-shadow: 1px 0 0 0 rgba(0, 0, 0, 0.1);
    display: block;
    .sidebar-container {
      width: 250px;
      height: 100%;
      min-height: 100vh;
      background: var(--background-secondary-color);
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      padding-left: 2.5rem;
      display: flex;
      align-items: center;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      color: var(--text-secondary-color);
      text-transform: capitalize;
      padding: 1rem 0;
      padding-left: 2.5rem;
      transition: padding-left 0.3s ease-in-out;
      display: flex;
      align-items: center;
    }
    .nav-link:hover {
      color: var(--primary-500);
      padding-left: 3rem;
      transition: var(--transition);
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    .active {
      color: var(--primary-500);
    }
    .pending {
      background: var(--background-color);
    }
  }
`;

export default Wrapper;
