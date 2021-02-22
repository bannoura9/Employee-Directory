import React, { useState, useEffect } from "react";
import { useTable, useSortBy } from "react-table-6";
import "./Result.css";

// import "./result.css"

function ResultList(props) {
  const [ascOrder, setAscOrder] = useState(true);
  const [list, setList] = useState([...props.results]);
  useEffect(() => {
    console.log("render");
    setList(props.results);
  }, [ascOrder, props.results, list]);
  let compare = (o1, o2) => {
    if (ascOrder) {
      console.log("ascending");
      if (o1.name.last > o2.name.last) {
        return -1;
      } else if (o1.name.last < o2.name.last) {
        return 1;
      }
    } else {
      console.log("descending");
      if (o1.name.last < o2.name.last) {
        return 1;
      } else if (o2.name.last < o1.name.last) {
        return -1;
      }
    }
    return 0;
  };
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
              <button
                onClick={() => {
                  let tempList = [...list];
                  tempList.sort(compare);
                  setList([...tempList]);
                  // props.results.sort(compare);
                  setAscOrder((order) => !order);
                }}
              >
                Name
              </button>
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
          {list.map(({ name, phone, email, dob, login, picture }) => {
            if (name.last.toLowerCase().includes(props.search.toLowerCase())) {
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
