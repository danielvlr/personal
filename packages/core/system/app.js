



'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module,
    favicon = require('serve-favicon'),
    express = require('express');

var SystemPackage = new Module('system');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
SystemPackage.register(function (app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    SystemPackage.routes(app, auth, database);

    // System Aggrgated Files
    SystemPackage.aggregateAsset('css', 'common.css');

    // Lib Aggrgated Files
    var libDir = '../lib/';
    SystemPackage.aggregateAsset('css', 'http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css');
    SystemPackage.aggregateAsset('css', libDir + 'css/vendor/bootstrap/bootstrap.css');
    SystemPackage.aggregateAsset('css', libDir + 'css/vendor/animate/animate.min.css');
    SystemPackage.aggregateAsset('css', libDir + 'js/vendor/mmenu/css/jquery.mmenu.all.css');
    SystemPackage.aggregateAsset('css', libDir + 'js/vendor/videobackground/css/jquery.videobackground.css');
    SystemPackage.aggregateAsset('css', libDir + 'css/vendor/bootstrap-checkbox.css');
    SystemPackage.aggregateAsset('css', libDir + 'css/vendor/bootstrap/bootstrap-dropdown-multilevel.css');
    SystemPackage.aggregateAsset('css', libDir + 'js/vendor/rickshaw/css/rickshaw.min.css');
    SystemPackage.aggregateAsset('css', libDir + 'js/vendor/morris/css/morris.css');
    SystemPackage.aggregateAsset('css', libDir + 'js/vendor/tabdrop/css/tabdrop.css');
    SystemPackage.aggregateAsset('css', libDir + 'js/vendor/summernote/css/summernote.css');
    SystemPackage.aggregateAsset('css', libDir + 'js/vendor/summernote/css/summernote-bs3.css');
    SystemPackage.aggregateAsset('css', libDir + 'js/vendor/chosen/css/chosen.min.css');
    SystemPackage.aggregateAsset('css', libDir + 'js/vendor/chosen/css/chosen-bootstrap.css');
    SystemPackage.aggregateAsset('css', libDir + 'css/minimal.css');


    SystemPackage.aggregateAsset('js', libDir + 'js/vendor/bootstrap/bootstrap-dropdown-multilevel.js');
    SystemPackage.aggregateAsset('js', libDir + 'js/vendor/mmenu/js/jquery.mmenu.min.js');
    SystemPackage.aggregateAsset('js', libDir + 'js/vendor/sparkline/jquery.sparkline.min.js');
    SystemPackage.aggregateAsset('js', libDir + 'js/vendor/nicescroll/jquery.nicescroll.min.js');
    SystemPackage.aggregateAsset('js', libDir + 'js/vendor/animate-numbers/jquery.animateNumbers.js');
    SystemPackage.aggregateAsset('js', libDir + 'js/vendor/videobackground/jquery.videobackground.js');
    SystemPackage.aggregateAsset('js', libDir + 'js/vendor/blockui/jquery.blockUI.js');
    SystemPackage.aggregateAsset('js', libDir + 'js/vendor/flot/jquery.flot.min.js');
    SystemPackage.aggregateAsset('js', libDir + 'js/vendor/flot/jquery.flot.time.min.js');
    SystemPackage.aggregateAsset('js', libDir + 'js/vendor/flot/jquery.flot.selection.min.js');
    SystemPackage.aggregateAsset('js', libDir + 'js/vendor/flot/jquery.flot.animator.min.js');
    SystemPackage.aggregateAsset('js', libDir + 'js/vendor/flot/jquery.flot.orderBars.js');
    SystemPackage.aggregateAsset('js', libDir + 'js/vendor/easypiechart/jquery.easypiechart.min.js');
    SystemPackage.aggregateAsset('js', libDir + 'js/vendor/rickshaw/raphael-min.js'); 
    SystemPackage.aggregateAsset('js', libDir + 'js/vendor/rickshaw/d3.v2.js');
    SystemPackage.aggregateAsset('js', libDir + 'js/vendor/rickshaw/rickshaw.min.js');
    SystemPackage.aggregateAsset('js', libDir + 'js/vendor/morris/morris.min.js');
    SystemPackage.aggregateAsset('js', libDir + 'js/vendor/tabdrop/bootstrap-tabdrop.min.js');
    SystemPackage.aggregateAsset('js', libDir + 'js/vendor/summernote/summernote.min.js');
    SystemPackage.aggregateAsset('js', libDir + 'js/vendor/chosen/chosen.jquery.min.js');
    SystemPackage.aggregateAsset('js', libDir + 'js/minimal.min.js');

    // Set views path, template engine and default layout
    app.set('views', __dirname + '/server/views');

    // Setting the favicon and static folder
    app.use(favicon(__dirname + '/public/assets/img/favicon.ico'));

    // Adding robots and humans txt
    app.use(express.static(__dirname + '/public/assets/static'));




    return SystemPackage;
});