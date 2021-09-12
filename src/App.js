import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [cardList1, setCardList1] = useState([Card, Card]);
  const [cardList2, setCardList2] = useState([Card]);
  return (
    <div className="App">
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          const idx = e.dataTransfer.getData("card");
          console.log(
            `e.dataTransfer.getData('card')`,
            e.dataTransfer.getData("card")
          );
          const cardList1Copy = [Card, ...cardList1];
          setCardList1(cardList1Copy);
          const cardList2Copy = cardList2.splice(idx - 1, 1);
          setCardList2(cardList2Copy);
        }}
        className="first"
      >
        First Container
        {cardList1.map((Card, idx) => (
          <Card key={idx} idx={idx + 1} />
        ))}
      </div>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          const cardList2Copy = [Card, ...cardList2];

          setCardList2(cardList2Copy);
        }}
        className="second"
      >
        Second Container
        {cardList2.map((Card, idx) => (
          <Card key={idx} idx={idx + 1} />
        ))}
      </div>
    </div>
  );
}

const Card = ({ idx }) => {
  const onDragStart = (e) => {
    //console.log(e);
    e.dataTransfer.setData("card", idx);
  };
  return (
    <div draggable onDragStart={(e) => onDragStart(e)} className="card">
      Im card no. {idx}
    </div>
  );
};
