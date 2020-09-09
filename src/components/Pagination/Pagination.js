import React from 'react'
import {Nav} from 'react-bootstrap'

const Pagination = (props) => {
    const pageNumbers = [] 
    for(let i=1; i<=Math.ceil(props.totalPost/props.pagePerPost); i++){
        pageNumbers.push(i)
    }
    return (
        <Nav>
            <ul className="pagination">
            {pageNumbers.map(number=>{
               return( <li key={number} className="page-item">
                    <a href="#!" onClick={()=>props.paginate(number)} className="page-link">{number}</a>
                </li>
            )})}
            </ul>
        </Nav>
    )
}

export default Pagination
