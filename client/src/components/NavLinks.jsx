import { NavLink } from 'react-router-dom';
// Custom hook (Context)
import { useDashboardContext } from '../pages/DashboardLayout';
// Utils
import links from '../utils/links';

const NavLinks = () => {
  const { toggleSidebar } = useDashboardContext();

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            key={text}
            to={path}
            className="nav-link"
            onClick={toggleSidebar}
            end // Remove 'active' class
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
