import { Form, Link, redirect, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';
// Wrappers
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
// Utils
import customFetch from '../utils/customFetch';
// Components;
import { FormRow, Logo, SubmitBtn } from '../components';

// Actions
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.log(data);

  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration successful');
    return redirect('/login');
  } catch (error) {
    // console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        {/* NAME */}
        <FormRow type="text" name="name" defaultValue="john" />
        {/* LAST NAME */}
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="doe"
        />
        {/* LOCATION */}
        <FormRow type="text" name="location" defaultValue="earth" />
        {/* EMAIL */}
        <FormRow type="email" name="email" defaultValue="john@mail.com" />
        {/* PASSWORD */}
        <FormRow type="password" name="password" defaultValue="secret123" />
        {/* Submit Btn */}
        <SubmitBtn />
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
