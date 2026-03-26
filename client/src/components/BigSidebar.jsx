// Custom hook (Context)
import { useDashboardContext } from '../pages/DashboardLayout';
// Wrappers
import Wrapper from '../assets/wrappers/BigSidebar';
// Components
import Logo from './Logo';
import NavLinks from './NavLinks';

const BigSidebar = () => {
  const { showSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          {/* NAV LINKS */}
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
