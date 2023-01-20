import "./Header.css";
import logo from "../../Images/images/MSlogo.png";

import SignUpForm from "./SignUpForm";
// import Media from "react-media";

const Header = () => {
  return (
    <div className="head-container">
      <img className="logo" src={logo} alt="website-logo" />
      <h1 className="header">Monolisaa Sarees and Salwars</h1>
      <SignUpForm />
    </div>
  );
};

export default Header;
