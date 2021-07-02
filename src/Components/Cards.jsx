import React from 'react'
import Card from "./Card";


function Cards(props) {
    const {movies = []} = props
    return (
        <div className='movies'>
            {movies.length ?
                movies.map(movie => (
                    <Card key={movie.imdbID}
                          searchAbout={props.searchAbout}
                          {...movie}
                          runtime={props.runtime}
                          genre={props.genre}
                          plot={props.plot}
                          actors={props.actors}
                          country={props.country}
                          ratings={props.ratings}
                          prevactors={props.prevactors}
                    />
                ))
                : <h4>Nothing was found</h4>
            }
        </div>


    )
}
export default Cards