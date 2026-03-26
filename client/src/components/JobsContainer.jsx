// Wrappers
import Wrapper from '../assets/wrappers/JobsContainer';
// Custom hook
import { useAllJobsContext } from '../pages/AllJobs';
// Components
import Job from './Job';

const JobContainer = () => {
  const { data } = useAllJobsContext();
  const { jobs } = data;

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobContainer;
