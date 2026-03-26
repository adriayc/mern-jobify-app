import {
  Form,
  redirect,
  useLoaderData,
  useNavigation,
  //useParams
} from 'react-router-dom';
import { toast } from 'react-toastify';
// Wrappers
import Wrapper from '../assets/wrappers/DashboardFormPage';
// Custom fetch
import customFetch from '../utils/customFetch';
// Utils
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
// Components
import { FormRow, FormRowSelect } from '../components';

// Loaders
export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/jobs/${params.id}`);
    return data;
  } catch (error) {
    // console.log(error);
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard/all-jobs');
  }
};
// Actions
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch(`/jobs/${params.id}`, data);
    toast.success('Job edited successfully');

    return redirect('/dashboard/all-jobs');
  } catch (error) {
    // console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const EditJob = () => {
  // const params = useParams();
  // console.log(params);
  const { job } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">edit job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" defaultValue={job.position} />
          <FormRow type="text" name="company" defaultValue={job.company} />
          <FormRow
            type="text"
            name="jobLocation"
            labelText="job location"
            defaultValue={job.jobLocation}
          />
          <FormRowSelect
            name="jobStatus"
            labelText="job status"
            list={Object.values(JOB_STATUS)}
            defaultValue={job.jobStatus}
          />
          <FormRowSelect
            name="jobType"
            labelText="job type"
            list={Object.values(JOB_TYPE)}
            defaultValue={job.jobType}
          />
          <button
            type="submit"
            className="btn form-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'submitting...' : 'submit'}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditJob;
