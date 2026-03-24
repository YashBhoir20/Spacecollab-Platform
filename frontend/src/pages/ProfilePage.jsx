import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";

const ProfilePage = () => {
  const [profile, setProfile] = useState({ user: null });

  useEffect(() => {
    const fetchProfile = async () => {
      const { data } = await API.get("/users/profile");
      setProfile(data);
    };
    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">
          <h1 className="text-4xl font-bold mb-4">User Profile</h1>
          <p className="text-lg mb-2"><strong>Name:</strong> {profile.user?.name}</p>
          <p className="text-lg mb-2"><strong>Email:</strong> {profile.user?.email}</p>
          <p className="text-lg mb-2"><strong>Role:</strong> {profile.user?.role}</p>
          <p className="text-lg mb-2"><strong>Bio:</strong> {profile.user?.bio || "No bio yet"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
