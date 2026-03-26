import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
// Wrappers
import Wrapper from '../assets/wrappers/PageBtnContainer';
// Custom hooks
import { useAllJobsContext } from '../pages/AllJobs';

const PageBtnContainer = () => {
  const {
    data: { numOfPages, currentPage },
  } = useAllJobsContext();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  //   console.log(pages);

  return (
    <Wrapper>
      <button className="btn prev-btn">
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              className={`btn page-btn ${pageNumber === currentPage && 'active'}`}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button className="btn next-btn">
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
