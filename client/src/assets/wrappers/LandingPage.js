import styled from 'styled-components';

const Wrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    height: var(--nav-height);
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    margin-top: -3rem;
    display: grid;
    align-items: center;
  }
  h1 {
    font-weight: 700;
    margin-bottom: 1.5rem;
    span {
      color: var(--primary-500);
    }
  }
  p {
    max-width: 35em;
    color: var(--text-secondary-color);
    line-height: 2;
    margin-bottom: 1.5rem;
  }
  .register-link {
    margin-right: 1rem;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Wrapper;
