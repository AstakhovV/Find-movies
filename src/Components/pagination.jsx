import React, {useState} from 'react'

function Pagination(props) {
        let result = props.result
        let currentPage = props.page
        let pagesCount = Math.ceil(result / 10)
        let pagesCountArray =[]
        for (let i=1; i<=pagesCount; i++){
                pagesCountArray.push(i)
        }
        let numberPortionPaginator = Math.ceil(pagesCount / 5)

        let [portionNumber, setPortionNumber] = useState(1)
        let leftPortionPageNumber = (portionNumber - 1) * 5 + 1;
        let rightPortionPageNumber = portionNumber * 5;


        return (
            <ul className="pagination paginationRight">
                    {(portionNumber > 1) ?
                        <li className="waves-effect" onClick={() => {
                                setPortionNumber(portionNumber - 1)
                        }}><><i className="material-icons disabled">
                                chevron_left</i></>
                        </li>
                        : <li className="waves-effect"><><i className="material-icons disabled">
                                chevron_left</i></>
                        </li>

                    }
                    {pagesCountArray.filter(pages => pages >= leftPortionPageNumber && pages <= rightPortionPageNumber).map(page => {
                            return <li key={page}
                                       className={page === currentPage ?
                                           'active'
                                           : 'waves-effect'}
                                       data-value={page}
                                       onClick={(e) => {
                                               props.handlePageNumber(page)
                                       }}
                            >
                                    <a>{page}</a></li>
                    })}
                    {(numberPortionPaginator <= portionNumber) ?
                        <li className="waves-effect"><><i className="material-icons">
                                chevron_right</i></>
                        </li>
                        : <li className="waves-effect" onClick={() => {
                                setPortionNumber(portionNumber + 1)
                        }}><><i className="material-icons">
                                chevron_right</i></>
                        </li>
                    }
                    {
                            numberPortionPaginator ?
                                <a className="btn disabled">{portionNumber}/{numberPortionPaginator} </a>
                                : <></>

                    }
            </ul>

)
}

export default Pagination