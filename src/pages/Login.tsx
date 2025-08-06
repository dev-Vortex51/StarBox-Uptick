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
    if (!name.trim()) {
      toast.error("This field is required!");
      return;
    }
    dispatch(login(name));
    toast.success(`Welcome, ${name}!`);
    setName("");
    navigate("/", { replace: true });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
        src="https://www.w3schools.com/howto/rain.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

    
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/*  Form */}
      <div className="relative z-20 flex items-center justify-center h-screen">
        <form
          onSubmit={handleLogin}
          className="backdrop-blur-md bg-white/10 border border-white/30 text-white rounded-xl px-8 py-10 w-[90%] max-w-md shadow-lg flex flex-col gap-6"
        >
          <h2 className="text-2xl font-bold text-center">Welcome to StarMovie</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="bg-white/20 placeholder-white text-white px-4 py-3 rounded-full outline-none border border-white/30 focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-700 cursor-pointer hover:bg-blue-600 transition-all duration-200 text-white font-medium py-3 rounded-full"
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
