import { Link } from 'react-router-dom';
// Wrappers
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
// Components
import { FormRow, Logo } from '../components';

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>login</h4>
        {/* EMAIL */}
        <FormRow type="text" name="email" defaultValue="adriano@mail.com" />
        {/* PASSWORD */}
        <FormRow type="password" name="password" defaultValue="adriano123" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <button type="button" className="btn btn-block">
          explore the app
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
