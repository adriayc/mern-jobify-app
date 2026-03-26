import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Link to="/register">Register Page</Link>
      <a href="https://johnsmilga.com/courses">John Smilga Courses</a>
    </div>
  );
};

export default Login;
