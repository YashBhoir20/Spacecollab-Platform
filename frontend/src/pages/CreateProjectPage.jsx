import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import Navbar from "../components/Navbar";

const CreateProjectPage = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    domain: "Astronomy",
    status: "Open"
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/projects", form);
      navigate(`/projects/${data._id}`);
    } catch (error) {
      alert(error.response?.data?.message || "Failed to create project");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-6">Create New Project</h1>
        <form onSubmit={handleSubmit} className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <input
            className="w-full p-3 mb-4 rounded bg-slate-800"
            placeholder="Project Title"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <textarea
            className="w-full p-3 mb-4 rounded bg-slate-800"
            rows="6"
            placeholder="Project Description"
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <select
            className="w-full p-3 mb-4 rounded bg-slate-800"
            onChange={(e) => setForm({ ...form, domain: e.target.value })}
          >
            <option>Astronomy</option>
            <option>Rockets</option>
            <option>Satellites</option>
            <option>Robotics</option>
            <option>Space Biology</option>
          </select>
          <select
            className="w-full p-3 mb-4 rounded bg-slate-800"
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option>Open</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <button className="bg-sky-500 px-6 py-3 rounded hover:bg-sky-600">
            Create Project
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateProjectPage;
