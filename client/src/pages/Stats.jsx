// import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
// Custom fetch
import customFetch from '../utils/customFetch';
// Components
import { ChartsContainer, StatsContainer } from '../components';

// Loaders
export const loader = async () => {
  const response = await customFetch.get('/jobs/stats');
  return response.data;
};

const Stats = () => {
  // const { defaultStats, monthlyApplications } = useLoaderData();

  // const response = useQuery({
  const { isLoading, isError, data } = useQuery({
    queryKey: ['stats'],
    queryFn: () => customFetch.get('/jobs/stats'),
  });
  // console.log(response);

  if (isLoading) return <h4>Loading...</h4>;
  if (isError) return <h4>Error...</h4>;
  const { defaultStats, monthlyApplications } = data.data;

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
