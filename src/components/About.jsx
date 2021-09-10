import React from 'react';
import styleAb from './styles/About.module.css';

export default function About(){ return (
	<div className={styleAb.aboutCard}>
		<h2> About: </h2>
		<div className={styleAb.text}>
            <div>Agustin Arenas</div>
            <div>Estudiante en Soy Henry</div>
            <div>Esta es mi primer SPA creada utilizando React y obteniendo datos de la API de Open Weather Map, para poder brindar informacion sobre el clima de las ciudades.</div>
        </div>
	</div>)
}