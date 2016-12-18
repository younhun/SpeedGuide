var express = require('express');
var router = express.Router();

//메인으로 가는 버튼
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/chat', function(req, res, next){
    res.render('chat');
});

//엑티비티 여행 클릭시
router.get('/activity', function(req, res, next) {
  res.render('activity/activity');
});

//bike
router.get('/activity/bike', function(req, res, next) {
  res.render('activity/bike');
});

//camp
router.get('/activity/camp', function(req, res, next) {
  res.render('activity/camp');
});

//tracking
router.get('/activity/tracking', function(req, res, next) {
  res.render('activity/tracking');
});

//young
router.get('/activity/young', function(req, res, next) {
  res.render('activity/young');
});

//베스트 여행 클릭시
router.get('/best', function(req, res, next) {
  res.render('best/best');
});

//best1
router.get('/best/best1', function(req, res, next) {
  res.render('best/best1');
});

//best2
router.get('/best/best2', function(req, res, next) {
  res.render('best/best2');
});

//best3
router.get('/best/best3', function(req, res, next) {
  res.render('best/best3');
});

//best4
router.get('/best/best4', function(req, res, next) {
  res.render('best/best4');
});

//먹거리 클릭시
router.get('/food', function(req, res, next) {
  res.render('food/food');
});

//bread
router.get('/food/bread', function(req, res, next) {
  res.render('food/bread');
});

//chicken
router.get('/food/chicken', function(req, res, next) {
  res.render('food/chicken');
});

//mak
router.get('/food/mak', function(req, res, next) {
  res.render('food/mak');
});

//nightmarket
router.get('/food/nightmarket', function(req, res, next) {
  res.render('food/nightmarket');
});

//바다여행 클릭시
router.get('/sea', function(req, res, next) {
  res.render('sea/sea');
});

//east
router.get('/sea/east', function(req, res, next) {
  res.render('sea/east');
});

//south
router.get('/sea/south', function(req, res, next) {
  res.render('sea/south');
});

//vally
router.get('/sea/vally', function(req, res, next) {
  res.render('sea/vally');
});

//west
router.get('/sea/west', function(req, res, next) {
  res.render('sea/west');
});

//사진 여행 클릭시
router.get('/photo', function(req, res, next) {
  res.render('photo/photo');
});

//drama
router.get('/photo/drama', function(req, res, next) {
  res.render('photo/drama');
});

//wall
router.get('/photo/wall', function(req, res, next) {
  res.render('photo/wall');
});

//self
router.get('/photo/self', function(req, res, next) {
  res.render('photo/self');
});

//nightview
router.get('/photo/nightview', function(req, res, next) {
  res.render('photo/nightview');
});




module.exports = router;
