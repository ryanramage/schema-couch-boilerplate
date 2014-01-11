define(['schema-couch-ui', 'text!../settings.json'], function( ui, settings ){

  var $main = document.getElementById('main'),
      settings = JSON.parse(settings),
      api = new ui.controller(settings.couch, 'templates/'),
      router = null

  api.on('init.error', function(err) {  console.log('error!', err)  })
  api.on('init', function(){
    router = new ui.router();
    router.autobind(api, $main);
    router.routes['/'] = welcome;
    router.init('/');
  })

  function welcome() {
    console.log('welcome');
  }
})