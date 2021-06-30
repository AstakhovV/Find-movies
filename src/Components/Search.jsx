import React from 'react'
import Pagination from "./pagination";


export class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
        page: 1
    }
    handleKey = (e) => {
        if (e.key === 'Enter' && this.state.search) {
            this.props.searchMovies(this.state.search, this.state.type, this.state.page)
        }
    }

    handleFilterType = (e) => {
        this.setState(() => ({type: e.target.dataset.type
        }), () => {
            this.props.searchMovies(this.state.search, this.state.type, this.state.page)

        })
    }
    handlePageNumber = (e) => {
        debugger
        this.setState(() => ({page: Number(e)
        }), () => {
            this.props.searchMovies(
                this.state.search,
                this.state.type,
                this.state.page
            )

        })
    }

    render() {

        return (
            <div className="row">
                <div className="input-field">
                    <input id="search"
                           className='validate'
                           placeholder=''
                           type="search"
                           value={this.state.search}
                           onChange={(e) => this.setState({
                               search: e.target.value
                           })}
                           onKeyDown={this.handleKey}
                    />
                    <label className='active'
                           htmlFor="search ">Search</label>
                    {(this.state.search) &&
                    <button className='#e1bee7 purple lighten-4 btn search-btn'
                            onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
                    }
                </div>
                <div className='controls'>
                    <p>
                        <label className='radio'>
                            <input className="with-gap"
                                   name="all"
                                   type="radio"
                                   data-type='all'
                                   onChange={this.handleFilterType}
                                   checked={this.state.type === 'all'}
                            />
                            <span>All</span>
                        </label>
                    </p>
                    <p>
                        <label className='radio'>
                            <input className="with-gap"
                                   name="movie"
                                   type="radio"
                                   data-type='movie'
                                   onChange={this.handleFilterType}
                                   checked={this.state.type === 'movie'}

                            />
                            <span>Movies only</span>
                        </label>
                    </p>
                    <p>
                        <label className='radio'>
                            <input className="with-gap"
                                   name="series"
                                   type="radio"
                                   data-type='series'
                                   onChange={this.handleFilterType}
                                   checked={this.state.type === 'series'}

                            />
                            <span>Series only</span>
                        </label>
                    </p>
                    <p>
                        <a className="btn disabled"> Result: {this.props.result}</a>
                    </p>
                    <Pagination result={this.props.result}
                                page={this.state.page}
                                handlePageNumber={this.handlePageNumber}
                    />
                </div>
            </div>
        )
    }
}