import axios from 'axios';


export type MovieSearchResultType = {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}

export type APIResponseType = {
    Response: string
    Search: Array<MovieSearchResultType>
    Error: string
    totalResults: string
};

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = 'f181ee89';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get<APIResponseType>(`/?apikey=${key}&s=${title}`)
            .then(res => res.data)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get<APIResponseType>(`/?apikey=${key}&s=${title}&type=${type}`)
            .then(response => response.data);
    }
};

export default API;

const a = {
    "Title":"Best F(r)iends Volume Two",
    "Year":"2018",
    "Rated":"R",
    "Released":"21 Jun 2018",
    "Runtime":"93 min",
    "Genre":"Comedy, Drama, Thriller",
    "Director":"Justin MacGregor",
    "Writer":"Greg Sestero",
    "Actors":"Tommy Wiseau, Greg Sestero, Kristen StephensonPino",
    "Plot":"Leaving the mortician adrift, the drifter finds himself on an expedition across the Southwest encountering wild and crazy characters through a series of twisted and dark foibles.",
    "Language":"English",
    "Country":"United States",
    "Awards":"N/A",
    "Poster":"https://m.media-amazon.com/images/M/MV5BMmY0OTg0YjYtNjcxMC00YjRkLWFhYzQtZTQyNzQzNzFiMmU3XkEyXkFqcGdeQXVyNzM0MTY5NTE@._V1_SX300.jpg",
    "Ratings":
        [
            {"Source":"Internet Movie Database",
                "Value":"5.0/10"
            }
    ],
    "Metascore":"N/A",
    "imdbRating":"5.0",
    "imdbVotes":"989",
    "imdbID":"tt7694738",
    "Type":"movie",
    "DVD":"22 Jan 2019",
    "BoxOffice":"$141,524",
    "Production":"N/A",
    "Website":"N/A",
    "Response":"True"
}