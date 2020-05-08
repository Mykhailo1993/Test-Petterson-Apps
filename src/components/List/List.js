import React from "react";
import "./List.css";
const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={index}>
            {index+1}.{item.name} ----- {item.population}
          </li>
        );
      })}
    </ul>
  );
};

export { List };
