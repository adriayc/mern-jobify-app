import { createContext, useContext, useState } from 'react';
import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom';
// Get theme
import { checkDefaultTheme } from '../App';
// Wrappers
import Wrapper from '../assets/wrappers/Dashboard';
// Utils
import customFetch from '../utils/customFetch';
// Components
import { SmallSidebar, BigSidebar, Navbar } from '../components';
import { toast } from 'react-toastify';

// Loaders
export const loader = async () => {
  try {
    const { data } = await customFetch.get('/users/current-user');
    return data;
  } catch (error) {
    // console.log(error);
    return redirect('/');
  }
};

// Create context
const DashboardContext = createContext();

const DashboardLayout = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    // Add the class dark-them to the body tag
    document.body.classList.toggle('dark-theme', newDarkTheme);
    // Set the theme value to local storage
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    await customFetch.delete('/auth/logout');
    toast.success('Logging out...');
    navigate('/');
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
              {/* Send user value context prop */}
              <Outlet context={{ user }} />
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
