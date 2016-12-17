var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//Schema 선언
var schema = new Schema({
    //데이터 생성, require:변경시에 반드시 필요한 부분
    email : {type : String, require : true, trim : true},
    title : {type : String, require : true, trim : true},
    content : {type : String, require : true, trim : true},
    password : {type : String, require : true},

    //값이 주어지지 않으면 현재시간을 기본값으로
    createdAt : {type: Date, default : Date.now},
    //default : 0 초기값 0
    read : {type : Number, default : 0}
    }, {
  toJSON: {virtuals: true},
  toObject: {virtuals: true}
});

//Model 선언
var Post = mongoose.model('Post', schema);
module.exports = Post;