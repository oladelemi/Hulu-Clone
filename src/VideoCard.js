import React from 'react'
import "./VideoCard.css"
import TextTruncate from "react-text-truncate"
import {ThumbUpSharp} from "@material-ui/icons"

const base_url = "https://image.tmdb.org/t/p/original/";

function VideoCard({movie}) {
    return (
        <div className='VideoCard'>
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
}

export default VideoCard
