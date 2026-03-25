import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      <nav>navbar</nav>
      {/* Outlet */}
      <Outlet />
    </div>
  );
};

export default HomeLayout;
