const channel = {
  volume: 0,
  mute: false
}

const sequence = {
  steps: [
    {
      time: '0:0:0',
      noteName: 'A1',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:1:0',
      noteName: 'A2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:2:0',
      noteName: 'A2',
      duration: '1n',
      velocity: 1
    },
    {
      time: '0:3:0',
      noteName: 'A1',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:0:1',
      noteName: 'B1',
      duration: '1n',
      velocity: 1
    },
    {
      time: '1:1:0',
      noteName: 'A1',
      duration: '2n',
      velocity: 1
    },
    {
      time: '1:1:2',
      noteName: 'A3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:2:3',
      noteName: 'B1',
      duration: '1n',
      velocity: 1
    },
    {
      time: '1:3:1',
      noteName: 'B1',
      duration: '1n',
      velocity: 1
    }
  ],
  duration: '1m'
}

export { channel, sequence }
