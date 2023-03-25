
import p5 from "p5";

document.addEventListener('DOMContentLoaded', () => {
  let waveAmplitudeSlider, waveSaturationSlider, waveColorSlider, waveOpacitySlider;

    const sketch = (p) => {
      p.setup = () => {
        const canvas = p.createCanvas(700, 410)
        canvas.parent('prototype_15')
        p.frameRate(1);
        waveAmplitudeSlider = p.createSlider(0, 100, 50);
        waveAmplitudeSlider.position(20, 420);
        waveSaturationSlider = p.createSlider(0, 100, 50);
        waveSaturationSlider.position(20, 450);
        waveColorSlider = p.createSlider(0, 255, 127);
        waveColorSlider.position(20, 480);
        waveOpacitySlider = p.createSlider(0, 255, 127);
        waveOpacitySlider.position(20, 510);
      };

      p.draw = () => {
        p.background(0);
        let waveAmplitude = waveAmplitudeSlider.value();
        let waveSaturation = waveSaturationSlider.value();
        let waveOpacity = waveOpacitySlider.value();
        let waveColor = p.color(waveSaturation, waveColorSlider.value(), 0, waveOpacity);
        let waveCount = 10;
        let waveSpacing = p.width / (waveCount - 1);

        for (let i = 0; i < waveCount; i++) {
          let x = i * waveSpacing;
          let y = p.height / 2 + p.sin(p.frameCount * 0.05 + i * 0.5) * waveAmplitude;
          p.fill(waveColor);
          p.noStroke();
          p.ellipse(x, y, p.random(20, 50), p.random(60, 150));
        }
        p.filter(p.BLUR, p.random(40, 80));
      };
    };

    new p5(sketch);

})