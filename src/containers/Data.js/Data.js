import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index';
import { Button, Jumbotron, Alert} from 'react-bootstrap';
import classes from './Data.module.css'
import Pagination from '../../components/Pagination/Pagination';
import DisplayData from '../../components/Table/DisplayData';



class Data extends Component {
    state = {
        isDataAvailable: false,
        postPerPage: 10,
        currentPage: 1
    }
    componentDidMount() {
        this.props.getData();
    }
    buttonGotclicked = () => {
        const dataAvailable = this.state.isDataAvailable
        this.setState({ isDataAvailable: !dataAvailable })
    }
    paginate = number => {
        this.setState({ currentPage:  number})   
    }
    inputFieldChange = (event) => {
        this.setState({postPerPage: event.target.value})
    }
    render() {
        let indexofLastPost = this.state.currentPage * this.state.postPerPage
        let indexofFirstPost = indexofLastPost - this.state.postPerPage
        if(this.props.dataLoaded){
        var currentPost = this.props.db.slice(indexofFirstPost, indexofLastPost)}
        let dataButton = (
            <Button  onClick={this.buttonGotclicked}>Get Data
            </Button>
        )
        let pagePerPostField  = null
        if (this.state.isDataAvailable) {
            dataButton = (
                <Button variant="danger" onClick={this.buttonGotclicked}> Remove Data
                </Button>
            )
            pagePerPostField = (
                <div className={classes.inputField}>
                <label>Posts Per Page</label>
                <input type="number" max="24"
                    onChange={(event)=>this.inputFieldChange(event)}
                    value={this.state.postPerPage} />
                </div>
            )
        }
        let alertBox = null
        if(this.props.showError){
            alertBox = (
                <Alert variant="danger">
                    {this.props.errorMessage.message}
                </Alert>
            )
        }
        var content = (
            <Fragment>
            <DisplayData currentPost={currentPost} showData={this.state.isDataAvailable} />
            { this.state.isDataAvailable ? <Pagination totalPost="24" paginate={this.paginate} pagePerPost={this.state.postPerPage}></Pagination> : null }
            </Fragment>
        )
        return (
            <Fragment>
                <Jumbotron>
                    <h1>Logistics Company</h1>
                    <p>
                        This is a webiste where when the user logs in he can see all the shipments and sort it according to his needs and search for a particular data
                </p>
                </Jumbotron>
                <div className={classes.buttonStyling}>
                    {dataButton}
                    {pagePerPostField}
                </div>
                {this.state.isDataAvailable ? this.props.showError ? alertBox : content : null} 

            </Fragment>

        )
    }
}
const mapStateToProps = state => ({
    dataLoaded: state.dataLoaded,
    showError: state.showError,
    errorMessage: state.errorMessage
})
const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(actions.getDataFromServer()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Data)
