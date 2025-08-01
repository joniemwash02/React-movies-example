const API_KEY = "d9b0389a4a92d3af711d16d102147b00"
const BASE_URL = 'https://api.themoviedb.org/3'
// https://api.themoviedb.org/3/search/movie?query=Batman&callback=test
export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to fetch popular movies:", error);
    return [];
  }
};

export const searchMovie = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Search failed:", error);
    return [];
  }
};
