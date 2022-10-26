import * as Tone from 'tone'
import React, { Component } from 'react'

import * as kotoSettings from './tunes/koto.js'
import * as melodySettings from './tunes/melody.js'

import Channel from './modules/Channel.jsx'
import ToneSynth from './modules/ToneSynth.jsx'
import SC_Button from './components/SC_Button'
import SC_ToggleButton from './components/SC_ToggleButton'
import SC_ToggleButtonSet from './components/SC_ToggleButtonSet'

import SC_Slider from './components/SC_Slider'

let kotoChannel

let melodySynth
let melodyChorus
let melodyAutoFilter
let melodyChannel

export default class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      kotoSettings,
      melodySettings,
      fishOpacityFirst: 'fishkoi fishkoi_first',
      fishOpacitySecond: 'fishkoi fishkoi_second',
      fishOpacityThird: 'fishkoi fishkoi_third',
      fishOpacityFourth: 'fishkoi fishkoi_fourth',
      fishOpacityFifth: 'fishkoi fishkoi_fifth',
      fishOpacitySixth: 'fishkoi fishkoi_sixth'
    }
  }

  handleStart = () => {
    const {
      kotoSettings,
      melodySettings,
      fishOpacityFirst,
      fishOpacitySecond,
      fishOpacityThird,
      fishOpacityFourth,
      fishOpacityFifth,
      fishOpacitySixth
    } = this.state

    this.setState({
      fishOpacityFirst: 'fishkoi fishkoi_first fishkoi_opacity',
      fishOpacitySecond: 'fishkoi fishkoi_second fishkoi_opacity',
      fishOpacityThird: 'fishkoi fishkoi_third fishkoi_opacity',
      fishOpacityFourth: 'fishkoi fishkoi_fourth fishkoi_opacity',
      fishOpacityFifth: 'fishkoi fishkoi_fifth fishkoi_opacity',
      fishOpacitySixth: 'fishkoi fishkoi_sixth fishkoi_opacity'
    })

    melodySynth = new Tone.Synth(melodySettings.synth)
    melodyChorus = new Tone.Chorus(melodySettings.chorus).start()
    melodyAutoFilter = new Tone.AutoFilter(melodySettings.autoFilter).start()
    melodyChannel = new Tone.Channel(melodySettings.channel).toDestination()

    melodySynth.chain(melodyChorus, melodyAutoFilter, melodyChannel)

    const melodyPart = new Tone.Part((time, note) => {
      melodySynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, melodySettings.sequence.steps).start(0)

    melodyPart.loopEnd = melodySettings.sequence.duration
    melodyPart.loop = true

    const sampler = new Tone.Sampler({
      urls: {
        A1: 'koto-japanese-melody-strings-loop_123bpm_D_minor.wav',
        A2: 'spanish-guitar-koto-arp-loop_234bpm_F_minor.wav',
        A3: 'sharingan-koto-melody_130bpm_A_minor.wav',
        B1: 'spanish-guitar-koto-arp-loop_234bpm_F_minor.wav'
      },
      baseUrl: 'http://localhost:3000/samples/'
    }).toDestination()

    kotoChannel = new Tone.Channel(kotoSettings.channel).toDestination()
    sampler.chain(kotoChannel)

    const kotoPart = new Tone.Part((time, note) => {
      sampler.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, kotoSettings.sequence.steps).start(0)

    kotoPart.loopEnd = kotoSettings.sequence.duration
    kotoPart.loop = true

    Tone.Transport.start()
  }
  handleMelodyValueChange = (property, value) => {
    const { melodySettings } = this.state

    if (property === 'synthType') {
      melodySynth.oscillator.type = value
      melodySettings.synth.oscillator.type = value
    } else if (property === 'synthEnvelopeAttack') {
      melodySynth.envelope.attack = value
      melodySettings.synth.envelope.attack = value
    } else if (property === 'synthEnvelopeDecay') {
      melodySynth.envelope.decay = value
      melodySettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeSustain') {
      melodySynth.envelope.sustain = value
      melodySettings.synth.envelope.sustain = value
    } else if (property === 'synthEnvelopeRelease') {
      melodySynth.envelope.release = value
      melodySettings.synth.envelope.release = value
    } else if (property === 'chorusWet') {
      melodyChorus.wet.value = value
      melodySettings.chorus.wet = value
    } else if (property === 'chorusFrequency') {
      melodyChorus.frequency.value = value
      melodySettings.chorus.frequency = value
    } else if (property === 'chorusDepth') {
      melodyChorus.depth = value
      melodySettings.chorus.depth = value
    } else if (property === 'autoFilterType') {
      melodyAutoFilter.type = value
      melodySettings.autoFilter.type = value
    } else if (property === 'autoFilterFrequency') {
      melodyAutoFilter.frequency.value = value
      melodySettings.autoFilter.frequency = value
    } else if (property === 'autoFilterDepth') {
      melodyAutoFilter.depth.value = value
      melodySettings.autoFilter.depth = value
    } else if (property === 'autoFilterOctaves') {
      melodyAutoFilter.octaves = value
      melodySettings.autoFilter.octaves = value
    }
    if (property === 'channelVolume') {
      melodyChannel.volume.value = value
      melodySettings.channel.volume = value
    } else if (property === 'channelMute') {
      melodyChannel.mute = value
      melodySettings.channel.mute = value
    }

    this.setState({
      melodySettings
    })
  }

  handleKotoValueChange = (property, value) => {
    const { kotoSettings } = this.state

    if (property === 'channelVolume') {
      kotoChannel.volume.value = value
      kotoSettings.channel.volume = value
    } else if (property === 'channelMute') {
      const mute = !kotoSettings.channel.mute
      kotoChannel.mute = mute
      kotoSettings.channel.mute = mute
    }

    this.setState({
      kotoSettings
    })
  }

  render() {
    const {
      kotoSettings,
      melodySettings,
      fishOpacityFirst,
      fishOpacitySecond,
      fishOpacityThird,
      fishOpacityFourth,
      fishOpacityFifth,
      fishOpacitySixth
    } = this.state
    const melodyOscillatorTypes = ['sine', 'square', 'triangle', 'sawtooth']

    return (
      <div className="Container">
        <div className="FishContainer">
          <div className={fishOpacityFirst}></div>
          <div className={fishOpacitySecond}></div>
          <div className={fishOpacityThird}></div>
          <div className={fishOpacityFourth}></div>
          <div className={fishOpacityFifth}></div>
          <div className={fishOpacitySixth}></div>
          <div className="waterLily waterLilyFirst"></div>
          <div className="waterLily waterLilySecond"></div>
        </div>
        <div className="SynthContainer">
          <div className="SynthContainerFlex">
            <div className="SynthContainerHeader">
              <SC_Button text="Start" handleClick={this.handleStart} />
              <div className="JapanHeader"></div>
            </div>
            <div className="ChannelContainer">
              <div className="ChannelNameContainer">
                <h2 className="ChannelName">Japan melody</h2>
                <Channel
                  settings={kotoSettings}
                  handleValueChange={this.handleKotoValueChange}
                />
              </div>
              <div className="ChannelNameContainer">
                <h2 className="ChannelName">Back melody</h2>
                <Channel
                  settings={melodySettings}
                  handleValueChange={this.handleMelodyValueChange}
                />
              </div>
            </div>
            <div className="ToneSynthContainer">
              <ToneSynth
                settings={melodySettings}
                handleValueChange={this.handleMelodyValueChange}
              />
            </div>
            <div className="ChorusEffectContainer">
              <h2 className="ChorusEffectName">Chorus</h2>
              <div className="SliderContainer">
                <SC_Slider
                  name="Wet"
                  min={0}
                  max={1}
                  step={0.01}
                  value={melodySettings.chorus.wet}
                  property="chorusWet"
                  handleChange={this.handleMelodyValueChange}
                />
                <SC_Slider
                  name="Frequency"
                  min={0}
                  max={100}
                  step={0.01}
                  value={melodySettings.chorus.frequency}
                  property="chorusFrequency"
                  handleChange={this.handleMelodyValueChange}
                />
                <SC_Slider
                  name="Depth"
                  min={0}
                  max={1}
                  step={0.01}
                  value={melodySettings.chorus.depth}
                  property="chorusDepth"
                  handleChange={this.handleMelodyValueChange}
                />
              </div>
            </div>
            <div className="AutofilterContainer">
              <h2 className="AutofilterName">Autofilter</h2>
              <div className="SliderContainer">
                <SC_ToggleButtonSet
                  name="Type"
                  property="autoFilterType"
                  value={melodySettings.autoFilter.type}
                  options={melodyOscillatorTypes}
                  handleChange={this.handleMelodyValueChange}
                />
                <SC_Slider
                  name="Frequency"
                  min={0}
                  max={100}
                  step={0.01}
                  value={melodySettings.autoFilter.frequency}
                  property="autoFilterFrequency"
                  handleChange={this.handleMelodyValueChange}
                />
                <SC_Slider
                  name="Depth"
                  min={0}
                  max={1}
                  step={0.01}
                  value={melodySettings.autoFilter.depth}
                  property="autoFilterDepth"
                  handleChange={this.handleMelodyValueChange}
                />
                <SC_Slider
                  name="Octaves"
                  min={0}
                  max={6}
                  step={0.1}
                  value={melodySettings.autoFilter.octaves}
                  property="autoFilterOctaves"
                  handleChange={this.handleMelodyValueChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
