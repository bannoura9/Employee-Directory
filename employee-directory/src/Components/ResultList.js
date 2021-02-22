import React from "react";
import { useTable, useSortBy } from "react-table-6";
import "./Result.css"

// import "./result.css"

function ResultList(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <table>
        <thead className="header">
          <tr>
            <th>
              <button>Image</button>
            </th>
            <th onClick={() => props.nameArray()}>
              <button onClick={() => props.sortBy("name.last")}>Name</button>
            </th>
            <th>
              <button>Phone</button>
            </th>
            <th>
              <button>Email</button>
            </th>
            <th>
              <button>DOB</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(({ name, phone, email, dob, login, picture }) => {
            if (name.last.toLowerCase().includes(props.search)) {
              return (
                <tr className="list-group-item" key={login.uuid}>
                  <td>
                    <img src={picture.thumbnail} alt="" />
                  </td>
                  <td>
                    {name.first} {name.last}
                  </td>
                  <td>{phone}</td>
                  <td>{email}</td>
                  <td>{dob.date.slice(0, 10)}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ResultList;
