import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import MainLayout from "../layouts/MainLayout";
import HeroCard from "../components/HeroCard";
import CardRowTwo from "../components/CardRowTwo";
import CardRowThree from "../components/CardRowThree";
import sampleHeroes from "../../data/sample.json";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Stored token:", token); // Debugging

    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
          // Token expired, log out user
          localStorage.removeItem("token");
          setUser(null);
          navigate("/");
        } else {
          // Token valid, set user details
          setUser({
            name: decoded.name,
            image: decoded.picture,
          });
        }
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("token");
        setUser(null);
        navigate("/");
      }
    }
  }, [navigate]);

  // Simulated login (Replace with real Google OAuth logic)
  const handleLogin = () => {
    const dummyToken = {
      name: "John Doe",
      picture: "https://via.placeholder.com/40",
      exp: Math.floor(Date.now() / 1000) + 3600, // Expires in 1 hour
    };
    localStorage.setItem("token", JSON.stringify(dummyToken)); // Fix: Ensure valid JWT
    setUser(dummyToken);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <MainLayout user={user} onLogin={handleLogin} onLogout={handleLogout}>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

        {/* Top 2 Heroes */}
        <h2 className="text-2xl font-bold mb-4">Top 2 Heroes</h2>
        <CardRowTwo>
          {sampleHeroes.slice(0, 2).map((hero, index) => (
            <HeroCard key={index} hero={hero} />
          ))}
        </CardRowTwo>

        {/* Top 3 Heroes */}
        <h2 className="text-2xl font-bold mt-6 mb-4">Top 3 Heroes</h2>
        <CardRowThree>
          {sampleHeroes.map((hero, index) => (
            <HeroCard key={index} hero={hero} />
          ))}
        </CardRowThree>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
