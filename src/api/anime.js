// TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Jikan API wrapper
/*export const searchAnime = async (query) => {
  if (!query) return [];
  const url = `${import.meta.env.VITE_ANIME_API || "https://api.jikan.moe/v4"}/anime?q=${encodeURIComponent(query)}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.data; // array of anime objects
  } catch (err) {
    console.error("Anime fetch error:", err);
    return [];
  }
};*/
