import React from 'react';
import styleAb from './About.module.css';

export default function About(){ return (
	<div className={styleAb.about}>
		<h1> About: </h1>
		<div className={styleAb.text}>
            <div>Nombre: Agustin Arenas</div>
            <div>Esta app muestra el clima en distintas ciudades</div>
        </div>
	</div>)
}