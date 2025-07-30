import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const dispatch = useDispatch();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      toast.error("This field is required!");
      return;
    }
    dispatch(login(name));
    toast.success(`Welcome, ${name}!`);
    setName("");
    navigate("/", { replace: true });
  };

  return (
    <form
      onSubmit={handleLogin}
      className='flex flex-col gap-4 items-center justify-center h-screen'>
      <input
        type='text'
        placeholder='Enter your name'
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
        className='border-2 border-blue-800 py-4 px-6 w-[15rem] rounded-full outline-none focus:transform focus:translate-y-2 transition-transform duration-200'
      />
      <button
        type='submit'
        className='bg-blue-800 text-white py-4 px-6 w-[15rem] rounded-full hover:bg-blue-700 transition duration-200 cursor-pointer'>
        Get Started
      </button>
    </form>
  );
};

export default Login;
