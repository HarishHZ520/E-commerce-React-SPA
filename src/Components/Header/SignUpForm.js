import "./SignUpForm.css";
import { HiOutlineUser } from "react-icons/hi2";

const SignUpForm = () => {
  return (
    <button className="sign-up">
      <HiOutlineUser className="user-icon" color="#f1f0ed" size="30px" />
    </button>
  );
};

export default SignUpForm;
