import React from "react"
import TableBody from "./TableBody"

function MainTable({headings, users, filterFunc}){
    return (
        <>
            <table>
            <thead>
          <tr>
            {headings.map(({ name, width, BDay }) => {
              return (
                <th
                  className="column"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    filterFunc(name.toLowerCase(), BDay);
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>
            <TableBody users={users}></TableBody>
            </table>
        </>


    )





}
export default MainTable