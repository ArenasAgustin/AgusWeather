import React from 'react';
import styleCard from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className={styleCard.card}>
        <div>
            <button onClick = {onClose} className={styleCard.close}>X</button> 
        </div>
        <div >
          <Link to={`/AgusWeather/ciudad/${id}`} >
            <h5 className={styleCard.cityLink}>{name}</h5>
          </Link>
          
          <div className={styleCard.flexDiv}>
            <div className = {styleCard.itemDiv}>
              <h5>Min</h5>
              <p className = {styleCard.parraf}>{`${parseInt(min + 273)}°K`}</p>
              <p className = {styleCard.parraf}>{`${parseInt(min)}°C`}</p>
              <p className = {styleCard.parraf}>{`${parseInt(min * 1.8 +32)}°F`}</p>
            </div>

            <div className = {styleCard.itemDiv}>
              <h5>Max</h5>
              <p className = {styleCard.parraf}>{`${parseInt(max + 273)}°K`}</p>
              <p className = {styleCard.parraf}>{`${parseInt(max)}°C`}</p>
              <p className = {styleCard.parraf}>{`${parseInt(max * 1.8 +32)}°F`}</p>
            </div>

            <div className = {styleCard.itemDiv}>
              <img
              src = {`https://openweathermap.org/img/wn/${img}@2x.png`} 
              alt = {`Clima en ${name}`}
              className = {styleCard.imgItem}/>
            </div>
          </div>
        </div>
      </div>
    );
};
