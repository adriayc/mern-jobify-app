import { useLoaderData } from 'react-router-dom';
// Custom fetch
import customFetch from '../utils/customFetch';
import { ChartsContainer, StatsContainer } from '../components';

// Loaders
export const loader = async () => {
  // try {
  //   const response = await customFetch.get('/jobs/statss');
  //   return response.data;
  // } catch (error) {
  //   // console.log(error);
  //   return error;
  // }
  const response = await customFetch.get('/jobs/statss');
  return response.data;
};

const Stats = () => {
  const { defaultStats, monthlyApplications } = useLoaderData();

  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 1 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
};

export default Stats;
