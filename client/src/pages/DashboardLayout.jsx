import { Outlet } from 'react-router-dom';
// Wrappers
import Wrapper from '../assets/wrappers/Dashboard';
// Components
import { SmallSidebar, BigSidebar, Navbar } from '../components';

const DashboardLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            {/* OUTLET */}
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default DashboardLayout;
