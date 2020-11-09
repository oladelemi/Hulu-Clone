const API_KEY = '5f5e4f059f377697b2361c2f10467d42'

export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchScifiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchTVMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10774`,
    


};