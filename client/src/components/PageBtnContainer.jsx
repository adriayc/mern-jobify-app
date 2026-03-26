// Wrappers
import Wrapper from '../assets/wrappers/PageBtnContainer';
// Custom hooks
import { useAllJobsContext } from '../pages/AllJobs';

const PageBtnContainer = () => {
  const {
    data: { numOfPages, currentPage },
  } = useAllJobsContext();
  console.log(numOfPages, currentPage);

  return <Wrapper>PageBtnContainer</Wrapper>;
};

export default PageBtnContainer;
