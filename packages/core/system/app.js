'use strict';

/*
 * Defining the Package
 */
var meanio = require('meanio');
var Module = meanio.Module,
  config = meanio.loadConfig(),
  favicon = require('serve-favicon');

var SystemPackage = new Module('system');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
SystemPackage.register(function(app, auth, database, circles) {

  //We enable routing. By default the Package Object is passed to the routes
  SystemPackage.routes(app, auth, database);

  // Lib Aggrgated
  SystemPackage.aggregateAsset('css', 'common.css');

  // Lib Aggrgated Files
  var libDir = '../lib/';
  // SystemPackage.aggregateAsset('css', libDir + 'css/vendor/bootstrap/bootstrap.min.css');
  // SystemPackage.aggregateAsset('css', libDir + 'css/vendor/animate/animate.min.css');
  // SystemPackage.aggregateAsset('css', libDir + 'js/vendor/mmenu/css/jquery.mmenu.all.css');
  // SystemPackage.aggregateAsset('css', libDir + 'js/vendor/videobackground/css/jquery.videobackground.css');
  // SystemPackage.aggregateAsset('css', libDir + 'css/vendor/bootstrap-checkbox.css');
  // SystemPackage.aggregateAsset('css', libDir + 'css/vendor/bootstrap/bootstrap-dropdown-multilevel.css');
  // SystemPackage.aggregateAsset('css', libDir + 'js/vendor/rickshaw/css/rickshaw.min.css');
  // SystemPackage.aggregateAsset('css', libDir + 'js/vendor/morris/css/morris.css');
  // SystemPackage.aggregateAsset('css', libDir + 'js/vendor/tabdrop/css/tabdrop.css');
  // SystemPackage.aggregateAsset('css', libDir + 'js/vendor/summernote/css/summernote.css');
  // SystemPackage.aggregateAsset('css', libDir + 'js/vendor/summernote/css/summernote-bs3.css');
  // SystemPackage.aggregateAsset('css', libDir + 'js/vendor/chosen/css/chosen.min.css');
  // SystemPackage.aggregateAsset('css', libDir + 'js/vendor/chosen/css/chosen-bootstrap.css');
  // SystemPackage.aggregateAsset('css', libDir + 'css/minimal.css');

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




  // Javascript
  // SystemPackage.aggregateAsset('js', libDir + 'js/vendor/mmenu/js/jquery.mmenu.min.js');
  // SystemPackage.aggregateAsset('js', libDir + 'js/vendor/sparkline/jquery.sparkline.min.js');
  // SystemPackage.aggregateAsset('js', libDir + 'js/vendor/nicescroll/jquery.nicescroll.min.js');
  // SystemPackage.aggregateAsset('js', libDir + 'js/vendor/animate-numbers/jquery.animateNumbers.js');
  // SystemPackage.aggregateAsset('js', libDir + 'js/vendor/videobackground/jquery.videobackground.js');
  // SystemPackage.aggregateAsset('js', libDir + 'js/vendor/blockui/jquery.blockUI.js');
  // SystemPackage.aggregateAsset('js', libDir + 'js/vendor/flot/jquery.flot.min.js');
  // SystemPackage.aggregateAsset('js', libDir + 'js/vendor/flot/jquery.flot.time.min.js');
  // SystemPackage.aggregateAsset('js', libDir + 'js/vendor/flot/jquery.flot.selection.min.js');
  // SystemPackage.aggregateAsset('js', libDir + 'js/vendor/flot/jquery.flot.animator.min.js');
  // SystemPackage.aggregateAsset('js', libDir + 'js/vendor/flot/jquery.flot.orderBars.js');
  // SystemPackage.aggregateAsset('js', libDir + 'js/vendor/easypiechart/jquery.easypiechart.min.js');
  // SystemPackage.aggregateAsset('js', libDir + 'js/vendor/rickshaw/raphael-min.js'); 
  // SystemPackage.aggregateAsset('js', libDir + 'js/vendor/rickshaw/d3.v2.js');
  // SystemPackage.aggregateAsset('js', libDir + 'js/vendor/rickshaw/rickshaw.min.js');
  // SystemPackage.aggregateAsset('js', libDir + 'js/vendor/morris/morris.min.js');
  // SystemPackage.aggregateAsset('js', libDir + 'js/vendor/tabdrop/bootstrap-tabdrop.min.js');
  // SystemPackage.aggregateAsset('js', libDir + 'js/vendor/summernote/summernote.min.js');
  // SystemPackage.aggregateAsset('js', libDir + 'js/vendor/chosen/chosen.jquery.min.js');
  // SystemPackage.aggregateAsset('js', libDir + 'js/minimal.min.js');

    // <script src="assets/js/vendor/bootstrap/bootstrap.min.js"></script>
    // <script src="assets/js/vendor/bootstrap/bootstrap-dropdown-multilevel.js"></script>
    // <script type="text/javascript" src="assets/js/vendor/mmenu/js/jquery.mmenu.min.js"></script>
    // <script type="text/javascript" src="assets/js/vendor/sparkline/jquery.sparkline.min.js"></script>
    // <script type="text/javascript" src="assets/js/vendor/nicescroll/jquery.nicescroll.min.js"></script>
    // <script type="text/javascript" src="assets/js/vendor/animate-numbers/jquery.animateNumbers.js"></script>
    // <script type="text/javascript" src="assets/js/vendor/videobackground/jquery.videobackground.js"></script>
    // <script type="text/javascript" src="assets/js/vendor/blockui/jquery.blockUI.js"></script>
    // <script src="assets/js/vendor/flot/jquery.flot.min.js"></script>
    // <script src="assets/js/vendor/flot/jquery.flot.time.min.js"></script>
    // <script src="assets/js/vendor/flot/jquery.flot.selection.min.js"></script>
    // <script src="assets/js/vendor/flot/jquery.flot.animator.min.js"></script>
    // <script src="assets/js/vendor/flot/jquery.flot.orderBars.js"></script>
    // <script src="assets/js/vendor/easypiechart/jquery.easypiechart.min.js"></script>
    // <script src="assets/js/vendor/rickshaw/raphael-min.js"></script> 
    // <script src="assets/js/vendor/rickshaw/d3.v2.js"></script>
    // <script src="assets/js/vendor/rickshaw/rickshaw.min.js"></script>
    // <script src="assets/js/vendor/morris/morris.min.js"></script>
    // <script src="assets/js/vendor/tabdrop/bootstrap-tabdrop.min.js"></script>
    // <script src="assets/js/vendor/summernote/summernote.min.js"></script>
    // <script src="assets/js/vendor/chosen/chosen.jquery.min.js"></script>
    // <script src="assets/js/minimal.min.js"></script>




  SystemPackage.angularDependencies(['mean-factory-interceptor']);
  

  // The middleware in config/express will run before this code

  // Set views path, template engine and default layout
  app.set('views', __dirname + '/server/views');

  // Setting the favicon and static folder
  if(config.favicon) {
    app.use(favicon(config.favicon));
  } else {
    app.use(favicon(__dirname + '/public/assets/img/favicon.ico'));
  }

  // Adding robots and humans txt
  app.useStatic(__dirname + '/public/assets/static');

  SystemPackage.menus.add({
    title: 'Log Out',
    link: 'Log Out',
    roles: ['authenticated'],
    menu: 'account'
  });
  

  return SystemPackage;

});
