/**
 * AdministradorController
 *
 * @description :: Server-side logic for managing Administradors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  ingreso: function(req, res) {
    var parametros = req.allParams();
    console.log(parametros);
    Administrador.findOne({
      correo: parametros.correo
    }).exec(function(err, admin) {

      if (err) console.log(err);

      if (parametros.contrasenia != admin.contrasenia) {
        return res.badRequest({
          error: 'Contraseña Incorrecto'
        });
      } else {
        delete admin.contrasenia;
        return res.ok(admin);
      }
    });
  }
};
