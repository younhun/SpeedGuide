var express = require('express'),
Post = require('../models/Post');
var router = express.Router();


/*
-데이터베이스(mongoose)를 서버와 연동 하는 부분과 게시판 control 부분
-조원 정연훈이 하였습니다.
*/

//문의 클릭시 나오는 부분
router.get('/contact', function(req, res, next) {
    var curPage = 1;
    if(req.param('page')){
        curPage = Number(req.param('page'));//정수로 형변환
    }//몇페이지인지에 대한 파라메터가 있으면 값 받음.
 Post.find({}, function(err, posts) {
   Post.count({}, function (err, count){
            if(err){
                return next(err);
            }
            var totalPageNum = Math.ceil(count/6);
            var prevUrl = '/?page=';
            var nextUrl = '/?page=';
            var pages = new Array();
            for(var i=1 ; i<=totalPageNum ; i++){
                pages.push({
                    cls: '',
                    text: i, 
                    url: '/?page='+i
                });
            }//pages라는 배열에 pagination 갯수와 정보 담음
            if(curPage===1){
                prevUrl = prevUrl + String(curPage);
                nextUrl = nextUrl + String(curPage+1);//다시 문자열로 형변환하여 문자끼리 더해줌
            } else if (curPage===totalPageNum){
                prevUrl= prevUrl + String(curPage-1);
                nextUrl = nextUrl + String(curPage);
            } else {
                prevUrl = prevUrl + String(curPage-1);
                nextUrl = nextUrl + String(curPage+1);
            }

  res.render('posts/index', {posts:posts, pagination: {
                    numPosts: count,
                    firstPage: {
                        cls: '',
                        url: '/?page=1'
                    },
                    prevPage: {
                        cls: '',
                        url: prevUrl
                    },
                    nextPage: {
                        cls: '',
                        url: nextUrl
                    },
                    lastPage: {
                        cls: '',
                        url: '/?page='+totalPageNum
                    },
                    pages: pages
                }
            });
        });
    }).limit(6).skip((curPage-1)*6).sort({date:-1});//6개씩 디비에서 꺼내고 skip을 통해 끌어올 document 구분지음
});

//문의 페이지에서 관리자가 관리 할 수 있는 페이지를 불러오는 부분(URI주소창에끝에 /tomorrow 들어가면 나온다 => 관리자만 알 수 있게 설정가능 현재 임의로 팀이름으로 지정)
router.get('/contact/tomorrow', function(req, res, next) {
    var curPage = 1;
    if(req.param('page')){
        curPage = Number(req.param('page'));
    }
 Post.find({}, function(err, posts) {
   Post.count({}, function (err, count){
            if(err){
                return next(err);
            }
            var totalPageNum = Math.ceil(count/6);
            var prevUrl = '/?page=';
            var nextUrl = '/?page=';
            var pages = new Array();
            for(var i=1 ; i<=totalPageNum ; i++){
                pages.push({
                    cls: '',
                    text: i, 
                    url: '/?page='+i
                });
            }
            if(curPage===1){
                prevUrl = prevUrl + String(curPage);
                nextUrl = nextUrl + String(curPage+1);
            } else if (curPage===totalPageNum){
                prevUrl= prevUrl + String(curPage-1);
                nextUrl = nextUrl + String(curPage);
            } else {
                prevUrl = prevUrl + String(curPage-1);
                nextUrl = nextUrl + String(curPage+1);
            }

  res.render('posts/root', {posts:posts, pagination: {
                    numPosts: count,
                    firstPage: {
                        cls: '',
                        url: '/?page=1'
                    },
                    prevPage: {
                        cls: '',
                        url: prevUrl
                    },
                    nextPage: {
                        cls: '',
                        url: nextUrl
                    },
                    lastPage: {
                        cls: '',
                        url: '/?page='+totalPageNum
                    },
                    pages: pages
                }
            });
        });
    }).limit(6).skip((curPage-1)*6).sort({date:-1});
});


//글쓰기 누르면 new로 넘어간다
 router.get('/new',function(req, res, next){
   Post.find({}, function(err, post){//post로 줘야 null값이 들어있지 않다.
     if(err){
       return next(err);
     }
      res.render('posts/edit',{post : post});
    //edit.jade post 변수엔 db 검색 결과 데이터를 저장해줌
   });
 });

//수정 버튼 누를시 edit로 넘어간다.
 router.get('/:id/edit', function(req, res, next){
 Post.findById(req.params.id, function(err, post){//post로 줘야 null값이 들어있지 않다.
  //각 게시글의 id 를 찾아서 수정 페이지로 넘어간다.
     if(err){
       return next(err);
     }
      res.render('posts/edit',{post : post});
      //edit 페이지로 넘어간다.
  });
});


//작성한 게시글을 보기위한 코드이다.
router.get('/:id', function(req, res, next){
  Post.findById(req.params.id, function(err,post){
  //각 게시글을 보기위해선 각 게시글의 id를 찾아간다. 
    post.read++;//조회수를 늘려준다.
    post.save(function(err){//조회수 늘린것을 저장
      if(err){
        return next(err);
      }
    });
      res.render('posts/show', {post: post}); 
      //show 페이지로 넘어간다.
  });
});

//작성한 내용을 db에 저장한다.
router.post('/', function(req, res, next){
 //제목, 내용, 비밀번호, 이메일이 없으면 
 if(!req.body.content || !req.body.title || !req.body.email || !req.body.password){//입력해야할 내용이 없으면
   console.log('please write');//에러시 콘솔창에 err 표시
   return res.redirect('back');//화면의 변화가 나타나지 않게한다.
 }
//post 데이터를 데이터베이스에 저장한다.
 var post = new Post({
   title : req.body.title,
   email : req.body.email,
   content : req.body.content,
 });
//비밀번호는 따로 담아둔다 => 나중에 비교를 위해
 post.password = req.body.password;

 post.save(function(err){
   if(err){
     return next(err);
   }
   res.redirect('/posts/contact');
   });
});

//게시글 수정을 위함이다.
router.put('/:id', function(req, res, next){  
  Post.findById(req.params.id, function(err, post){
  //각 게시글의 아이디를 찾아간다.
  if(err) {
    return next(err);
   }
  
  //비밀번호가 일치하지 않을시 오류
  if(post.password !== req.body.password){
    console.log('비밀번호가 일치하지 않다.');
    return res.redirect('back');
  }
  
  //수정 페이지에서 수정시 내용이 변화되게 선언해준다. 선언안할시 변화되지 않는다. 
  post.email = req.body.email;
  post.content = req.body.content;
  post.title = req.body.title;

  //글 올린 날짜와 시간을 글을 수정한 날짜와 시간으로 바꾸어준다.
  post.createdAt = Date.now();
  //수정한 것을 저장한다.
   post.save(function(err){
   if(err){
     return next(err);
   }
  res.redirect("/posts/contact");
    });
  });
});


//삭제 버튼 누를시 제거된다. => 관리자 페이지에서 구현된다.
router.delete("/:id/tomorrow", function(req, res, next){
  Post.findOneAndRemove({_id:req.params.id},function(err){
    if(err){
      return next(err);
    }
    res.redirect('/posts/contact/tomorrow');
  });
});

module.exports = router;
