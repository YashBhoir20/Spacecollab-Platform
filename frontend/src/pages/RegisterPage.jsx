import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student"
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/register", form);
      login(data);
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center px-4">
        <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-xl w-full max-w-md border border-slate-800">
          <h2 className="text-3xl font-bold mb-6">Register</h2>
          <input
            className="w-full p-3 mb-4 rounded bg-slate-800"
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="w-full p-3 mb-4 rounded bg-slate-800"
            placeholder="Email"
            type="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            className="w-full p-3 mb-4 rounded bg-slate-800"
            placeholder="Password"
            type="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <select
            className="w-full p-3 mb-4 rounded bg-slate-800"
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option>Student</option>
            <option>Mentor</option>
            <option>Admin</option>
          </select>
          <button className="w-full bg-sky-500 p-3 rounded hover:bg-sky-600">
            Register
          </button>
          <p className="mt-4 text-slate-400">
            Already have an account? <Link to="/login" className="text-sky-400">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
