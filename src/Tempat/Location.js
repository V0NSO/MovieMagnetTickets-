import React, { useState, useEffect } from "react";
import "./Location.css";

function Location() {
  const [html, setHtml] = useState("");

  useEffect(() => {
    setHtml(`
    <h1>Rekomendasi Movie Untuk Anda</h1>
    <div id="wrapper">
    <div id="amelie" class="item">
      <a href="#amelie"><span class="case"><img src="https://s.cdpn.io/79/movie-amelie.jpg" /></span></a>
    </div>
    
    <div id="bruno" class="item">
      <a href="#bruno"><span class="case"><img src="https://s.cdpn.io/79/movie-goats.jpg" /></span></a>
    </div>
    
    <div id="american-beauty" class="item">
      <a href="#american-beauty"><span class="case"><img src="https://s.cdpn.io/79/movie-americanbeauty.jpg" /></span></a>
    </div>
    
    
    <div id="wall-e" class="item">
      <a href="#wall-e"><span class="case"><img src="https://s.cdpn.io/79/movie-wall-e.jpg" /></span></a>
    </div>
    
    
    <div id="fight-club" class="item">
      <a href="#fight-club"><span class="case"><img src="https://s.cdpn.io/79/movie-fightclub.jpg" /></span></a>
    </div>
    
  </div>
    `);
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
export default Location;
