import React from "react"
import Axios from "../axios"
import MainTable from "./MainTable"
import NavBar from "./NavBar"

export default class DataFunction extends React.Component{

    // set state
    state={
        users: [{}], 
        order: "descend",
        filteredUsers: [{}]
    }
    headings=[
        { name: "Image", width: "20%" },
        { name: "Name", width: "20%" },
        { name: "Phone", width: "20%" },
        { name: "Email", width: "20%" },
        { name: "DOB", width: "20%" }
    ]
    // componentDidMount life cycle method that will fire axios call on page load.
    componentDidMount(){
        Axios.employeeApi().then(results => {
            this.setState({
                users: results.data.results
            })
        })

    }
    
    
    // create handle search and filter functions



    render (){

        return(
            <>
            {/* navbar with handle search */}
            <NavBar handleSearch={this.handleSearch}> </NavBar>
            
            {/* MainTable with filter */}
            <MainTable users={this.state.filteredUsers} filter={this.filter} headings={this.headings}></MainTable>
            </>
        )
    }

}