import axios from "axios";

const movieBaseUrl="http://api.themoviedb.org/3"
const api_key= "226fa11333b277fbfc18b9649fc449fc"

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=226fa11333b277fbfc18b9649fc449fc';

//https://api.themoviedb.org/3/trending/all/day?api_key=226fa11333b277fbfc18b9649fc449fc

const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)