var express = require('express');
var router = express.Router();

var _ = require('lodash');

/*
- view와 서버관의 control 부분
- 조원 정연훈이 하였습니다.
*/

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


//자동완성 hashmap을 위한 자료와 구현 부분
var countries = [
'안동', '아산', '보령', '부안', '보성','부산','창원','춘천','천안','청주','청주','대구','담양','단양','대전','동해','강릉','가평','곡성','공주','군산','고성','구례','광주','광양','경주','하동','횡성','제천','전주','정선','김천','목포','문경','나주','남해','남원','포천','포항','순천','태안','울진','울산','양양','여수','양양','영주','영월'
 ];

//검색 했을 시 검색한 글자중 countries에 해당하는 글자를 filter 메소드로 키 값으로 대응되는 글자를 찾는 hashmap를 이용
router.get('/suggest', function(req, res, next) {
  var city = req.query.city;
    var ret = _.filter(countries, function(name) {
    return name.toLowerCase().indexOf(city.toLowerCase()) > -1;
     });
  res.json(ret);
});




module.exports = router;
