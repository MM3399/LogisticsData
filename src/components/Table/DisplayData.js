import React, { Fragment } from 'react'
import { Table } from 'react-bootstrap'
import classes from './DisplayData.module.css';



const DisplayData = (props) => {

    if(props.showData){
    const tableBody = (
        <tbody>
            {props.currentPost.map((el,id)=>{
                return(
                    <tr key={id}>
                        <td >{el.id}</td>
                        <td>{el.name}</td>
                        <td colSpan="3">{el.cargo.map((el,id)=>(
                            <tr key={id}>
                                <td>{el.type}</td>
                                <td>{el.description}</td>
                                <td>{el.volume}</td>
                            </tr>
                        ))}</td>
                        <td>{el.mode}</td>
                        <td>{el.type}</td>
                        <td>{el.destination}</td>
                        <td>{el.origin}</td>
                        <td colSpan="2">{el.services.map((el, id) => (
                            <tr key={id}>
                                <td>{el.type}</td>
                                <td>{el.value}</td>
                            </tr>
                        ))}</td>
                        <td>{el.total}</td>
                        <td>{el.status}</td>
                        <td>{el.userId}</td>
                    </tr>
                )
            })}
        </tbody>
    )
    return (
        <Fragment>
            <Table className={classes.tableDisplay}  striped bordered hover responsive="lg">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th colSpan="3">Cargo</th>
                        <th>Mode</th>
                        <th>Type</th>
                        <th>Destination</th>
                        <th>Origin</th>
                        <th colSpan="2">Services</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>UserID</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Volume</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Type</th>
                        <th>Value</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                    {tableBody}
            </Table>
        </Fragment>
    )}
    else return null
}


export default DisplayData
