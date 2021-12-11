'use strict';
const ANSWER_HASH = new Array(
    "762069bc07a6e1b5df123a5ae7bd91c10daa04694fbaa17fba0cd6a8dcce8f22",
    "99d4485651d022b6da61f8d65ac53a30d6fe654717c35a8b524dbc735c92fe9f",
    "",
    "",
    "4e8864c22ba726792a4abe27866ca9ba0866750089bb7a929ce61e85dc5fa8a2"
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
            nextQuestion.getElementsByClassName('question')[0].src = 'img/card_back.png';
            nextQuestion.animate([{opacity: '0'}, {opacity: '1'}], {duration: 1000, fill: "both"});
        }
    }
    else{
        thisQuestion.getElementsByClassName('response')[0].textContent = "不正解";
    }
}