import React from 'react'
import Cards from "../Components/Cards";
import {Preloader} from "../Components/Preloader";
import {Search} from "../Components/Search";

const API_KEY = process.env.REACT_APP_API_KEY


class Main extends React.Component {
    state = {
        movies: [],
        result: 10,
        loading: true,
        runtime: '',
        genre: '',
        actors: '',
        plot: '',
        country: '',
        ratings: '',
        changeID:'',
        prevactors: ''
    }
    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=iron man`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, result: data.totalResults, loading: false}))
            .catch((err) => {
                console.log(err);
                this.setState({loading: false})
            })
    }

    searchMovies = (str, type = 'all', page) => {
        this.setState({loading: true})
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str !== '' ? `${str}` : 'iron man'}${
            type !== 'all' ? `&type=${type}` : ''}${page !== 1 ? `&page=${page}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, result: data.totalResults, loading: false}))
    }
    searchAbout = (id) => {
        let cleanCardImage = document.querySelectorAll('.card-image')
        let cleanCardReveal = document.querySelectorAll('.card-reveal')
        if (this.state.changeID){
            for (let i=0; i< cleanCardImage.length; i++){
                cleanCardImage[i].style.overflow = "visible"
                cleanCardReveal[i].style.display = 'none'
            }
        }
        this.setState({actors: ''})
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(response => response.json())
            .then(data => this.setState(
                {runtime: data.Runtime,
                    result: data.totalResults,
                    genre: data.Genre,
                    actors: data.Actors,
                    plot: data.Plot,
                    country: data.Country,
                    ratings: data.imdbRating,
                    loading: false,
                    changeID: id
                }))
        this.setState({prevactors: this.state.actors})
    }

    render() {
        const {movies, result} = this.state
        return <main className='container content'>
            <Search searchMovies={this.searchMovies}
                    result={result}/>
            {
                !this.state.loading ?
                    <Cards movies={movies}
                           searchAbout={this.searchAbout}
                           {...this.state}
                    />
                    : <Preloader/>
            }

        </main>
    }


}

export {Main}