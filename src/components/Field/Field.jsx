import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import classes from './Field.module.css';

export default function Field ({cards, reset, finish, backSide}) {

  const [openCards, setOpenCards] = useState([]);
  const [matched, setMatched] = useState([]);
  const [lockBoard, setLockBoard] = useState(false);


  useEffect(() => {
    const firstCard = cards[openCards[0]];
    const secondCard = cards[openCards[1]]; 

    if (secondCard && firstCard.id === secondCard.id) {
      setMatched([...matched, firstCard.id]);
    }

    if (openCards.length === 2) {
      setLockBoard(true);

      setTimeout(() => {
        setOpenCards([]);

        setLockBoard(false);
      }, 800);
    }

    if (matched.length === Math.floor(cards.length/2)) {
      finish()
    };

  }, [openCards]);

  const handleFlip = (index) => {
    if (openCards.includes(index)) return
    if (lockBoard) return

    setOpenCards( (opened) => [...opened, index])
  }

  const restart = () => {
      setOpenCards([]);
      setMatched([]);
      setLockBoard(false);
  };
  
  useEffect(() => reset ? restart : '');

  return (
    <section className={classes.game}>
    { cards.map( (card, index) =>  {
      let flipCard = false;

      if (openCards.includes(index)) flipCard = true;
      if (matched.includes(card.id)) flipCard = true;

      return <Card 
        key={index} 
        index={index} 
        flipCard={flipCard} 
        path={card.path} 
        name={card.name} 
        backSide={backSide} 
        callback={handleFlip} />
        }
      )}
    </section>
  );
}
