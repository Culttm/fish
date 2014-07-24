module.exports.express = {

   customMiddleware: function(app) {
     app.use(function(req, res, next) {
       if (req.host == 'abc.mydomain.com') {
         req.url = '/en' + req.url;
       }
       next();
     });
   }

}