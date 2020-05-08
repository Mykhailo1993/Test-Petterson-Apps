import React, { useState, useEffect } from "react";

import { List } from "./List/List";

function Country() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setItems([...items.reverse()]);
        }}
      >
        Сортувати у зворотньому порядку
      </button>
      <button
        onClick={() => {
          items.sort((item1, item2) => {
            return item2.population - item1.population;
          });

          setItems([...items]);
        }}
      >
        Сортувати за населенням
      </button>
      <List items={items}></List>
    </div>
  );
}
export { Country };
