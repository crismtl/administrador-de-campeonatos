/**
 * Equipo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string'
    },
    imagen: {
      type: 'string'
    },
    anio: {
      type: 'integer'
    },
    presidente: {
      type: 'string'
    },
    entrenador: {
      type: 'string'
    },
    estadio: {
      type: 'string'
    },
    jugadores: {
      collection: 'jugador',
      via:'equipo'
    },
    juegosLocal: {
      collection: 'juego',
      via: 'local'
    },
    juegosVisitante: {
      collection: 'juego',
      via: 'visitante'
    }
  }
};
