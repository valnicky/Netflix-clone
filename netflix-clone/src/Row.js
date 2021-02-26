import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css";
import requests from './requests';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);


    //a snippet of code which runs based on a specific condition
    useEffect(() => {
        //if [], run once when the row loads, and don t run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return ( < div className = "row" >
            <
            h2 > { title } < /h2> 

            <
            div className = "row__posters" > { /*row__poster */ }

            {
                movies.map(movie => ( < img key = { movie.id }

                        className = { `row__poster ${isLargeRow && "row__posterLarge"}` }

                        src = { `${base_url}${isLargeRow ? movie.poster_path :  movie.backdrop_path}` }
                        alt = { movie.name }
                        />))} <
                        /div>

                        <
                        /div>
                    )
                }

                export default Row;