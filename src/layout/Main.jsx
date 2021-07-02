import React, {useState, useEffect} from 'react'
import Cards from "../Components/Cards";
import {Preloader} from "../Components/Preloader";
import {Search} from "../Components/Search";

const API_KEY = process.env.REACT_APP_API_KEY

function Main () {

    const [movies, setMovies] = useState([]);
    const [result, setResult] = useState(10);
    const [loading, setLoading] = useState(true);
    const [runtime, setRuntime] = useState('');
    const [genre, setGenre] = useState('');
    const [actors, setActors] = useState('');
    const [plot, setPlot] = useState('');
    const [country, setCountry] = useState('');
    const [ratings, setRatings] = useState('');
    const [changedID, setChangedID] = useState(1);
    const [prevactors, setPrevactors] = useState('');

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=iron man`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setResult(data.totalResults)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
            })
    }, [])

    const searchMovies = (str, type = 'all', page) => {
        setLoading(true)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str !== '' ? `${str}` : 'iron man'}${
            type !== 'all' ? `&type=${type}` : ''}${page !== 1 ? `&page=${page}` : ''}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search)
                setResult(data.totalResults)
                setLoading(false)
            })
    }
    const searchAbout = (id) => {
        let cleanCardImage = document.querySelectorAll('.card-image')
        let cleanCardReveal = document.querySelectorAll('.card-reveal')
        if (changedID) {
            for (let i = 0; i < cleanCardImage.length; i++) {
                cleanCardImage[i].style.overflow = "visible"
                cleanCardReveal[i].style.display = 'none'
            }
        }
        setActors('');
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(response => response.json())
            .then(data => {
                    setRuntime(data.Runtime);
                    setGenre(data.Genre);
                    setActors(data.Actors);
                    setPlot(data.Plot);
                    setCountry(data.Country);
                    setRatings(data.imdbRating);
                    setLoading(false);
                    setChangedID(id)
                }
            )
        setPrevactors(actors)
    }

    return <main className='container content'>
        <Search searchMovies={searchMovies}
                result={result}/>
        {!loading ?
            <Cards movies={movies}
                   actors={actors}
                   runtime={runtime}
                   genre={genre}
                   plot={plot}
                   country={country}
                   ratings={ratings}
                   prevactors={prevactors}
                   searchAbout={searchAbout}
            />
            : <Preloader/>
        }
    </main>
}

export {Main}