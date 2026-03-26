import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
// Wrappers
import Wrapper from '../assets/wrappers/StatsContainer';
// Custom fetch
import customFetch from '../utils/customFetch';

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
  console.log(users, jobs);

  return (
    <Wrapper>
      <h1>Admin Page</h1>
    </Wrapper>
  );
};

export default Admin;
