import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import type { RootState } from "../app/store";
import { LogOut } from "lucide-react";
import { logout } from "../features/auth/authSlice";

const Layout = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  return (
    <div className='grid grid-rows-[auto_1fr_auto] min-h-screen'>
      <header className='bg-blue-800 h-[80px] text-white'>
        <div className='max-w-5xl mx-auto h-full flex justify-between items-center px-6'>
          <h1 className='text-xl font-bold'>StarWars</h1>
          <div className='flex items-center gap-3'>
            <h3 className='text-lg'>{user}</h3>
            <button onClick={handleLogout}>
              <LogOut className='w-5 h-5 hover:text-gray-300 cursor-pointer' />
            </button>
          </div>
        </div>
      </header>

      <main className='p-4 max-w-5xl mx-auto w-full'>
        <Outlet />
      </main>

      <footer className='bg-gray-100 p-4 text-center'>
        <p className='text-sm text-gray-600'>© 2025 StarWars App</p>
      </footer>
    </div>
  );
};

export default Layout;
