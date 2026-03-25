import { FaAlignLeft } from 'react-icons/fa';
// Custom hook (Context)
import { useDashboardContext } from '../pages/DashboardLayout';
// Wrappers
import Wrapper from '../assets/wrappers/Navbar';
// Components
import Logo from './Logo';
import LogoutContainer from './LogoutContainer';

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div className="nav-center">
        {/* TOGGLE SIDEBAR */}
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        {/* LOGO */}
        <div>
          <Logo />
          <h4 className="logo-text">dashboard</h4>
        </div>
        {/* LOGOUT */}
        <div className="btn-container">
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
