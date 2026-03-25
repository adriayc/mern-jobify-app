import { Link } from 'react-router-dom';
// Wrappers
import Wrapper from '../assets/wrappers/LandingPage';
// Images
import main from '../assets/images/main.svg';
// Components
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Blackbird spyplane meggings raclette 3 wolf moon, letterpress
            butcher squid chartreuse snackwave same asymmetrical disrupt tousled
            beard. Umami JOMO celiac jawn craft beer. Man bun ascot 3 wolf moon
            woke, chambray palo santo pok pok pug poke enamel pin disrupt lomo
            jianbing thundercats seitan. PBR&B pinterest actually gastropub woke
            hexagon jianbing tumblr direct trade viral. Waistcoat art party
            dreamcatcher pickled, tote bag migas synth master cleanse DIY health
            goth.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn login-link">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
