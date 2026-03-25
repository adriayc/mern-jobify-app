import { Link } from 'react-router-dom';
// Wrappers
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
// Components;
import { FormRow, Logo } from '../components';

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        {/* NAME */}
        <FormRow type="text" name="name" defaultValue="adriano" />
        {/* LAST NAME */}
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="ayala"
        />
        {/* LOCATION */}
        <FormRow type="text" name="location" defaultValue="earth" />
        {/* EMAIL */}
        <FormRow type="email" name="email" defaultValue="adriano@mail.com" />
        {/* PASSWORD */}
        <FormRow type="password" name="password" defaultValue="adriano123" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
