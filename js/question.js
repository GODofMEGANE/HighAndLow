//　 |＿l__ 　　L__/ 　　￣￣ﾌ 　|ニﾆ|　 ￣￣ﾌ　  .┼─‐　　ヽ　　||　
//￣|　　 ）　/ヽ / ヽ　　 ￣ヽ　　|ニﾆ|　 　 ￣ヽ　　|　 __|　 　||　
//　|　　　　ヽ_/　_ノ　　＿ノ 　 丿 |__,　Ｑ_ノ   ノ （_ノ＼　　o　


'use strict';
const ANSWER_HASH = new Array(
    "c884a2af4f0ab6fe08b2d7158ec3359fd880c779f238728914dd2a72823a65b2",
    "e9de08263f4ad49131d3dd1dc28694d26baa1e9c3033f39a4885d7690b06d5b3",
    "4a41357c7d510b4fc7cee057b0e9452a3548217c91264dca9200e6de5e77721f",
    "e81dfe69841ad2f7b5790b63e998f0febaf3b29acd732881975130761b98e2c7",
    "599f8341fe3e0fd23de7d89500b8224965ab536307049a175bcd30331d0918c5",
    "5944ae849448011ca08c3785f1de1a54c8a96d6c23f787f9d962b624edd4151d",
    "31611159e7e6ff7843ea4627745e89225fc866621cfcfdbd40871af4413747cc",
    "6ef7c9b15ecdd69083724b84cfdc2100351963488b51b4ea2fcbddf493fbec94"
);

async function sha256(str) {
    const encoder = new TextEncoder('utf-8');
    const strBuffer = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', strBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((value) => value.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

function kanaToHira(str) {
    return str.replace(/[\u30a1-\u30f6]/g, function(match) {
        var chr = match.charCodeAt(0) - 0x60;
        return String.fromCharCode(chr);
    });
}

function turnCard(question) {
    var thisQuestion = document.getElementById('set'+question.toString());
    thisQuestion.getElementsByClassName('question')[0].className = "surface";
}

async function onClick(question) {
    var thisQuestion = document.getElementById('set'+question.toString());
    var nextQuestion = document.getElementById('set'+(question+1).toString());
    if(await sha256(kanaToHira(thisQuestion.getElementsByClassName('answer')[0].value.toLowerCase())) == ANSWER_HASH[question-1]){
        if(question == 8){
            window.location.href = document.getElementById('a8').value.toLowerCase()+'.html';
        }
        thisQuestion.getElementsByClassName('response')[0].textContent = "正解";
        if(nextQuestion.style.visibility != 'visible'){
            nextQuestion.style.visibility = 'visible';
            nextQuestion.scrollIntoView({behavior: "smooth"});
            nextQuestion.animate([{opacity: '0'}, {opacity: '1'}], {duration: 1000, fill: "both"});
        }
    }
    else{
        if(question == 8 && await sha256(kanaToHira(thisQuestion.getElementsByClassName('answer')[0].value.toLowerCase())) == "6c1ff09db3a73dc4a854f695d20d174a848d55f2d743bab2ee1f8fc75be454f3"){
            window.location.href = document.getElementById('a8').value.toLowerCase()+'.html';
            thisQuestion.getElementsByClassName('response')[0].textContent = "...";
        }
        else{
            thisQuestion.getElementsByClassName('response')[0].textContent = "不正解";
        }
    }
}