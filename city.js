var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//mysql과 server 연동
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'city',
    password: 'yh0705'
});

connection.connect();



//안동
router.get('/andong',  function(req, res, next){
    var sql = 'SELECT *FROM andong_stay';
    connection.query(sql, function(err, andongstays, fields){
        var sql = 'SELECT *FROM andong_view';
        connection.query(sql, function(err, andongviews, fields){
            var sql = 'SELECT *FROM andong_res';
            connection.query(sql, function(err, andongress, fields){
                 res.render('city/andong/view', {andongviews : andongviews, andongstays : andongstays, andongress : andongress}); 
            });
        });
    });
});

//아산
router.get('/asan',  function(req, res, next){
    var sql = 'SELECT *FROM asan_stay';
    connection.query(sql, function(err, asanstays, fields){
        var sql = 'SELECT *FROM asan_view';
        connection.query(sql, function(err, asanviews, fields){
            var sql = 'SELECT *FROM asan_res';
            connection.query(sql, function(err, asanress, fields){
                 res.render('city/asan/view', {asanviews : asanviews, asanstays : asanstays, asanress : asanress}); 
            });
        });
    });
});

//보령
router.get('/boleng',  function(req, res, next){
    var sql = 'SELECT *FROM boleng_stay';
    connection.query(sql, function(err, bolengstays, fields){
        var sql = 'SELECT *FROM boleng_view';
        connection.query(sql, function(err, bolengviews, fields){
            var sql = 'SELECT *FROM boleng_res';
            connection.query(sql, function(err, bolengress, fields){
                 res.render('city/boleng/view', {bolengviews : bolengviews, bolengstays : bolengstays, bolengress : bolengress}); 
            });
        });
    });
});

//부안
router.get('/booan',  function(req, res, next){
    var sql = 'SELECT *FROM booan_stay';
    connection.query(sql, function(err, booanstays, fields){
        var sql = 'SELECT *FROM booan_view';
        connection.query(sql, function(err, booanviews, fields){
            var sql = 'SELECT *FROM booan_res';
            connection.query(sql, function(err, booanress, fields){
                 res.render('city/booan/view', {booanviews : booanviews, booanstays : booanstays, booanress : booanress}); 
            });
        });
    });
});

//보성
router.get('/bosung',  function(req, res, next){
    var sql = 'SELECT *FROM bosung_stay';
    connection.query(sql, function(err, bosungstays, fields){
        var sql = 'SELECT *FROM bosung_view';
        connection.query(sql, function(err, bosungviews, fields){
            var sql = 'SELECT *FROM bosung_res';
            connection.query(sql, function(err, bosungress, fields){
                 res.render('city/bosung/view', {bosungviews : bosungviews, bosungstays : bosungstays, bosungress : bosungress}); 
            });
        });
    });
});

//부산
router.get('/busan',  function(req, res, next){
    var sql = 'SELECT *FROM busan_stay';
    connection.query(sql, function(err, busanstays, fields){
        var sql = 'SELECT *FROM busan_view';
        connection.query(sql, function(err, busanviews, fields){
            var sql = 'SELECT *FROM busan_res';
            connection.query(sql, function(err, busanress, fields){
                 res.render('city/busan/view', {busanviews : busanviews, busanstays : busanstays, busanress : busanress}); 
            });
        });
    });
});

//창원
router.get('/changwon',  function(req, res, next){
    var sql = 'SELECT *FROM changwon_stay';
    connection.query(sql, function(err, changwonstays, fields){
        var sql = 'SELECT *FROM changwon_view';
        connection.query(sql, function(err, changwonviews, fields){
            var sql = 'SELECT *FROM changwon_res';
            connection.query(sql, function(err, changwonress, fields){
                 res.render('city/changwon/view', {changwonviews : changwonviews, changwonstays : changwonstays, changwonress : changwonress}); 
            });
        });
    });
});

//춘천
router.get('/choonchen',  function(req, res, next){
    var sql = 'SELECT *FROM choonchen_stay';
    connection.query(sql, function(err, choonchenstays, fields){
        var sql = 'SELECT *FROM choonchen_view';
        connection.query(sql, function(err, choonchenviews, fields){
            var sql = 'SELECT *FROM choonchen_res';
            connection.query(sql, function(err, choonchenress, fields){
                 res.render('city/choonchen/view', {choonchenviews : choonchenviews, choonchenstays : choonchenstays, choonchenress : choonchenress}); 
            });
        });
    });
});

//천안
router.get('/chunan',  function(req, res, next){
    var sql = 'SELECT *FROM chunan_stay';
    connection.query(sql, function(err, chunanstays, fields){
        var sql = 'SELECT *FROM chunan_view';
        connection.query(sql, function(err, chunanviews, fields){
            var sql = 'SELECT *FROM chunan_res';
            connection.query(sql, function(err, chunanress, fields){
                 res.render('city/chunan/view', {chunanviews : chunanviews, chunanstays : chunanstays, chunanress : chunanress}); 
            });
        });
    });
});

//청주
router.get('/chungju',  function(req, res, next){
    var sql = 'SELECT *FROM chungju_stay';
    connection.query(sql, function(err, chungjustays, fields){
        var sql = 'SELECT *FROM chungju_view';
        connection.query(sql, function(err, chungjuviews, fields){
            var sql = 'SELECT *FROM chungju_res';
            connection.query(sql, function(err, chungjuress, fields){
                 res.render('city/chungju/view', {chungjuviews : chungjuviews, chungjustays : chungjustays, chungjuress : chungjuress}); 
            });
        });
    });
});

//대구
router.get('/daegu',  function(req, res, next){
    var sql = 'SELECT *FROM daegu_stay';
    connection.query(sql, function(err, daegustays, fields){
        var sql = 'SELECT *FROM daegu_view';
        connection.query(sql, function(err, daeguviews, fields){
            var sql = 'SELECT *FROM daegu_res';
            connection.query(sql, function(err, daeguress, fields){
                 res.render('city/daegu/view', {daeguviews : daeguviews, daegustays : daegustays, daeguress : daeguress}); 
            });
        });
    });
});

//담양
router.get('/damyang',  function(req, res, next){
    var sql = 'SELECT *FROM damyang_stay';
    connection.query(sql, function(err, damyangstays, fields){
        var sql = 'SELECT *FROM damyang_view';
        connection.query(sql, function(err, damyangviews, fields){
            var sql = 'SELECT *FROM damyang_res';
            connection.query(sql, function(err, damyangress, fields){
                 res.render('city/damyang/view', {damyangviews : damyangviews, damyangstays : damyangstays, damyangress : damyangress}); 
            });
        });
    });
});

//단양
router.get('/danyang',  function(req, res, next){
    var sql = 'SELECT *FROM danyang_stay';
    connection.query(sql, function(err, danyangstays, fields){
        var sql = 'SELECT *FROM danyang_view';
        connection.query(sql, function(err, danyangviews, fields){
            var sql = 'SELECT *FROM danyang_res';
            connection.query(sql, function(err, danyangress, fields){
                 res.render('city/danyang/view', {danyangviews : danyangviews, danyangstays : danyangstays, danyangress : danyangress}); 
            });
        });
    });
});

//대전
router.get('/dejun',  function(req, res, next){
    var sql = 'SELECT *FROM dejun_stay';
    connection.query(sql, function(err, dejunstays, fields){
        var sql = 'SELECT *FROM dejun_view';
        connection.query(sql, function(err, dejunviews, fields){
            var sql = 'SELECT *FROM dejun_res';
            connection.query(sql, function(err, dejunress, fields){
                 res.render('city/dejun/view', {dejunviews : dejunviews, dejunstays : dejunstays, dejunress : dejunress}); 
            });
        });
    });
});

//동해
router.get('/donghe',  function(req, res, next){
    var sql = 'SELECT *FROM donghe_stay';
    connection.query(sql, function(err, donghestays, fields){
        var sql = 'SELECT *FROM donghe_view';
        connection.query(sql, function(err, dongheviews, fields){
            var sql = 'SELECT *FROM donghe_res';
            connection.query(sql, function(err, dongheress, fields){
                 res.render('city/donghe/view', {dongheviews : dongheviews, donghestays : donghestays, dongheress : dongheress}); 
            });
        });
    });
});

//강릉
router.get('/gangleng',  function(req, res, next){
    var sql = 'SELECT *FROM gangleng_stay';
    connection.query(sql, function(err, ganglengstays, fields){
        var sql = 'SELECT *FROM gangleng_view';
        connection.query(sql, function(err, ganglengviews, fields){
            var sql = 'SELECT *FROM gangleng_res';
            connection.query(sql, function(err, ganglengress, fields){
                 res.render('city/gangleng/view', {ganglengviews : ganglengviews, ganglengstays : ganglengstays, ganglengress : ganglengress}); 
            });
        });
    });
});

//가평
router.get('/gapyoung',  function(req, res, next){
    var sql = 'SELECT *FROM gapyoung_stay';
    connection.query(sql, function(err, gapyoungstays, fields){
        var sql = 'SELECT *FROM gapyoung_view';
        connection.query(sql, function(err, gapyoungviews, fields){
            var sql = 'SELECT *FROM gapyoung_res';
            connection.query(sql, function(err, gapyoungress, fields){
                 res.render('city/gapyoung/view', {gapyoungviews : gapyoungviews, gapyoungstays : gapyoungstays, gapyoungress : gapyoungress}); 
            });
        });
    });
});

//곡성
router.get('/goksung',  function(req, res, next){
    var sql = 'SELECT *FROM goksung_stay';
    connection.query(sql, function(err, goksungstays, fields){
        var sql = 'SELECT *FROM goksung_view';
        connection.query(sql, function(err, goksungviews, fields){
            var sql = 'SELECT *FROM goksung_res';
            connection.query(sql, function(err, goksungress, fields){
                 res.render('city/goksung/view', {goksungviews : goksungviews, goksungstays : goksungstays, goksungress : goksungress}); 
            });
        });
    });
});

//공주
router.get('/gongju',  function(req, res, next){
    var sql = 'SELECT *FROM gongju_stay';
    connection.query(sql, function(err, gongjustays, fields){
        var sql = 'SELECT *FROM gongju_view';
        connection.query(sql, function(err, gongjuviews, fields){
            var sql = 'SELECT *FROM gongju_res';
            connection.query(sql, function(err, gongjuress, fields){
                 res.render('city/gongju/view', {gongjuviews : gongjuviews, gongjustays : gongjustays, gongjuress : gongjuress}); 
            });
        });
    });
});

//군산
router.get('/goonsan',  function(req, res, next){
    var sql = 'SELECT *FROM goonsan_stay';
    connection.query(sql, function(err, goonsanstays, fields){
        var sql = 'SELECT *FROM goonsan_view';
        connection.query(sql, function(err, goonsanviews, fields){
            var sql = 'SELECT *FROM goonsan_res';
            connection.query(sql, function(err, goonsanress, fields){
                 res.render('city/goonsan/view', {goonsanviews : goonsanviews, goonsanstays : goonsanstays, goonsanress : goonsanress}); 
            });
        });
    });
});

//고성
router.get('/gosung',  function(req, res, next){
    var sql = 'SELECT *FROM gosung_stay';
    connection.query(sql, function(err, gosungstays, fields){
        var sql = 'SELECT *FROM gosung_view';
        connection.query(sql, function(err, gosungviews, fields){
            var sql = 'SELECT *FROM gosung_res';
            connection.query(sql, function(err, gosungress, fields){
                 res.render('city/gosung/view', {gosungviews : gosungviews, gosungstays : gosungstays, gosungress : gosungress}); 
            });
        });
    });
});

//구례
router.get('/gule',  function(req, res, next){
    var sql = 'SELECT *FROM gule_stay';
    connection.query(sql, function(err, gulestays, fields){
        var sql = 'SELECT *FROM gule_view';
        connection.query(sql, function(err, guleviews, fields){
            var sql = 'SELECT *FROM gule_res';
            connection.query(sql, function(err, guleress, fields){
                 res.render('city/gule/view', {guleviews : guleviews, gulestays : gulestays, guleress : guleress}); 
            });
        });
    });
});

//광주
router.get('/gwangju',  function(req, res, next){
    var sql = 'SELECT *FROM gwangju_stay';
    connection.query(sql, function(err, gwangjustays, fields){
        var sql = 'SELECT *FROM gwangju_view';
        connection.query(sql, function(err, gwangjuviews, fields){
            var sql = 'SELECT *FROM gwangju_res';
            connection.query(sql, function(err, gwangjuress, fields){
                 res.render('city/gwangju/view', {gwangjuviews : gwangjuviews, gwangjustays : gwangjustays, gwangjuress : gwangjuress}); 
            });
        });
    });
});

//광양
router.get('/gwangyang',  function(req, res, next){
    var sql = 'SELECT *FROM gwangyang_stay';
    connection.query(sql, function(err, gwangyangstays, fields){
        var sql = 'SELECT *FROM gwangyang_view';
        connection.query(sql, function(err, gwangyangviews, fields){
            var sql = 'SELECT *FROM gwangyang_res';
            connection.query(sql, function(err, gwangyangress, fields){
                 res.render('city/gwangyang/view', {gwangyangviews : gwangyangviews, gwangyangstays : gwangyangstays, gwangyangress : gwangyangress}); 
            });
        });
    });
});

//경주
router.get('/gyoungju',  function(req, res, next){
    var sql = 'SELECT *FROM gyoungju_stay';
    connection.query(sql, function(err, gyoungjustays, fields){
        var sql = 'SELECT *FROM gyoungju_view';
        connection.query(sql, function(err, gyoungjuviews, fields){
            var sql = 'SELECT *FROM gyoungju_res';
            connection.query(sql, function(err, gyoungjuress, fields){
                 res.render('city/gyoungju/view', {gyoungjuviews : gyoungjuviews, gyoungjustays : gyoungjustays, gyoungjuress : gyoungjuress}); 
            });
        });
    });
});

//하동
router.get('/hadong',  function(req, res, next){
    var sql = 'SELECT *FROM hadong_stay';
    connection.query(sql, function(err, hadongstays, fields){
        var sql = 'SELECT *FROM hadong_view';
        connection.query(sql, function(err, hadongviews, fields){
            var sql = 'SELECT *FROM hadong_res';
            connection.query(sql, function(err, hadongress, fields){
                 res.render('city/hadong/view', {hadongviews : hadongviews, hadongstays : hadongstays, hadongress : hadongress}); 
            });
        });
    });
});

//횡성
router.get('/heseong',  function(req, res, next){
    var sql = 'SELECT *FROM heseong_stay';
    connection.query(sql, function(err, heseongstays, fields){
        var sql = 'SELECT *FROM heseong_view';
        connection.query(sql, function(err, heseongviews, fields){
            var sql = 'SELECT *FROM heseong_res';
            connection.query(sql, function(err, heseongress, fields){
                 res.render('city/heseong/view', {heseongviews : heseongviews, heseongstays : heseongstays, heseongress : heseongress}); 
            });
        });
    });
});

//제천
router.get('/jechun',  function(req, res, next){
    var sql = 'SELECT *FROM jechun_stay';
    connection.query(sql, function(err, jechunstays, fields){
        var sql = 'SELECT *FROM jechun_view';
        connection.query(sql, function(err, jechunviews, fields){
            var sql = 'SELECT *FROM jechun_res';
            connection.query(sql, function(err, jechunress, fields){
                 res.render('city/jechun/view', {jechunviews : jechunviews, jechunstays : jechunstays, jechunress : jechunress}); 
            });
        });
    });
});

//전주
router.get('/jenju',  function(req, res, next){
    var sql = 'SELECT *FROM jenju_stay';
    connection.query(sql, function(err, jenjustays, fields){
        var sql = 'SELECT *FROM jenju_view';
        connection.query(sql, function(err, jenjuviews, fields){
            var sql = 'SELECT *FROM jenju_res';
            connection.query(sql, function(err, jenjuress, fields){
                 res.render('city/jenju/view', {jenjuviews : jenjuviews, jenjustays : jenjustays, jenjuress : jenjuress}); 
            });
        });
    });
});

//정선
router.get('/jungseon',  function(req, res, next){
    var sql = 'SELECT *FROM jungseon_stay';
    connection.query(sql, function(err, jungseonstays, fields){
        var sql = 'SELECT *FROM jungseon_view';
        connection.query(sql, function(err, jungseonviews, fields){
            var sql = 'SELECT *FROM jungseon_res';
            connection.query(sql, function(err, jungseonress, fields){
                 res.render('city/jungseon/view', {jungseonviews : jungseonviews, jungseonstays : jungseonstays, jungseonress : jungseonress}); 
            });
        });
    });
});

//김천
router.get('/kimchun',  function(req, res, next){
    var sql = 'SELECT *FROM kimchun_stay';
    connection.query(sql, function(err, kimchunstays, fields){
        var sql = 'SELECT *FROM kimchun_view';
        connection.query(sql, function(err, kimchunviews, fields){
            var sql = 'SELECT *FROM kimchun_res';
            connection.query(sql, function(err, kimchunress, fields){
                 res.render('city/kimchun/view', {kimchunviews : kimchunviews, kimchunstays : kimchunstays, kimchunress : kimchunress}); 
            });
        });
    });
});

//목포
router.get('/mokpo',  function(req, res, next){
    var sql = 'SELECT *FROM mokpo_stay';
    connection.query(sql, function(err, mokpostays, fields){
        var sql = 'SELECT *FROM mokpo_view';
        connection.query(sql, function(err, mokpoviews, fields){
            var sql = 'SELECT *FROM mokpo_res';
            connection.query(sql, function(err, mokporess, fields){
                 res.render('city/mokpo/view', {mokpoviews : mokpoviews, mokpostays : mokpostays, mokporess : mokporess}); 
            });
        });
    });
});

//문경
router.get('/moongyoung',  function(req, res, next){
    var sql = 'SELECT *FROM moongyoung_stay';
    connection.query(sql, function(err, moongyoungstays, fields){
        var sql = 'SELECT *FROM moongyoung_view';
        connection.query(sql, function(err, moongyoungviews, fields){
            var sql = 'SELECT *FROM moongyoung_res';
            connection.query(sql, function(err, moongyoungress, fields){
                 res.render('city/moongyoung/view', {moongyoungviews : moongyoungviews, moongyoungstays : moongyoungstays, moongyoungress : moongyoungress}); 
            });
        });
    });
});

//나주
router.get('/naju',  function(req, res, next){
    var sql = 'SELECT *FROM naju_stay';
    connection.query(sql, function(err, najustays, fields){
        var sql = 'SELECT *FROM naju_view';
        connection.query(sql, function(err, najuviews, fields){
            var sql = 'SELECT *FROM naju_res';
            connection.query(sql, function(err, najuress, fields){
                 res.render('city/naju/view', {najuviews : najuviews, najustays : najustays, najuress : najuress}); 
            });
        });
    });
});

//남해
router.get('/namhe',  function(req, res, next){
    var sql = 'SELECT *FROM namhe_stay';
    connection.query(sql, function(err, namhestays, fields){
        var sql = 'SELECT *FROM namhe_view';
        connection.query(sql, function(err, namheviews, fields){
            var sql = 'SELECT *FROM namhe_res';
            connection.query(sql, function(err, namheress, fields){
                 res.render('city/namhe/view', {namheviews : namheviews, namhestays : namhestays, namheress : namheress}); 
            });
        });
    });
});

//남원
router.get('/namwon',  function(req, res, next){
    var sql = 'SELECT *FROM namwon_stay';
    connection.query(sql, function(err, namwonstays, fields){
        var sql = 'SELECT *FROM namwon_view';
        connection.query(sql, function(err, namwonviews, fields){
            var sql = 'SELECT *FROM namwon_res';
            connection.query(sql, function(err, namwonress, fields){
                 res.render('city/namwon/view', {namwonviews : namwonviews, namwonstays : namwonstays, namwonress : namwonress}); 
            });
        });
    });
});

//포천
router.get('/pochun',  function(req, res, next){
    var sql = 'SELECT *FROM pochun_stay';
    connection.query(sql, function(err, pochunstays, fields){
        var sql = 'SELECT *FROM pochun_view';
        connection.query(sql, function(err, pochunviews, fields){
            var sql = 'SELECT *FROM pochun_res';
            connection.query(sql, function(err, pochunress, fields){
                 res.render('city/pochun/view', {pochunviews : pochunviews, pochunstays : pochunstays, pochunress : pochunress}); 
            });
        });
    });
});

//포항
router.get('/pohang',  function(req, res, next){
    var sql = 'SELECT *FROM pohang_stay';
    connection.query(sql, function(err, pohangstays, fields){
        var sql = 'SELECT *FROM pohang_view';
        connection.query(sql, function(err, pohangviews, fields){
            var sql = 'SELECT *FROM pohang_res';
            connection.query(sql, function(err, pohangress, fields){
                 res.render('city/pohang/view', {pohangviews : pohangviews, pohangstays : pohangstays, pohangress : pohangress}); 
            });
        });
    });
});

//순천
router.get('/soonchun',  function(req, res, next){
    var sql = 'SELECT *FROM soonchun_stay';
    connection.query(sql, function(err, soonchunstays, fields){
        var sql = 'SELECT *FROM soonchun_view';
        connection.query(sql, function(err, soonchunviews, fields){
            var sql = 'SELECT *FROM soonchun_res';
            connection.query(sql, function(err, soonchunress, fields){
                 res.render('city/soonchun/view', {soonchunviews : soonchunviews, soonchunstays : soonchunstays, soonchunress : soonchunress}); 
            });
        });
    });
});

//태안
router.get('/teahn',  function(req, res, next){
    var sql = 'SELECT *FROM teahn_stay';
    connection.query(sql, function(err, teahnstays, fields){
        var sql = 'SELECT *FROM teahn_view';
        connection.query(sql, function(err, teahnviews, fields){
            var sql = 'SELECT *FROM teahn_res';
            connection.query(sql, function(err, teahnress, fields){
                 res.render('city/teahn/view', {teahnviews : teahnviews, teahnstays : teahnstays, teahnress : teahnress}); 
            });
        });
    });
});

//울진
router.get('/uljin',  function(req, res, next){
    var sql = 'SELECT *FROM uljin_stay';
    connection.query(sql, function(err, uljinstays, fields){
        var sql = 'SELECT *FROM uljin_view';
        connection.query(sql, function(err, uljinviews, fields){
            var sql = 'SELECT *FROM uljin_res';
            connection.query(sql, function(err, uljinress, fields){
                 res.render('city/uljin/view', {uljinviews : uljinviews, uljinstays : uljinstays, uljinress : uljinress}); 
            });
        });
    });
});

//울산
router.get('/ulsan',  function(req, res, next){
    var sql = 'SELECT *FROM ulsan_stay';
    connection.query(sql, function(err,ulsanstays, fields){
        var sql = 'SELECT *FROM ulsan_view';
        connection.query(sql, function(err, ulsanviews, fields){
            var sql = 'SELECT *FROM ulsan_res';
            connection.query(sql, function(err, ulsanress, fields){
                 res.render('city/ulsan/view', {ulsanviews : ulsanviews, ulsanstays : ulsanstays, ulsanress : ulsanress}); 
            });
        });
    });
});

//양양
router.get('/yangyang',  function(req, res, next){
    var sql = 'SELECT *FROM yangyang_stay';
    connection.query(sql, function(err, yangyangstays, fields){
        var sql = 'SELECT *FROM yangyang_view';
        connection.query(sql, function(err, yangyangviews, fields){
            var sql = 'SELECT *FROM yangyang_res';
            connection.query(sql, function(err, yangyangress, fields){
                 res.render('city/yangyang/view', {yangyangviews : yangyangviews, yangyangstays : yangyangstays, yangyangress : yangyangress}); 
            });
        });
    });
});

//여수
router.get('/yosu',  function(req, res, next){
    var sql = 'SELECT *FROM yosu_stay';
    connection.query(sql, function(err, yosustays, fields){
        var sql = 'SELECT *FROM yosu_view';
        connection.query(sql, function(err, yosuviews, fields){
            var sql = 'SELECT *FROM yosu_res';
            connection.query(sql, function(err, yosuress, fields){
                 res.render('city/yosu/view', {yosuviews : yosuviews, yosustays : yosustays, yosuress : yosuress}); 
            });
        });
    });
});

//영광
router.get('/younggwang',  function(req, res, next){
    var sql = 'SELECT *FROM younggwang_stay';
    connection.query(sql, function(err, younggwangstays, fields){
        var sql = 'SELECT *FROM younggwang_view';
        connection.query(sql, function(err, younggwangviews, fields){
            var sql = 'SELECT *FROM younggwang_res';
            connection.query(sql, function(err, younggwangress, fields){
                 res.render('city/younggwang/view', {younggwangviews : younggwangviews, younggwangstays : younggwangstays, younggwangress : younggwangress}); 
            });
        });
    });
});

//영주
router.get('/youngju',  function(req, res, next){
    var sql = 'SELECT *FROM youngju_stay';
    connection.query(sql, function(err, youngjustays, fields){
        var sql = 'SELECT *FROM youngju_view';
        connection.query(sql, function(err, youngjuviews, fields){
            var sql = 'SELECT *FROM youngju_res';
            connection.query(sql, function(err, youngjuress, fields){
                 res.render('city/youngju/view', {youngjuviews : youngjuviews, youngjustays : youngjustays, youngjuress : youngjuress}); 
            });
        });
    });
});

//영월
router.get('/youngwol',  function(req, res, next){
    var sql = 'SELECT *FROM youngwol_stay';
    connection.query(sql, function(err, youngwolstays, fields){
        var sql = 'SELECT *FROM youngwol_view';
        connection.query(sql, function(err, youngwolviews, fields){
            var sql = 'SELECT *FROM youngwol_res';
            connection.query(sql, function(err, youngwolress, fields){
                 res.render('city/youngwol/view', {youngwolviews : youngwolviews, youngwolstays : youngwolstays, youngwolress : youngwolress}); 
            });
        });
    });
});

router.post('/search', function(req, res, next){
    if(req.body.city == "안동"){
        res.redirect('/city/andong');
    }else if(req.body.city == "아산"){
        res.redirect('/city/asan');
    }else if(req.body.city == "보령"){
        res.redirect('/city/boleng');
    }else if(req.body.city == "부안"){
        res.redirect('/city/booan');
    }else if(req.body.city == "보성"){
        res.redirect('/city/bosung');
    }else if(req.body.city == "부산"){
        res.redirect('/city/busan');
    }else if(req.body.city == "창원"){
        res.redirect('/city/changwon');
    }else if(req.body.city == "춘천"){
        res.redirect('/city/choonchen');
    }else if(req.body.city == "천안"){
        res.redirect('/city/chunan');
    }else if(req.body.city == '청주'){
        res.redirect('/city/chungju');
    }else if(req.body.city == "대구"){
        res.redirect('/city/daegu');
    }else if(req.body.city == "담양"){
        res.redirect('/city/damyang');
    }else if(req.body.city == "단양"){
        res.redirect('/city/danyang');
    }else if(req.body.city == '대전'){
        res.redirect('/city/dejun');
    }else if(req.body.city == '동해'){
        res.redirect('/city/donghe');
    }else if(req.body.city == "강릉"){
        res.redirect('/city/gangleng');
    }else if(req.body.city == "가평"){
        res.redirect('/city/gapyoung');
    }else if(req.body.city == "곡성"){
        res.redirect('/city/goksung');
    }else if(req.body.city == '공주'){
        res.redirect('/city/gongju');
    }else if(req.body.city == "군산"){
        res.redirect('/city/goonsan');
    }else if(req.body.city == "고성"){
        res.redirect('/city/gosung');
    }else if(req.body.city == "구례"){
        res.redirect('/city/gule');
    }else if(req.body.city == "광주"){
        res.redirect('/city/gwangju');
    }else if(req.body.city == "광양"){
        res.redirect('/city/gwangyang');
    }else if(req.body.city == "경주"){
        res.redirect('/city/gyoungju');
    }else if(req.body.city == '하동'){
        res.redirect('/city/hadong');
    }else if(req.body.city == '횡성'){
        res.redirect('/city/heseong');
    }else if(req.body.city == "제천"){
        res.redirect('/city/jechun');
    }else if(req.body.city == "전주"){
        res.redirect('/city/jenju');
    }else if(req.body.city == "정선"){
        res.redirect('/city/jungseon');
    }else if(req.body.city == "김천"){
        res.redirect('/city/kimchun');
    }else if(req.body.city == "목포"){
        res.redirect('/city/mokpo');
    }else if(req.body.city == "문경"){
        res.redirect('/city/moongyoung');
    }else if(req.body.city == "나주"){
        res.redirect('/city/naju');
    }else if(req.body.city == "남해"){
        res.redirect('/city/namhe');
    }else if(req.body.city == "남원"){
        res.redirect('/city/namwon');
    }else if(req.body.city == '포천'){
        res.redirect('/city/pochun');
    }else if(req.body.city == "포항"){
        res.redirect('/city/pohang');
    }else if(req.body.city == "순천"){
        res.redirect('/city/soonchun');
    }else if(req.body.city == "태안"){
        res.redirect('/city/teahn');
    }else if(req.body.city == "울진"){
        res.redirect('/city/uljin');
    }else if(req.body.city == "울산"){
        res.redirect('/city/ulsan');
    }else if(req.body.city == "양양"){
        res.redirect('/city/yangyang');
    }else if(req.body.city == '여수'){
        res.redirect('/city/yosu');
    }else if(req.body.city == "영광"){
        res.redirect('/city/younggwang');
    }else if(req.body.city == "영주"){
        res.redirect('/city/youngju');
    }else if(req.body.city == "영월"){
        res.redirect('/city/youngwol');
    }else {
        res.redirect('back');
    }
});


module.exports = router;