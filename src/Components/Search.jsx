import React, {useState} from 'react'
import Pagination from "./pagination";


export const Search = (props) => {

    const {searchMovies = Function.prototype} = props

    const [search, setSearch] = useState('')
    const [type, setType] = useState('all')
    const [page, setPage] = useState(1)

    const handleKey = (e) => {
        if (e.key === 'Enter' && search) {
            searchMovies(search, type, page)
        }
    }

    const handleFilterType = (e) => {
        setType(e.target.dataset.type)
        searchMovies(search, e.target.dataset.type, page)
    }
    const handlePageNumber = (e) => {
        setPage(Number(e))
        searchMovies(search, type, Number(e))
    }

    return (
        <div className="row">
            <div className="input-field">
                <input id="search"
                       className='validate'
                       placeholder=''
                       type="search"
                       value={search}
                       onChange={(e) => setSearch(e.target.value)}
                       onKeyDown={handleKey}
                />
                <label className='active'
                       htmlFor="search ">Search</label>
                {search &&
                <button className='#e1bee7 purple lighten-4 btn search-btn'
                        onClick={() => searchMovies(search, type)}>Search</button>
                }
            </div>
            <div className='controls'>
                <p>
                    <label className='radio'>
                        <input className="with-gap"
                               name="all"
                               type="radio"
                               data-type='all'
                               onChange={handleFilterType}
                               checked={type === 'all'}
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
                               onChange={handleFilterType}
                               checked={type === 'movie'}
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
                               onChange={handleFilterType}
                               checked={type === 'series'}
                        />
                        <span>Series only</span>
                    </label>
                </p>
                <p>
                    <a className="btn disabled"> Result: {props.result}</a>
                </p>
                <Pagination result={props.result}
                            page={page}
                            handlePageNumber={handlePageNumber}
                />
            </div>
        </div>
    )
}