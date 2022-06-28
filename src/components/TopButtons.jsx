import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "ロンドン",
    },
    {
      id: 2,
      title: "シドニー",
    },
    {
      id: 3,
      title: "東京",
    },
    {
      id: 4,
      title: "トロント",
    },
    {
      id: 5,
      title: "パリ",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city, id) => (
        <button
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
          key={id}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
