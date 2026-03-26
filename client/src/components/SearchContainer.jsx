import { Form, Link } from 'react-router-dom';
// Wrappers
import Wrapper from '../assets/wrappers/DashboardFormPage';
// Utils
import { JOB_SORT_BY, JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
// Components
import FormRow from './FormRow';
import FormRowSelect from './FormRowSelect';
import SubmitBtn from './SubmitBtn';

const SearchContainer = () => {
  return (
    <Wrapper>
      <Form method="get" className="form">
        <h5 className="form-title">search form</h5>
        <div className="form-center">
          <FormRow type="search" name="search" defaultValue="a" />
          <FormRowSelect
            name="jobStatus"
            labelText="job status"
            list={['all', ...Object.values(JOB_STATUS)]}
            defaultValue="all"
          />
          <FormRowSelect
            name="jobType"
            labelText="job type"
            list={['all', ...Object.values(JOB_TYPE)]}
            defaultValue="all"
          />
          <FormRowSelect
            name="sort"
            list={[...Object.values(JOB_SORT_BY)]}
            defaultValue="newest"
          />
          <Link to="/dashboard/all-jobs" className="btn form-btn delete-btn">
            Reset Search Values
          </Link>
          {/* TEMP!!! */}
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
