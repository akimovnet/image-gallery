import React from 'react';
import Gallery from "./Gallery";
import imageList from '../exampleImages';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Gallery!</h1>
      <Gallery imageList={imageList} />
    </div>
  );
}

export default App;
