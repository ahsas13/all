var express = require('express');
var router = express.Router();
var checkAuth = require("./../middleware/checkAuth.js")
//var Hero = require("../models/hero").Hero
var User = require("./../models/User").User

/* GET home page. */
router.get('/', function(req, res, next) {
   //Hero.find({},{_id:0,title:1,nick:1},function(err,menu){
      req.session.greeting = "Hi!!!!"
      res.render('index', {
                            title: 'Express',
                            //menu: menu,
                            counter: req.session.counter
                          });
    })

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход', error: null});
});
router.post('/logreg', function(req, res, next) {
var username = req.body.username
var password = req.body.password
User.findOne({username:username},function(err,user){
      if(err) return next(err)
      if(user){
          if(user.checkPassword(password)){
              req.session.user = user._id
              res.redirect('/')
          } else {
                    res.render('logreg',{title:'Вход', error: 'Пароль не верный'})
          }
     } else {
     var user = new User({username:username,password:password})
          user.save(function(err,user){
              if(err) return next(err)
              req.session.user = user._id
              res.redirect('/')
          })        
    }
  })
});

/* POST logout. */
router.post('/logout', function(req, res, next) {
  req.session.destroy()
  res.locals.user = null;
  res.redirect('/')
});

module.exports = router;


/* Страница Кроша 
router.get('/krosh', function(req, res, next) {
    res.render('hero', {
        title: "Крош",
        picture: "images/krosh.jpg",
        desc: "Крош — весёлый и энергичный кролик мужского пола, живущий в Ромашковой Долине вместе с другими Смешариками."     
      });
});

/* Страница Ежика 
router.get('/ejik', function(req, res, next) {
    res.render('hero', {
        title: "Ежик",
        picture: "images/ejik.jpg",
        desc: "Ёжик — застенчивый ёж мужского пола, живущий в стране смешариков. Любит коллекционировать кактусы и фантики от конфет. Его лучший друг — Крош."     
      });
});

/* Страница Нюши 
router.get('/pig', function(req, res, next) {
    res.render('hero', {
        title: "Нюша",
        picture: "images/pig.jpg",
        desc: "Нюша — свинка-модница, одна из главных героев мультсериала «Смешарики»."     
      });
});

/* Страница Бараша 
router.get('/barash', function(req, res, next) {
    res.render('hero', {
        title: "Бараш",
        picture: "images/barash.jpg",
        desc: "Бараш — сентиментальный меланхоличный баран-романтик, поэт-лирик, он вздыхает и пишет стихи о печали, любви и еде."     
      });
});

/* Страница Совуньи 
router.get('/sova', function(req, res, next) {
    res.render('hero', {
        title: "Совунья",
        picture: "images/sova.jpg",
        desc: "Совунья — старая и мудрая сова, которая одновременно и главная спортсменка, и главный врач страны смешариков."     
      });
});
*/