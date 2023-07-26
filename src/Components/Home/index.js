// import { Data } from "./data";
// import { useState } from "react";

// const Home = () => {
//   const [cards, setCards] = useState(Data); 
//   const handleRemoveButton = (id) => {
//     const updatedCards = cards.map((card) =>
//       card.id === id ? { ...card, isRemove: true } : card
//     );
//     setCards(updatedCards);
//   };

//   return (
//     <>
//       {cards.map(({ id, title, price, img, isRemove }) => {
//         return (
//           <div className="Card" key={id}>
//             <img src={img} alt={title} />
//             <div className="CardText">
//               <h1>{title}</h1>
//               <p>{price}</p>
//               {!isRemove && <button onClick={() => handleRemoveButton(id)}>remove</button>}
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default Home;
import { Data } from "./data";
import { useState } from "react";

const Home = () => {
  const [cards, setCards] = useState(Data); 

  const handleRemoveButton = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  return (
    <>
      {cards.map(({ id, title, price, img }) => {
        return (
          <div className="Card" key={id}>
            <img src={img} alt={title} />
            <div className="CardText">
              <h1>{title}</h1>
              <p>{price}</p>
              <button onClick={() => handleRemoveButton(id)}>remove</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
