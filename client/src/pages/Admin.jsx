import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaCalendarCheck, FaSuitcaseRolling } from 'react-icons/fa';
// Wrappers
import Wrapper from '../assets/wrappers/StatsContainer';
// Custom fetch
import customFetch from '../utils/customFetch';
// Components
import { StatItem } from '../components';

// Loaders
export const loader = async () => {
  try {
    const response = await customFetch.get('/users/admin/app-stats');
    return response.data;
  } catch (error) {
    // console.log(error);
    toast.error('You are not authorized to view this page');
    return redirect('/dashboard');
  }
};

const Admin = () => {
  const { users, jobs } = useLoaderData();

  return (
    <Wrapper>
      <StatItem
        title="current users"
        count={users}
        color="#e9b949"
        bcg="#fcefc7"
        icon={<FaSuitcaseRolling />}
      />
      <StatItem
        title="total jobs"
        count={jobs}
        color="#647acb"
        bcg="#e0e8f9"
        icon={<FaCalendarCheck />}
      />
    </Wrapper>
  );
};

export default Admin;
