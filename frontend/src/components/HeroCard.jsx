import React from "react";

const HeroCard = ({ hero }) => {
  return (
    <div className="w-72 bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-300">
      {/* Hero Image */}
      <img
        src={hero.image}
        alt={hero.name}
        className="w-full h-40 object-cover"
      />

      {/* Hero Details */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{hero.name}</h2>
        <div className="mt-2 text-sm text-gray-600">
          <p><strong>Intelligence:</strong> {hero.intelligence}</p>
          <p><strong>Strength:</strong> {hero.strength}</p>
          <p><strong>Speed:</strong> {hero.speed}</p>
          <p><strong>Durability:</strong> {hero.durability}</p>
          <p><strong>Power:</strong> {hero.power}</p>
          <p><strong>Combat:</strong> {hero.combat}</p>
        </div>

        {/* Rank & Voting Info */}
        <div className="mt-4">
          <p className="text-sm text-gray-700">
            <strong>Votes:</strong> {hero.voteCount}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Rank:</strong> #{hero.rank} ({hero.rankChange > 0 ? "⬆" : "⬇"} {Math.abs(hero.rankChange)})
          </p>
          <p className="text-sm text-gray-700">
            <strong>Trend:</strong> {hero.trend}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Last Voted: {new Date(hero.lastVotedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
