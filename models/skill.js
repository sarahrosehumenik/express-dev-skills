const skills = [
    {id: 125223, skill: 'Simping', done: true},
    {id: 127904, skill: 'Building in Fortnite', done: false},
    {id: 139608, skill: 'Twerking', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  


  function update(id, skill) {
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    // Ensure the id is copied over
    skill.id = parseInt(id);
    skills.splice(idx, 1, skill);
  }
  
  function deleteOne(id) {
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }
  
  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.done = false;
    skills.push(skill);

  }
  function getOne(id) {
    // URL params are strings - convert to a number
 
    return skills.find(skill => skill.id === parseInt(id));
  }


  function getAll() {
    return skills;
  }


