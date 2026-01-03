//TEST!!!!!!!!!!!!!!!!!!!!!!!

/*import React, { useState, useEffect } from "react";
import { searchAnime } from "./anime";
import Search from "../components/Search";

const AnimeSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [animeResults, setAnimeResults] = useState([]);

  useEffect(() => {
    const fetchAnime = async () => {
      if (searchTerm) {
        const results = await searchAnime(searchTerm);
        setAnimeResults(results);
      } else {
        setAnimeResults([]);
      }
    };

    const timeoutId = setTimeout(fetchAnime, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="anime-grid mt-4">
        {animeResults.map(anime => (
          <div key={anime.mal_id} className="anime-card">
            <img 
              src={anime.images.jpg.image_url} 
              alt={anime.title} 
              className="w-40 h-56 object-cover rounded-lg"
            />
            <h2 className="text-white mt-2 text-center text-sm">{anime.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeSearch;*/
