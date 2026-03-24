import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import NotificationBell from "../components/NotificationBell";

const DashboardPage = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await API.get("/users/profile");
        setProfile(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">
              Welcome, {profile?.user?.name || "Explorer"}!
            </h1>
            <p className="text-slate-400">Collaborate on the future of space exploration.</p>
          </div>
          <NotificationBell />
        </div>

        <h2 className="text-2xl font-semibold mb-4">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {profile?.projects?.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
