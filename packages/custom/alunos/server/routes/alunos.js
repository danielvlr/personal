'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
var hasAuthorization = function(req, res, next) {
  next();
};

var hasPermissions = function(req, res, next) {

    req.body.permissions = req.body.permissions || ['authenticated'];

    for (var i = 0; i < req.body.permissions.length; i++) {
      var permission = req.body.permissions[i];
      if (req.acl.user.allowed.indexOf(permission) === -1) {
            return res.status(401).send('User not allowed to assign ' + permission + ' permission.');
        };
    };

    next();
};

module.exports = function(Alunos, app, auth) {
  
  var alunos = require('../controllers/alunos')(Alunos);

  app.route('/api/alunos')
    .get(alunos.all)
    .post(auth.requiresLogin, hasPermissions, alunos.create);
  app.route('/api/alunos/:alunoId')
    .get(auth.isMongoId, alunos.show)
    .put(auth.isMongoId, auth.requiresLogin, hasAuthorization, hasPermissions, alunos.update)
    .delete(auth.isMongoId, auth.requiresLogin, hasAuthorization, alunos.destroy);

  // Finish with setting up the articleId param
  app.param('alunoId', alunos.aluno);
};
