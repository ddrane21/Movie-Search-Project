import tmdb from "./tmdb";

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
        return response
    }catch (error){
        console.error("Failed to fetch more movies:", error);
        return { data: { results: [] } };
    }
   
}