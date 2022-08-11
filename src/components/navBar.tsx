import "bootstrap/dist/css/bootstrap.min.css";
import "../css/navBar.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from'../img/logo.png';
import { Link } from 'react-router-dom';

export interface InavbarProps { }
const MyNavbar: React.FunctionComponent<InavbarProps> = (props) => { 
    
  return (
    <nav className="navbar navbar-expand-lg p-3 navbar-dark transparent-nav nav-js">
        <Navbar.Brand href="#home">
        <img alt="" src={logo} width="100" height="80" className="d-inline-block align-top"/>{' '}</Navbar.Brand>
        <Link className="navbar-brand" to='/'>WAZE PROJECT</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <Link to="/login" className="nav-item nav-link">Home</Link>
            <Link to="/signup" className="nav-item nav-link">Sign up</Link>  
            <Link to="/CreateSystem" className="nav-item nav-link">CreateSystem</Link>
            <Link to="/home" className="nav-item nav-link">Home</Link>
          </div>
          </div>
      </nav>     
  );
}

export default MyNavbar;

