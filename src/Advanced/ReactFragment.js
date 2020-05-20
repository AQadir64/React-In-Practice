// A common pattern in React is for a component to return multiple elements.
// Fragments let you group a list of children without adding extra nodes to the DOM.

import React, { Fragment } from "react";

function Columns() {
  const items = [
    { one: "hello", two: "world" },
    { one: "hello", two: "mars" },
    { one: "hello", two: "moon" },
    { one: "hello", two: "sun" },
  ];
  return (
    //   <> </>  short method for fragment
    <>
      {items.map((item, id) => {
        return (
          <Fragment key={id}>
            <td>item.one</td>
            <td>item.two</td>
          </Fragment>
        );
      })}
    </>
  );
}

function ReactFragment() {
  return (
    <table>
      <tbody>
        <tr>
          <Columns />
        </tr>
      </tbody>
    </table>
  );
}

export default ReactFragment;
