var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница Кроша */
router.get('/krosh', function(req, res, next) {
    res.render('hero', {
        title: "Крош",
        picture: "images/2875.webp",
        desc: "Крош — весёлый и энергичный кролик мужского пола, живущий в Ромашковой Долине вместе с другими Смешариками."     
      });
});

/* Страница Ежика */
router.get('/ejik', function(req, res, next) {
    res.render('hero', {
        title: "Ежик",
        picture: "images/ejik.jpg",
        desc: "Ёжик — застенчивый ёж мужского пола, живущий в стране смешариков. Любит коллекционировать кактусы и фантики от конфет. Его лучший друг — Крош."     
      });
});

/* Страница Нюши */
router.get('/pig', function(req, res, next) {
    res.render('hero', {
        title: "Нюша",
        picture: "images/pig.jpg",
        desc: "Нюша — свинка-модница, одна из главных героев мультсериала «Смешарики»."     
      });
});

/* Страница Бараша */
router.get('/barash', function(req, res, next) {
    res.render('hero', {
        title: "Бараш",
        picture: "images/barash.jpg",
        desc: "Бараш — сентиментальный меланхоличный баран-романтик, поэт-лирик, он вздыхает и пишет стихи о печали, любви и еде."     
      });
});

/* Страница Совуньи */
router.get('/sova', function(req, res, next) {
    res.render('hero', {
        title: "Совунья",
        picture: "images/sova.jpg",
        desc: "Совунья — старая и мудрая сова, которая одновременно и главная спортсменка, и главный врач страны смешариков."     
      });
});


module.exports = router;