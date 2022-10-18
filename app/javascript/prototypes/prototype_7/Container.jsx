import * as Tone from 'tone'
import React, { Component } from 'react'

import SC_Button from './SC_Button'

export default class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      button: 'plast'
    }
  }

  handleClick = () => {
    const { button } = this.state

    this.setState({
      button: 'plast plast_animation'
    })

    const synthSettings = {
      volume: -20,
      detune: 0,
      portamento: 0.1,
      envelope: {
        attack: 0.05,
        attackCurve: 'exponential',
        decay: 0.05,
        decayCurve: 'exponential',
        sustain: 1,
        release: 0.05,
        releaseCurve: 'exponential'
      },
      oscillator: {
        type: 'sine',
        modulationType: 'sine',
        // partialCount: 0,
        // partials: [],
        phase: 0,
        harmonicity: 0.5
      }
    }

    const synth = new Tone.Synth(synthSettings)

    // const distortionSettings = {
    //   wet: 1,
    //   distortion: 1,
    //   oversample: '4x'
    // }

    // const distortion = new Tone.Distortion(distortionSettings).toDestination()

    const chorusSettings = {
      wet: 0.8,
      type: 'sine',
      frequency: 1,
      delayTime: 2,
      depth: 0.7,
      spread: 360
    }

    const chorus = new Tone.Chorus(chorusSettings).start()

    const pingPongDelaySettings = { wet: 0.2, delayTime: 0.25, maxDelayTime: 1 }

    const pingPongDelay = new Tone.PingPongDelay(pingPongDelaySettings)

    const jcReverbSettings = {
      wet: 1,
      roomSize: 0.1
    }

    const jcReverb = new Tone.JCReverb(jcReverbSettings).toDestination()

    // const freeverbSettings = {
    //   wet: 1,
    //   roomSize: 0.5,
    //   dampening: 10
    // }
    //
    // const freeverb = new Tone.Freeverb(freeverbSettings)

    const channelSettings = { volume: 0, pan: 0, mute: false, solo: false }
    const channel = new Tone.Channel(channelSettings).toDestination()

    synth.chain(chorus, pingPongDelay, jcReverb, channel)

    // Тестовая мелодия
    const sequence = [
      {
        time: '0:0:0',
        noteName: 'A#2',
        duration: '1n',
        velocity: 1
      },
      {
        time: '0:0:2',
        noteName: 'G#3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:1:0',
        noteName: 'A#3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:2:0',
        noteName: 'C#3',
        duration: '2n',
        velocity: 1
      },
      {
        time: '0:3:0',
        noteName: 'D#3',
        duration: '2n',
        velocity: 1
      },
      {
        time: '0:3:1',
        noteName: 'A#3',
        duration: '2n',
        velocity: 1
      },
      {
        time: '0:3:2',
        noteName: 'F3',
        duration: '1n',
        velocity: 1
      },
      {
        time: '1:0:0',
        noteName: 'G#3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '1:1:0',
        noteName: 'A#3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '1:1:2',
        noteName: 'C#4',
        duration: '2n',
        velocity: 1
      },
      {
        time: '1:1:3',
        noteName: 'A#3',
        duration: '2n',
        velocity: 1
      },
      {
        time: '1:2:0',
        noteName: 'G#3',
        duration: '2n',
        velocity: 1
      }
    ]

    // Создаём партию, добавляем в неё секвенцию
    // и включаем проигрывание
    const part = new Tone.Part((time, note) => {
      synth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, sequence).start(0)

    // Указываем длительность партии
    part.loopEnd = '2m'

    // Включаем зацикливание
    part.loop = true

    // Включаем звук в браузере
    // sampler.context.resume()

    // Включаем отсчёт времени в Tone.js
    Tone.Transport.start()
  }

  //handleButtonClick = () => {
  //  const { button } = this.state

  //  this.setState({
  //    button: 'Test'
  //  })
  //}

  render() {
    const { button } = this.state

    return (
      <div className="Container">
        <SC_Button text="START" handleClick={this.handleClick} />
        <div className={button}></div>
        <h1 className="header">Sound rec ord 001</h1>
      </div>
    )
  }
}
