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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/*  Header */}
      <header className="backdrop-blur bg-black/30 border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto h-[80px] flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold tracking-wide">🌌 StarWars</h1>
          <div className="flex items-center gap-4">
            <span className="text-md font-medium">{user}</span>
            <button
              onClick={handleLogout}
              className="p-2 rounded-full hover:bg-white/10 transition"
              title="Logout"
            >
              <LogOut className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/*  Main Content */}
      <main className="flex-1 px-4 py-8 max-w-6xl mx-auto w-full">
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md shadow-lg">
          <Outlet />
        </div>
      </main>

      {/*  Footer */}
      <footer className="bg-black/30 border-t border-white/10 backdrop-blur py-4 text-center">
        <p className="text-sm text-gray-400">© 2025 StarWars App. May the Force be with you.</p>
      </footer>
    </div>
  );
};

export default Layout;
