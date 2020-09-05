import React from 'react';
import { Parallax } from 'react-parallax';
import './App.css'

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image3 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

  const inlineStyle = {
    background:'#fff',
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)',
  }

function App() {
  return (
    <div style={{textAlign: 'center'}}>
      <Parallax bgImage={image1} strength={500}>
        <div style={ {height: 500}}> 
          <div style={inlineStyle}>building dynamic content</div>
        </div>
      </Parallax>
        <h1> ||| </h1>
      <Parallax bgImage={ image2 } blur={{ min: -20 , max : 45}}>
        <div style={ {height: 500}}> 
          <div style={inlineStyle}>providing intutive features</div>
        </div>
      </Parallax>
      <h1> ||| </h1>
      <Parallax bgImage={image3} strength={-200}>
        <div style={ {height: 500}}> 
          <div style={inlineStyle}>with modern design</div>
        </div>
      </Parallax>
      <h1> ||| </h1>
      <Parallax bgImage={image4} strength={200}
                renderLayer = {percentage => (
                  <div
                    style={{
                    position:'absolute',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%', 
                    background: `rgba(255, 123, ${percentage * 3}`,
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) scale(${percentage * 5})`,
                    opacity: '.6'
                    }}
                  >
                    {console.log(percentage)}
                  </div>
                )}
      >
        <div style={ {height: 500}}> 
          <div style={inlineStyle}>to captivate your audience</div>
        </div>
      </Parallax>
      <div style={{height: '40vh'}}></div>
    </div>
  );
}

export default App;
