import React, { useRef, useState, useEffect } from "react";
import p5 from "p5";



import image1 from "../../../assets/images/image1.jpg";
import image2 from "../../../assets/images/image2.jpg";
import image3 from "../../../assets/images/image3.jpg";
const images = [image1, image2, image3];



function Prototype16() {
  const containerRef = useRef();
  const canvasRef = useRef();


  const [showContent, setShowContent] = useState(false);
  const [canvasRunning, setCanvasRunning] = useState(false);

  const [waveAmplitude, setWaveAmplitude] = useState(50);
  const [waveHue, setWaveHue] = useState(50);
  const [waveSaturation, setWaveSaturation] = useState(50);
  const [waveBrightness, setWaveBrightness] = useState(127);
  const [waveColor, setWaveColor] = useState([waveHue, waveSaturation, waveBrightness]);

  const [canvasImage, setCanvasImage] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(`url(${images[0]})`);



  useEffect(() => {
    if (canvasRunning) {
    const sketch = (p) => {
      p.setup = () => {
        canvasRef.current = p.createCanvas(700, 400);
        //canvasRef.current.style("filter", "blur(40px)"); 
        p.colorMode(p.HSB, 100, 100, 100, 255);
        p.frameRate(1);
      };

      p.draw = () => {
        p.clear();
        p.background("rgba(255, 255, 255, 0)");
        const waveCount = 10;
        const waveSpacing = p.width / (waveCount - 1);

        for (let i = 0; i < waveCount; i++) {
          const x = i * waveSpacing;
          const y = p.height / 2 + p.sin(p.frameCount * 0.05 + i * 0.5) * waveAmplitude;
          p.fill(waveHue, waveSaturation, waveBrightness);
          p.noStroke();
          p.ellipse(x, y, p.random(20, 50), p.random(60, 150));
        }
        p.drawingContext.filter = 'blur(40px)';

        
      };
    };

    const p5Instance = new p5(sketch, containerRef.current);


    return () => {
      p5Instance.remove();
    };
}}, [canvasRunning, waveAmplitude, waveHue, waveSaturation, waveBrightness, canvasRef]);


  function getRandomIndex() {
    return Math.floor(Math.random() * images.length);
  }

  

  const handleImageChange = () => {
    const randomIndex = getRandomIndex();
    const randomImage = images[randomIndex];
    const newBackgroundImage = `url(${randomImage})`;
    setBackgroundImage(newBackgroundImage);
  };
  
  function startCanvas() {
    setCanvasRunning(true);
  }
  
  function stopCanvas() {
    if (canvasRunning) {
      p5Instance.remove();
      setCanvasRunning(false);
    }
  }

  const toggleContent = () => {
    if (!showContent) {
      startCanvas();
    } else {
      stopCanvas();
    }
    setShowContent(!showContent);
  };

  // const handleSaveImage = () => {
  //   const backgroundImageElement = document.querySelector(".background");
  //   const canvas = canvasRef.current.canvas;
  //   const tempCanvas = document.createElement("canvas");
  //   const tempContext = tempCanvas.getContext("2d");
  //   const tempImage = new Image();
  
  //   const backgroundImage = new Image();
  //   backgroundImage.src = backgroundImageElement.style.backgroundImage.slice(4, -1).replace(/"/g, "");
  //   backgroundImage.onload = () => {
  //     tempCanvas.width = backgroundImage.width;
  //     tempCanvas.height = backgroundImage.height;
  //     tempContext.drawImage(backgroundImage, 0, 0);
  
  //     tempContext.drawImage(canvas, 0, 0);
  
  //     tempContext.filter = "blur(40px)";
  //     tempContext.drawImage(tempCanvas, 0, 0);

      
  //     const canvasImage = tempCanvas.toDataURL("image/jpg");
  //     setCanvasImage(canvasImage);
  
  //     const downloadLink = document.createElement("a");
  //     downloadLink.download = "canvas.jpg";
  //     downloadLink.href = canvasImage;
  //     downloadLink.click();
  //   };
  
  //   tempImage.src = backgroundImageElement.style.backgroundImage.slice(4, -1).replace(/"/g, "");
  // };
    


  const handleWaveAmplitudeChange = (event) => {
    setWaveAmplitude(event.target.value);
  };

  const handleWaveHueChange = (event) => {
    setWaveHue(event.target.value);
    setWaveColor([event.target.value, waveBrightness, waveBrightness]);
  };

  const handleWaveSaturationChange = (event) => {
    setWaveSaturation(event.target.value);
    setWaveColor([waveHue, event.target.value, waveBrightness]);
  };

  const handleWaveBrightnessChange = (event) => {
    setWaveBrightness(event.target.value);
    setWaveColor([waveHue, waveSaturation, event.target.value]);
  };
  var button = document.getElementById("start");
  console.log(button);
  //button.addEventListener("click", startCanvas);

  return (
    <div>

<button id="start" onClick={() => {
toggleContent();
if (!canvasRunning) startCanvas();
}}>{showContent ? "Hide" : "Show"}</button>
      {showContent && (
        <div>
          <div className="background" style={{ backgroundImage }}>
        <div ref={containerRef}></div>
      </div>
      <div className="input_container">
      <div>
        <label htmlFor="waveAmplitudeSlider">Wave Amplitude:</label>
        <input
          className="input"
          type="range"
          min="0"
          max="100"
          value={waveAmplitude}
          onChange={handleWaveAmplitudeChange}
          id="waveAmplitudeSlider"
        />
      </div>
      <div>
        <label htmlFor="waveHueSlider">Wave Hue:</label>
        <input
          className="input"
          type="range"
          min="0"
          max="100"
          value={waveHue}
          onChange={handleWaveHueChange}
          id="waveHueSlider"
        />
      </div>
      <div>
        <label htmlFor="waveSaturationSlider">Wave Saturation:</label>
        <input
          className="input"
          type="range"
          min="0"
          max="100"
          value={waveSaturation}
          onChange={handleWaveSaturationChange}
          id="waveSaturationSlider"
        />
      </div>
      <div>
        <label htmlFor="waveBrightnessSlider">Wave Brightness:</label>
        <input
          className="input"
          type="range"
          min="0"
          max="100"
          value={waveBrightness}
          onChange={handleWaveBrightnessChange}
          id="waveBrightnessSlider"
        />
      </div>
      </div>
      <div className="button_container">
         {/* <button onClick={handleSaveImage}>Save Image</button> */}
         <button onClick={() => handleImageChange()}>Change Background</button>
      </div>
        </div>
      )}

      
      </div>
  );
 }
 export default Prototype16;