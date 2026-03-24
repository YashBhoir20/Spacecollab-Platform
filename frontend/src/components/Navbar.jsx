import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-sky-400">
        SpaceCollab
      </Link>

      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:text-sky-400">Home</Link>
        <Link to="/projects" className="hover:text-sky-400">Projects</Link>

        {user ? (
          <>
            <Link to="/dashboard" className="hover:text-sky-400">Dashboard</Link>
            <Link to="/profile" className="hover:text-sky-400">Profile</Link>
            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-sky-400">Login</Link>
            <Link to="/register" className="bg-sky-500 px-4 py-2 rounded-lg hover:bg-sky-600">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
