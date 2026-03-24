import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          Collaborate on the Future of Space Exploration
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
          SpaceCollab helps students, mentors, and researchers work together on
          space-related projects, experiments, and discoveries.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/register" className="bg-sky-500 px-6 py-3 rounded-xl hover:bg-sky-600">
            Get Started
          </Link>
          <Link to="/projects" className="border border-sky-500 px-6 py-3 rounded-xl hover:bg-slate-800">
            Explore Projects
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h3 className="text-xl font-bold mb-2">Collaborative Projects</h3>
          <p className="text-slate-300">Create and join student-led space missions and experiments.</p>
        </div>
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h3 className="text-xl font-bold mb-2">Mentor Guidance</h3>
          <p className="text-slate-300">Learn from mentors in astronomy, robotics, rockets, and satellites.</p>
        </div>
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h3 className="text-xl font-bold mb-2">Real-Time Collaboration</h3>
          <p className="text-slate-300">Discuss ideas, comments, and updates with your team in real time.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
