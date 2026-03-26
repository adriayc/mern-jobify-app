import { useParams } from 'react-router-dom';
// Wrappers
import Wrapper from '../assets/wrappers/DashboardFormPage';

// Loaders
export const loader = ({ params }) => {
  console.log(params);
  return null;
};
// Actions
export const action = () => {
  return null;
};

const EditJob = () => {
  const params = useParams();
  console.log(params);

  return <h1>EditJob Page</h1>;
};

export default EditJob;
