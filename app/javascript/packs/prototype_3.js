let audioCtx
let oscillator
let a = 0;

const frame = document.createElement('div')
const text = document.createElement('div')
const dogContainer = document.createElement('div')
const mouth1 = document.createElement('div')
const mouth2 = document.createElement('div')
const waterLilyContainer = document.createElement('div')
const waterLily1 = document.createElement('div')
const waterLily2 = document.createElement('div')
const waterLily3 = document.createElement('div')
const waterLily4 = document.createElement('div')
const waterContainer = document.createElement('div')
const waterShadow = document.createElement('div')
const fishKoi1 = document.createElement('div')
const fishKoi2 = document.createElement('div')
const fishKoi3 = document.createElement('div')
const fishKoi4 = document.createElement('div')
const waterLight = document.createElement('div')


frame.classList.add('dog')
text.classList.add('text')
dogContainer.classList.add('dog-container')
mouth1.classList.add('mouth1', 'mouth_opacity')
mouth2.classList.add('mouth2')
waterLilyContainer.classList.add('waterlily_container')
waterLily1.classList.add('waterlily', 'waterlily_first')
waterLily2.classList.add('waterlily', 'waterlily_second')
waterLily3.classList.add('waterlily', 'waterlily_third')
waterLily4.classList.add('waterlily', 'waterlily_fourth')
waterContainer.classList.add('water-container')
waterShadow.classList.add('water-shadow')
waterLight.classList.add('water-light')
//fishKoi1
//fishKoi2
//fishKoi3
//fishKoi4


function createNewOscillator() {
  // create web audio api context
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  // create Oscillator node
  oscillator = audioCtx.createOscillator();

  oscillator.type = 'square';
  oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
  oscillator.connect(audioCtx.destination);
  oscillator.start();
}

function changeOscillatorFrequency() {
  const slider = document.getElementById('slider')
  oscillator.frequency.setValueAtTime(slider.value, audioCtx.currentTime);
}

function createSlider() {
  const container = document.getElementById('prototype_3')
  const slider = document.createElement('input')
  slider.type = 'range'
  slider.min = 0
  slider.max = 1000
  slider.value = 440
  slider.id = 'slider'
  slider.classList.add('slider', 'cursor')
  container.appendChild(slider)

  slider.addEventListener('input', () => {
    changeOscillatorFrequency()
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_3')
  container.appendChild(frame)
  container.appendChild(waterContainer)
  waterContainer.appendChild(waterShadow)
  waterContainer.appendChild(waterLight)
  container.appendChild(text)
  frame.appendChild(mouth1)
  frame.appendChild(mouth2)
  container.appendChild(waterLilyContainer)
  waterLilyContainer.appendChild(waterLily1)
  waterLilyContainer.appendChild(waterLily2)
  waterLilyContainer.appendChild(waterLily3)
  waterLilyContainer.appendChild(waterLily4)
  createSlider()

  frame.addEventListener('click', () => {
    createNewOscillator()
  })
  waterLily1.addEventListener('click', () => {
    if (a == 0){
      waterLily1.classList.add('waterlily_first_click')
      waterContainer.classList.add('water-container_opacity')
      waterShadow.classList.add('water-shadow_opacity')
      waterLight.classList.add('water-light_opacity')
      a = a + 1;
    } else {
      waterLily1.classList.remove('waterlily_first_click')
      waterContainer.classList.remove('water-container_opacity')
      waterShadow.classList.remove('water-shadow_opacity')
      waterLight.classList.remove('water-light_opacity')
      a = 0;
    }
  })

})
