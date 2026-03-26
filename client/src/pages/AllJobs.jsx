import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
// Utils
import customFetch from '../utils/customFetch';
// Components
import { SearchContainer, JobsContainer } from '../components';

// Loaders
export const loader = async () => {
  try {
    const { data } = await customFetch.get('/jobs');
    return { data };
  } catch (error) {
    // console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllJobs = () => {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <>
      <SearchContainer />
      <JobsContainer />
    </>
  );
};

export default AllJobs;
