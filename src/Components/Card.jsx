import React from 'react'
import {Preloader} from "./Preloader";

function Card(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props
    return (
        <div id={id} className="card movie">
            <div className="card-image waves-effect waves-block waves-light"
                 onClick={(e) => {props.searchAbout(id)}}>
                {
                    poster === 'N/A' ?
                        <img className="activator"

                             src={
                            `https://via.placeholder.com/300x425?text=${title}`}/>
                        : <img className="activator" src={poster}/>

                }
            </div>
            <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{title}<i
                className="material-icons right"> </i></span>
                <p>{year} <span className='right'>{type}</span></p>

            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{title}<i
                    className="material-icons right">close</i>
                </span>
                { (props.actors) ? <div>
                    <p><b>Actors:</b> {props.prevactors}</p>
                    <p><b>Country:</b> {props.country}</p>
                    <p><b>Genre:</b> {props.genre}</p>
                    <p><b>Runtime: </b> {props.runtime} <span className='right'><b>Rating: </b> {props.ratings}</span></p>
                    <hr className="hrMargin"/>
                    <p><i>{props.plot}</i></p>
                </div> :  <Preloader/>
                }

            </div>
        </div>
    )
}

export default Card