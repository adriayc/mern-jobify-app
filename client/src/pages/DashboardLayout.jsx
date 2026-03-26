import { createContext, useContext, useState } from 'react';
import { Outlet, redirect, useNavigate, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
// Get theme
import { checkDefaultTheme } from '../App';
// Wrappers
import Wrapper from '../assets/wrappers/Dashboard';
// Utils
import customFetch from '../utils/customFetch';
// Components
import { SmallSidebar, BigSidebar, Navbar, Loading } from '../components';

// Query
const userQuery = {
  queryKey: ['user'],
  queryFn: async () => {
    const { data } = await customFetch.get('/users/current-user');
    return data;
  },
};

// Loaders
export const loader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData(userQuery);
  } catch (error) {
    return redirect('/');
  }
};

// Create context
const DashboardContext = createContext();

const DashboardLayout = ({ queryClient }) => {
  const { user } = useQuery(userQuery).data;
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
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
    // Invalidate all queries
    queryClient.invalidateQueries();
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
              {isPageLoading ? <Loading /> : <Outlet context={{ user }} />}
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
