import React from "react";
import './App.css';
import imageInSrc from "./imageInSrc.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
            <h1 className="title red">Abdelkader Manoubi</h1>
            <br />
            <img src={imageInSrc} width={500} height={500} alt="" />
            <br />
            <img src="/imageInPublic.png" width={500} height={500} alt="" />
          </div>
          <video width={320} height={240} controls>
            <source src="https://cdn.videvo.net/videvo_files/video/free/2020-05/small_watermarked/3d_ocean_1590675653_preview.webm" type="video/mp4" />
          </video>
        </>
      </header>
    </div>
  );
}

export default App;
