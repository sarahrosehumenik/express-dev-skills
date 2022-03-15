module.exports = {
    index,
    show
  };
  
  function index(req, res) {
    res.render('skills/index', {
      skills: skill.getAll()
    });
  }

  function show(req, res) {
      res.render('skills/show', {
          skill: Skill.getOne(req.params.id)

      })
  }
