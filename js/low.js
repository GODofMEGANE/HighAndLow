'use strict';
const ANSWER_HASH = new Array(
    "762069bc07a6e1b5df123a5ae7bd91c10daa04694fbaa17fba0cd6a8dcce8f22",
    "99d4485651d022b6da61f8d65ac53a30d6fe654717c35a8b524dbc735c92fe9f",
    "89d6d51a3884f58648775b7e829dd0b916657fed59060ad8c54e2cfa348f6337",
    "cef7e4b1dd35429cb99e930929fbfe9cf4a5cb2dc1db33e664c25afd489a70dc",
    "430a69770099e3bf1c41cadbc53017ff540cb1dddcaae350e584232b202e87bf"
);

$(function() {
	setTimeout(function(){
		$('.logo_fadein p').fadeIn(1000);
	},500);
	setTimeout(function(){
		$('.logo_fadein').fadeOut(1000);
	},2500);
});

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

window.onload = function(){
    if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)){
        document.getElementById('q4').src = "question/EX4-1.png";
    }else{
        document.getElementById('q4').src = "question/EX4-2.png";
    }
}

function turnCard(question) {
    var thisQuestion = document.getElementById('set'+question.toString());
    thisQuestion.getElementsByClassName('question')[0].className = "surface";
}

async function onClick(question) {
    var thisQuestion = document.getElementById('set'+question.toString());
    var nextQuestion = document.getElementById('set'+(question+1).toString());
    if(await sha256(kanaToHira(thisQuestion.getElementsByClassName('answer')[0].value.toLowerCase())) == ANSWER_HASH[question-1]){
        if(question == 5){
            window.location.href = kanaToHira(document.getElementById('a5').value.toLowerCase())+'.html';
        }
        thisQuestion.getElementsByClassName('response')[0].textContent = "正解";
        if(nextQuestion.style.visibility != 'visible'){
            nextQuestion.style.visibility = 'visible';
            nextQuestion.scrollIntoView({behavior: "smooth"});
            nextQuestion.animate([{opacity: '0'}, {opacity: '1'}], {duration: 1000, fill: "both"});
        }
    }
    else{
        thisQuestion.getElementsByClassName('response')[0].textContent = "不正解";
    }
}