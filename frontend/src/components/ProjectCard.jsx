import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 shadow-lg hover:shadow-sky-900/20">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-slate-300 mb-3 line-clamp-3">{project.description}</p>

      <div className="flex justify-between text-sm text-slate-400 mb-3">
        <span>{project.domain}</span>
        <span>{project.status}</span>
      </div>

      <Link
        to={`/projects/${project._id}`}
        className="inline-block bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-lg"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProjectCard;
