import { createContext, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
// Wrappers
import Wrapper from '../assets/wrappers/Dashboard';
// Components
import { SmallSidebar, BigSidebar, Navbar } from '../components';

// Create context
const DashboardContext = createContext();

const DashboardLayout = () => {
  // Temp
  const user = { name: 'john' };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log('toggle dark theme');
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log('logout user');
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
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
    </DashboardContext.Provider>
  );
};

// Custom hook (Context)
export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
