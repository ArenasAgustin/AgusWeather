import React, { useState } from "react";
import stylesBar from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('')
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
        className={stylesBar.input}
      />
      <input type="submit" value="Agregar" className={stylesBar.btn} />
    </form>
  );
}
