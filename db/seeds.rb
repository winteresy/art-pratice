@prototypes_data = [
  {
    name: 'First module / First prototype'
  },
  {
    name: 'First oscillator'
    #ruby hash, тип данных ключ и значение
  },
  {
    name: 'Song of the dog in the pond'
  },
  {
    name: 'Second oscillator with React components'
    #ruby hash, тип данных ключ и значение
  },
  {
    name: '30 september lesson'
  },
  {
    name: '7 october lesson'
  },
  {
    name: 'plast 1'
  },
  {
    name: 'better change function'
  },
  {
    name: 'Composition'
  },
  {
    name: 'Japan Synth'
  },
  {
    name: 'JS Events And Surface UI Element'
  },
  {
    name: 'Effects UI as components'
  },
  {
    name: 'Last project from december lesson'
  },
  {
    name: '2 module Japan Synth'
  },
  {
    name: 'Aurora test'
  },
  {
    name: 'Aurora'
  }
]

def seed
  reset_db
  create_prototypes
end

def reset_db
  Rake::Task['db:drop'].invoke
  Rake::Task['db:create'].invoke
  Rake::Task['db:migrate'].invoke
end

def create_prototypes
  @prototypes_data.each do |prototype_data|
    prototype = Prototype.create!(prototype_data)
    puts "#{prototype.name} prototype just created"
  end
end

seed
