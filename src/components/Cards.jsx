import React from 'react';
import cardsStyle from './styles/Cards.module.css';
import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  return (
    <div className={cardsStyle.flexConteiner}>
      {cities.map(c => <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
          id={c.id}
        /> )}
    </div>
  );
}
