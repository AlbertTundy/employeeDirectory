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
                users: results.data.results,
                filteredUsers: results.data.results
            })
        })

    }
    // create handle search and filter functions
    filterFunc = heading => {
    if (this.state.order === "descend") {
      this.setState({
        order: "ascend"
      })
    } else {
      this.setState({
        order: "descend"
      })
    }
    const userSort = (a, b) => {
      if (this.state.order === "ascend") {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return a[heading] - b[heading];
        }
      } else {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    }
    const sortedUsers = this.state.filteredUsers.sort(userSort);
    this.setState({ filteredUsers: sortedUsers });
  }
  handleSearch = e => {
    console.log(e.target.value);
    const value = e.target.value;
    const currentList = this.state.users.filter(item => {
      // merge data together, then see if user input is anywhere inside
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(value.toLowerCase()) !== -1;
    });
    this.setState({ filteredUsers: currentList });
  }
    render (){

        return(
            <>
            {/* navbar with handle search */}
            <NavBar handleSearch={this.handleSearch}> </NavBar>
            
            {/* MainTable with filter */}
            <MainTable users={this.state.filteredUsers} filterFunc={this.filterFunc} headings={this.headings}></MainTable>
            </>
        )
    }

}