var express = require('express');   //server web
var path = require('path');         //pour jouer avec les path des différents fichiers
const mongoose = require('mongoose');           //outil pour gérer les requetes avec le server

mongoose.connect('mongodb+srv://Arnaud:Bulot37540!@cluster0.u8vbi.mongodb.net/AppleShopProducts?retryWrites=true&w=majority',
  {
    useNewUrlParser: true
  }, 
  (err) => {
    if (err) {
      console.log("ERROR DB")
    } else {
      console.log("CONNEXION DB OK");
    }
  }
);

var app = express();                //création de l'application express

//action avant de traiter la requête (middleware)
app.use(express.json());          //récupérer la donnée via requete POST
app.use(express.urlencoded({ extended: false }));     //façon dont la donnée est envoyée depuis POST (via URL)
app.use(express.static(path.join(__dirname, '../client-build')));    //dit à express où sont situés les fichiers

app.get('*', (req, res) => {      //intercepter toutes les requ^tes entrantes sur notre server pour retourner notre app Vue
  res.sendFile(path.join(__dirname, '../client-build/index.html'));
});


// error handler //gestion d'erreur
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error');
});

module.exports = app;