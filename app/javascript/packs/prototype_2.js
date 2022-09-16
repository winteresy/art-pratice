let container
let audioCtx
let oscillator

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

function changeOscillatorType(type) {
  oscillator.type = type

}

function createSlider() {
  const slider = document.createElement('input')
  slider.type = 'range'
  slider.min = 0
  slider.max = 1000
  slider.value = 440
  slider.id = 'slider'
  container.appendChild(slider)

  slider.addEventListener('input', () => {
    changeOscillatorFrequency()
  })
}

function createButtom(text, callback, parameter) {
  const button = document.createElement('div')
  button.innerText = text
  button.classList.add('button')
  container.appendChild(button)

  button.addEventListener('click', () => {
    callback(parameter)
  })
}

function createOscillatorTypeButtons() {
  const types = ['sine', 'square', 'sawtooth', 'triangle']

  types.forEach((type, i) => {
    createButtom(type, changeOscillatorType, type)
  });

}

document.addEventListener('DOMContentLoaded', () => {

  const frame = document.createElement('div')
  frame.innerText = 'Peace'
  frame.classList.add('frame')


  container = document.getElementById('prototype_2')
  container.appendChild(frame)

  frame.addEventListener('click', () => {
    createNewOscillator()
    createSlider()
    createOscillatorTypeButtons()
  })


})
