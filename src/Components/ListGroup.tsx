interface Props {
  listItems: string[];
  heading: string;
  onSelectItem: (index: number) => void;
}

import { useState } from "react";

function ListGroup({ listItems, heading, onSelectItem }: Props) {
  const getMessage = () => {
    if (listItems.length === 0) {
      return <p>No items in the list</p>;
    }
  };
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //event handler
  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      {listItems.length === 0 && <p>No items in the list</p>}
      <ul className="list-group">
        {listItems.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(index);
            }}
          >
            {item}
          </li> 
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
