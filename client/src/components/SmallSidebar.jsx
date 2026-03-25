import { FaTimes } from 'react-icons/fa';
// Wrappers
import Wrapper from '../assets/wrappers/SmallSidebar';
// Custom hook (Context)
import { useDashboardContext } from '../pages/DashboardLayout';
// Components
import Logo from './Logo';
import NavLinks from './NavLinks';

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          {/* NAV LINKS */}
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
