var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

var HOMEPAGE_FILE = path.join(__dirname, 'homepage.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req,res,next){
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get('/api/homepage', function(req,res){
  fs.readFile(HOMEPAGE_FILE, function(err, data){
    if(err){
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.post('/api/homepage', function(req, res){
  fs.readFile(HOMEPAGE_FILE, function(err, data){
    if(err){
      console.error(err);
      process.exit(1);
    }
    var homepage = JSON.parse(data);
    var newHomepage = [{
      id: Date.now(),
      title: req.body.title,
      subtitle: req.body.subtitle,
      body: req.body.body,
      headerImage: req.body.headerImage,
      contactInfo: req.body.contactInfo,
      facebookURL: req.body.facebookURL,
      twitterURL: req.body.twitterURL,
      githubURL: req.body.githubURL,
      email: req.body.email,
      projects: [{"image": req.body.projectImageOne, "info": req.body.projectInfoOne}, {"image": req.body.projectImageTwo, "info": req.body.projectInfoTwo}, {"image": req.body.projectImageThree, "info": req.body.projectInfoThree}]
    }
    ];
    homepage = newHomepage;
    fs.writeFile(HOMEPAGE_FILE, JSON.stringify(homepage), function(err){
      if(err){
        console.error(err);
        process.exit(1);
      }
      res.json(homepage);
    });
  });
});

var server = app.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
