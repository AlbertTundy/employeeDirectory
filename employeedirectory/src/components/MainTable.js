import React from "react"
import tableBody from "./tableBody"

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
                    filter(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>
            <tableBody users={users}></tableBody>
            </table>
        </>


    )





}
