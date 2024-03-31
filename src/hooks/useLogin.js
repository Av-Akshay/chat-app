import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { addUser } from "../redux-toolkit/slice";

const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const handelSubmitLoginForm = async (data) => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      navigate("/");
      dispatch(addUser(response.user));
    } catch (error) {}
  };

  const minUppercasePattern = /[A-Z]+/;
  const minLowercasePattern = /[a-z]+/;
  const minNumberPattern = /[0-9]+/;
  const minSpecialCharPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  return {
    handleSubmit,
    register,
    errors,
    minLowercasePattern,
    minUppercasePattern,
    minNumberPattern,
    minSpecialCharPattern,
    handelSubmitLoginForm,
  };
};

export default useLogin;
