import React, { forwardRef } from 'react'
import "./VideoCard.css"
import TextTruncate from "react-text-truncate"
import {ThumbUpSharp} from "@material-ui/icons"
import FlipMove from "react-flip-move"

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({movie}, ref) => {
    return (
        <div ref ={ref} className='VideoCard'>
        <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} 
        alt="Movie poster"/>
        <TextTruncate 
        line={2}
        element="p"
        truncatetext="..."
        textTruncateChild={<a href="#">More</a>}
        text={movie.overview}
        />
        <h2>{movie.title || movie.original_name}</h2>
        <p className="vidStat">{movie.media_type && `${movie.original_name} *`}
            {movie.release_date || movie.first_air_date} .
    <ThumbUpSharp/>{" "}{movie.vote_count}</p>
        </div>
    )
});

export default VideoCard
