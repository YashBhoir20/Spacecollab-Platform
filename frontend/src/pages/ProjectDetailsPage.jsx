import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import CommentList from "../components/CommentList";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");

  const fetchProject = async () => {
    const { data } = await API.get(`/projects/${id}`);
    setProject(data);
  };

  const fetchComments = async () => {
    const { data } = await API.get(`/comments/${id}`);
    setComments(data);
  };

  useEffect(() => {
    fetchProject();
    fetchComments();
  }, [id]);

  const handleJoin = async () => {
    try {
      await API.post(`/projects/${id}/join`);
      fetchProject();
      alert("Joined project");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to join");
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    try {
      await API.post(`/comments/${id}`, { content });
      setContent("");
      fetchComments();
    } catch (error) {
      alert(error.response?.data?.message || "Failed to comment");
    }
  };

  if (!project) return <div><Navbar /><p className="p-6">Loading...</p></div>;

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 mb-8">
          <h1 className="text-4xl font-bold mb-3">{project.title}</h1>
          <p className="text-slate-300 mb-4">{project.description}</p>

          <div className="flex gap-4 text-sm text-slate-400 mb-4">
            <span>Domain: {project.domain}</span>
            <span>Status: {project.status}</span>
            <span>Members: {project.members?.length}</span>
          </div>

          <button
            onClick={handleJoin}
            className="bg-sky-500 px-5 py-2 rounded hover:bg-sky-600"
          >
            Join Project
          </button>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <h2 className="text-2xl font-semibold mb-4">Comments & Collaboration</h2>

          <form onSubmit={handleComment} className="mb-6">
            <textarea
              className="w-full p-3 rounded bg-slate-800 mb-3"
              rows="4"
              placeholder="Add a comment..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button className="bg-sky-500 px-5 py-2 rounded hover:bg-sky-600">
              Post Comment
            </button>
          </form>

          <CommentList comments={comments} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
