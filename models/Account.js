const mongoose=require('mongoose');

const Schema = mongoose.Schema; //스키마 생성

const Account = new Schema({
    isAdmin: {type: Number, default: 0},//관리자 번호 
    id: String, //아이디
    password: String, //비밀번호
    name: String, //닉네임
    point: Number, //포인트
    basket: String,//장바구니
    bank:String,//계좌 은행
    accountNum: Number,//계좌번호
    createdAt:{type:Date,default:Date.now}//계정 생성날짜
});

module.exports = mongoose.model("Account", Account);