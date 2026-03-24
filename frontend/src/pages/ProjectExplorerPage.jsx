import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

const ProjectExplorerPage = () => {
  const [projects, setProjects] = useState([]);
  const [filters, setFilters] = useState({ search: "", domain: "" });

  const fetchProjects = async () => {
    try {
      const query = new URLSearchParams(filters).toString();
      const { data } = await API.get(`/projects?${query}`);
      setProjects(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-6">Project Explorer</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            className="p-3 rounded bg-slate-800 flex-1"
            placeholder="Search projects..."
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
          <select
            className="p-3 rounded bg-slate-800"
            onChange={(e) => setFilters({ ...filters, domain: e.target.value })}
          >
            <option value="">All Domains</option>
            <option value="Astronomy">Astronomy</option>
            <option value="Rockets">Rockets</option>
            <option value="Satellites">Satellites</option>
            <option value="Robotics">Robotics</option>
            <option value="Space Biology">Space Biology</option>
          </select>
          <button
            onClick={fetchProjects}
            className="bg-sky-500 px-5 py-3 rounded hover:bg-sky-600"
          >
            Apply
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectExplorerPage;
