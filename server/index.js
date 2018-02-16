const path    = require ('path');

const express   = require ('express'),
      helmet    = require ('helmet'),
      session   = require ('express-session'),
      FileStore = require ('session-file-store')(session),
      exphbs    = require ('express-handlebars');

const config  = require (path.join(__dirname, './config'))

const hbs = exphbs.create(config.server.hbs);

const app = express();


/* ### SOME SECURITY THINS ### */
app.use(helmet());

/* ### INIT SESSION WITH SESSION-STORE ### */
config.server.session.store = new FileStore(config.server.session.filestore);
app.use(session(config.server.session));

/* ### CONFIGURE HANDLEBARS ### */
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'webgui', 'views'));

/* ### REGISTER ROUTES ### */
/*app.use('/api', require('./api'));*/
app.use('/',    require('./webgui'));

/* ### START SERVER ### */
app.listen(config.server.port, () => {
  console.log(config.app.name + ' Server listen on port ' + config.server.port);
});
