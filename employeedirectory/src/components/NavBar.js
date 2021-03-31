import React from "react"


function NavBar ({handleSearch}) {
    return (
        <nav>
            <div>
                <form>
                    <input
                    className="form-control"
                    type="search"
                    placeholder="search"
                    //handle search in data functions
                    onChange={e => handleSearch(e)}
                    />
                </form>
            </div>
        </nav>
    )

}
export default NavBar