import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
// Custom fetch
import customFetch from '../utils/customFetch';

// Actions
export const action = async ({ params }) => {
  try {
    await customFetch.delete(`jobs/${params.id}`);
    toast.success('Job deleted successfully');
  } catch (error) {
    // console.log(error);
    toast.error(error?.response?.data?.msg);
  }
  return redirect('/dashboard/all-jobs');
};

// Remove component!!!
