'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Alunos = new Module('alunos');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Alunos.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Alunos.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Alunos.menus.add({
    title: 'Alunos',
    link: 'alunos',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Alunos.aggregateAsset('css', 'alunos.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Alunos.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Alunos.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Alunos.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Alunos;
});
