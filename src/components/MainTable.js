import React from "react"
import TableBody from "./TableBody"

function MainTable({headings, users, filter}){
    return (
        <>
            <table>
            <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th
                  className="column"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    filterFunc(name.toLowerCase());
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
