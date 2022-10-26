import React, { Component } from 'react'
import SC_ToggleButtonSet from '../components/SC_ToggleButtonSet.jsx'
import SC_Slider from '../components/SC_Slider.jsx'

export default class ToneSynth extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { settings, handleValueChange } = this.props
    const options = ['sine', 'square', 'sawtooth', 'triangle']

    return (
      <div className="ToneSynth">
        <SC_ToggleButtonSet
          name="Synth Type"
          options={options}
          value={settings.synth.oscillator.type}
          property="synthType"
          handleChange={handleValueChange}
        />
        <div className="SynthSliderContainer">
          <h2 className="SliderContainerName">Synth</h2>
          <div className="SliderContainer">
            <SC_Slider
              name="Attack"
              min={0}
              max={10}
              step={0.01}
              value={settings.synth.envelope.attack}
              property="synthEnvelopeAttack"
              handleChange={handleValueChange}
            />

            <SC_Slider
              name="Decay"
              min={0}
              max={10}
              step={0.01}
              value={settings.synth.envelope.decay}
              property="synthEnvelopeDecay"
              handleChange={handleValueChange}
            />

            <SC_Slider
              name="Sustain"
              min={0}
              max={1}
              step={0.01}
              value={settings.synth.envelope.sustain}
              property="synthEnvelopeSustain"
              handleChange={handleValueChange}
            />

            <SC_Slider
              name="Release"
              min={0}
              max={10}
              step={0.01}
              value={settings.synth.envelope.release}
              property="synthEnvelopeRelease"
              handleChange={handleValueChange}
            />
          </div>
        </div>
      </div>
    )
  }
}
