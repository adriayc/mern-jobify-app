import { Form, Link, redirect } from 'react-router-dom';
// Wrappers
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
// Utils
import customFetch from '../utils/customFetch';
// Components;
import { FormRow, Logo } from '../components';

// Actions
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.log(data);

  try {
    await customFetch.post('/auth/register', data);
    return redirect('/login');
  } catch (error) {
    console.log(error);
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
        <button type="submit" className="btn btn-block">
          submit
        </button>
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
