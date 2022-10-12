import React from "react";
import {MovieSearchResultType} from "./API";

type MoviePropsType = {
    movie: MovieSearchResultType
};

export const Movie: React.FC<MoviePropsType> = ({movie}) => {
    return (
        <div>
            <div>
                <img src={movie.Poster} alt={movie.Title}/>
            </div>
            <div>
                <h2>{movie.Title}</h2>
                <p>Year: {movie.Year}, type: {movie.Type}</p>
            </div>
        </div>
    );
};