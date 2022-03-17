const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
  };


  function update(req, res) {
    // Need to handle the scenario where the checkbox is not checked.
    // checkbox inputs do not send anything in the form at all if they
    // are unchecked, so we need to set req.body.done accordingly.
    req.body.done = req.body.done === 'on';
    // The following will also do the job
    // req.body.done = !!req.body.done;
    Skill.update(req.params.id, req.body);
    res.redirect('/skills');
  }
  
  function edit(req, res) {
    res.render('skills/edit', {
      skill: Skill.getOne(req.params.id)
    });
  }
  
  function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }
  
  function create(req, res) {
    console.log(req.body);
    req.body.done = false;
    Skill.create(req.body);
    res.redirect('/skills');
  }
  
  function newSkill(req, res) {
    res.render('skills/new');
  }
  
  function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      time: req.time
    });
  }

  function show(req, res) {
      res.render('skills/show', {
          skill: Skill.getOne(req.params.id),
          skillNum: Skill.getAll().findIndex(skill => skill.id === parseInt(req.params.id)) + 1

      })
  }
