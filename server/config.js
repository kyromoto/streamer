var path = require('path');

var config = {
  app : {
    name : 'Streamer'
  },
  server : {
    port : 8080,
    session : {
      secret : 'verysecret',
      name : 'login.sid',
      resave : false,
      rolling : true,
      saveUninitialized : false,
      cookie : {
        secure : false, /* true for https only */
        domain : 'localhost',
        maxAge : 6000
      },
      filestore : {
        ttl : 3600
      }
    },
    hbs : {
      defaultLayout : 'main',
      extname       : '.hbs',
      layoutsDir    : path.join(__dirname, 'webgui', 'views', 'layouts'),
      partialsDir   : path.join(__dirname, 'webgui', 'views', 'partials'),
      helpers : {}
    }
  }
};

module.exports = config;
