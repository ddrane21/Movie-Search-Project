import tmdb from "./tmdb";


export async function getMovieById(id) {
    try {
        const response = await tmdb.get(`/movie/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching movie", error);
        return null;
    }
}

export async function getPopularMovies(){
    try {
        const response = await tmdb.get('/movie/popular');
        return response.data.results;
    }catch (error) {
        console.error("Error fetching popular movies", error);
        return [];
    }
}

export async function getMoreMovies(page) {

    try{
        const response = await tmdb.get(`/movie/popular`, {
            params: {
                page: page,
            },
        });
        return response;
    }catch (error){
        console.error("Failed to fetch more movies:", error);
        return { data: { results: [] } };
    }
   
}

export async function SearchMovie(query){

    try{
        const response = await tmdb.get("/search/movie", {
            params: {
                query: query, 
            },
        });
        return response.data.results;
    }catch (error){
        console.error("Failed to find the movie", error);
        return [];
    }
}

export async function getPlayingMovies() {
    try {
        const response = await tmdb.get('/movie/now_playing');
        return response.data.results;
    } catch (error) {
        console.error("Error fetching currently playing movies", error);
        return [];
    }
}

export async function getTrendMovieToday() {
    try {
        const response = await tmdb.get('/trending/movie/day');
        return response.data.results;
    } catch (error) {
        console.error("Error fetching trending movies", error);
        return [];
    }
}

export async function getMovieTrailer(id) {
    try {
        const response = await tmdb.get(`/movie/${id}/videos`);
        return response.data.results;
    } catch (error) {
        console.error("Error fetching movie trailer", error);
        return [];
    }
}