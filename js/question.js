'use strict';

async function sha256(text){
    const uint8  = new TextEncoder().encode(text)
    const digest = await crypto.subtle.digest('SHA-256', uint8)
    return Array.from(new Uint8Array(digest)).map(v => v.toString(16).padStart(2,'0')).join('')
}

function onClick(question) {
    console.log("回答");
    if (question == 1) {
        if(document.getElementById('a1').value == "test"){
            console.log("正解");
            document.getElementById('r1').textContent = "正解";
        }
        else{
            console.log("不正解");
            document.getElementById('r1').textContent = "不正解";
        }
    }
  }