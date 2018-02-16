var middleware = (redirectPath) => {
  return (req, res, next) => {
    var wantedPath = req.originalPath;
    
    if(req.session.access) {
      if (req.session.access.indexOf(wantedPath) > -1) {
        console.log('Access granted to ' + wantedPath);
        next();
      } else {
        console.log('Access denied to ' + wantedPath);
        res.redirect(redirectPath);
      }
    } else {
      console.log('Access denied to ' + wantedPath);
      res.redirect(redirectPath);
    }
  }
}

module.exports = middleware;
