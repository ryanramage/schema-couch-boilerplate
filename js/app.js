define(['schema-couch-ui'], function( ui ){

  var $main = document.getElementById('main'),
      api = new ui.controller('http://localhost:5984/db', 'templates/'),
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