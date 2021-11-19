import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PieceOfArt from './PieceOfArt';


function App() {
  // piece of state to hold our art pieces

  const [art, setArt] = useState([]);

  // when the component mounts, call our API
  useEffect(() => {
    // call api using axios
    const apiKey = 'zNkS4LO6';
    axios({
      url: 'https://www.rijksmuseum.nl/api/en/collection',
      method: 'GET',
      responseType: 'json',
      params: {
        key: apiKey,
        imgonly: true
      }
    })
    .then(response => {
      console.log(response.data.artObjects);
      setArt(response.data.artObjects);
    })
  }, [])

  return (
    <div className="App">
      <h1>LOOOK AT MAH ART</h1>
      {
        art.map(artwork => {
          return(
             <PieceOfArt 
             key={artwork.id}
             alt={artwork.title}
             title={artwork.longTitle}
             imagePath={artwork.webImage.url}
             />
          )
        })
      }
    </div>
  );
}

export default App;
