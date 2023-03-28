import React, { useRef, useState, useEffect } from "react";
import p5 from "p5";



import image1 from "../../../assets/images/image1.jpg";
import image2 from "../../../assets/images/image2.jpg";
import image3 from "../../../assets/images/image3.jpg";
import image4 from "../../../assets/images/image4.jpg";
import image5 from "../../../assets/images/image5.jpg";
import image6 from "../../../assets/images/image6.jpg";
import image7 from "../../../assets/images/image7.jpg";
import image8 from "../../../assets/images/image8.jpg";
import image9 from "../../../assets/images/image9.jpg";
import image10 from "../../../assets/images/image10.jpg";
import image11 from "../../../assets/images/image11.jpg";
const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11];



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
        canvasRef.current.style("filter", "blur(40px)"); 
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
        //p.drawingContext.filter = 'blur(40px)';

        
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

  const start = document.querySelector('#start');
  const toggleContent = () => {
    if (!showContent) {
      startCanvas();
      start.classList.add('hidden');
    } else {
      stopCanvas();
    }
    setShowContent(!showContent);
  };

  

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

  return (
    <div>
      <div id="start" className="start" onClick={() => {
        toggleContent();
        if (!canvasRunning) startCanvas();
        }}>
        <div className="light_vector"></div>
          <div className="light_start">
          <div className="round_2"></div>
          <div className="round_3"></div>
          <button className="button_start" >{showContent ? "Hide" : "aurora"}</button>   
        </div>
        <p className="text_start">
            the very first time i looked up to the sky,<br />
            it was dark, and it was scary— still, <br />
            i tried.the world was so cruel, <br />
            and my mind was in chaos but someone told me, <br />
            “it’ll be the most brilliant darkness in our eyes”
        </p>
        <div className="round_1"></div>
        <div className="round_4"></div>
    </div>
          {showContent && (
            <div>
              <div className="background" style={{ backgroundImage }}>
            <div ref={containerRef}></div>
          </div>
          <div className="input_container">
          <div className="input_text_with_slider">
            <label htmlFor="waveAmplitudeSlider">Wave Amplitude:</label>
            <input
              className="slider"
              type="range"
              min="0"
              max="100"
              value={waveAmplitude}
              onChange={handleWaveAmplitudeChange}
              id="waveAmplitudeSlider"
            />
          </div>
          <div className="input_text_with_slider">
            <label htmlFor="waveHueSlider">Wave Hue:</label>
            <input
              className="slider"
              type="range"
              min="0"
              max="100"
              value={waveHue}
              onChange={handleWaveHueChange}
              id="waveHueSlider"
            />
          </div>
          <div className="input_text_with_slider">
            <label htmlFor="waveSaturationSlider">Wave Saturation:</label>
            <input
              className="slider"
              type="range"
              min="0"
              max="100"
              value={waveSaturation}
              onChange={handleWaveSaturationChange}
              id="waveSaturationSlider"
            />
          </div>
          <div className="input_text_with_slider">
            <label htmlFor="waveBrightnessSlider">Wave Brightness:</label>
            <input
              className="slider"
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
            <button className="button_change" onClick={() => handleImageChange()}>Change Background</button>
          </div>
            </div>
          )}

          
          </div>
      );
    }
 export default Prototype16;




 