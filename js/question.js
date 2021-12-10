'use strict';

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

async function onClick(question) {
    if (question == 1) {
        if(await sha256(kanaToHira(document.getElementById('a1').value)) == "c884a2af4f0ab6fe08b2d7158ec3359fd880c779f238728914dd2a72823a65b2"){
            document.getElementById('r1').textContent = "正解";
            var nextQuestion = document.getElementById('set2');
            if(nextQuestion.style.opacity == 0){
                nextQuestion.style.visibility = 'visible';
                nextQuestion.scrollIntoView({behavior: "smooth"});
                nextQuestion.animate([{opacity: '0'}, {opacity: '1'}], 1000);
                nextQuestion.style.opacity = 1;
            }
        }
        else{
            document.getElementById('r1').textContent = "不正解";
        }
    }
    if (question == 2) {
        if(await sha256(document.getElementById('a2').value.toLowerCase()) == "e9de08263f4ad49131d3dd1dc28694d26baa1e9c3033f39a4885d7690b06d5b3"){
            document.getElementById('r2').textContent = "正解";
            var nextQuestion = document.getElementById('set3');
            if(nextQuestion.style.opacity == 0){
                nextQuestion.style.visibility = 'visible';
                nextQuestion.scrollIntoView({behavior: "smooth"});
                nextQuestion.animate([{opacity: '0'}, {opacity: '1'}], 1000);
                nextQuestion.style.opacity = 1;
            }
        }
        else{
            document.getElementById('r2').textContent = "不正解";
        }
    }
    if (question == 3) {
        if(await sha256(kanaToHira(document.getElementById('a3').value)) == "4a41357c7d510b4fc7cee057b0e9452a3548217c91264dca9200e6de5e77721f"){
            document.getElementById('r3').textContent = "正解";
            var nextQuestion = document.getElementById('set4');
            if(nextQuestion.style.opacity == 0){
                nextQuestion.style.visibility = 'visible';
                nextQuestion.scrollIntoView({behavior: "smooth"});
                nextQuestion.animate([{opacity: '0'}, {opacity: '1'}], 1000);
                nextQuestion.style.opacity = 1;
            }
        }
        else{
            document.getElementById('r3').textContent = "不正解";
        }
    }
    if (question == 4) {
        if(await sha256(document.getElementById('a4').value.toLowerCase()) == "e81dfe69841ad2f7b5790b63e998f0febaf3b29acd732881975130761b98e2c7"){
            document.getElementById('r4').textContent = "正解";
            var nextQuestion = document.getElementById('set5');
            if(nextQuestion.style.opacity == 0){
                nextQuestion.style.visibility = 'visible';
                nextQuestion.scrollIntoView({behavior: "smooth"});
                nextQuestion.animate([{opacity: '0'}, {opacity: '1'}], 1000);
                nextQuestion.style.opacity = 1;
            }
        }
        else{
            document.getElementById('r4').textContent = "不正解";
        }
    }
    if (question == 5) {
        if(await sha256(document.getElementById('a5').value.toLowerCase()) == "599f8341fe3e0fd23de7d89500b8224965ab536307049a175bcd30331d0918c5"){
            document.getElementById('r5').textContent = "正解";
            var nextQuestion = document.getElementById('set6');
            if(nextQuestion.style.opacity == 0){
                nextQuestion.style.visibility = 'visible';
                nextQuestion.scrollIntoView({behavior: "smooth"});
                nextQuestion.animate([{opacity: '0'}, {opacity: '1'}], 1000);
                nextQuestion.style.opacity = 1;
            }
        }
        else{
            document.getElementById('r5').textContent = "不正解";
        }
    }
    if (question == 6) {
        if(await sha256(document.getElementById('a6').value.toLowerCase()) == "5944ae849448011ca08c3785f1de1a54c8a96d6c23f787f9d962b624edd4151d"){
            document.getElementById('r6').textContent = "正解";
            var nextQuestion = document.getElementById('set7');
            if(nextQuestion.style.opacity == 0){
                nextQuestion.style.visibility = 'visible';
                nextQuestion.scrollIntoView({behavior: "smooth"});
                nextQuestion.animate([{opacity: '0'}, {opacity: '1'}], 1000);
                nextQuestion.style.opacity = 1;
            }
        }
        else{
            document.getElementById('r6').textContent = "不正解";
        }
    }
    if (question == 7) {
        if(await sha256(document.getElementById('a7').value.toLowerCase()) == "31611159e7e6ff7843ea4627745e89225fc866621cfcfdbd40871af4413747cc"){
            document.getElementById('r7').textContent = "正解";
            var nextQuestion = document.getElementById('set8');
            if(nextQuestion.style.opacity == 0){
                nextQuestion.style.visibility = 'visible';
                nextQuestion.scrollIntoView({behavior: "smooth"});
                nextQuestion.animate([{opacity: '0'}, {opacity: '1'}], 1000);
                nextQuestion.style.opacity = 1;
            }
        }
        else{
            document.getElementById('r7').textContent = "不正解";
        }
    }
    if (question == 8) {
        if(await sha256(document.getElementById('a8').value.toLowerCase()) == "8f90d85ec13a0b1b12d81203f2f3262ca156028a94aeaf91ae52fcd5a9de4170"){
            document.getElementById('r8').textContent = "正解";
            window.location.href = 'https://godofmegane.github.io/HighAndLow/'+document.getElementById('a8').value.toLowerCase()+'.html';
        }
        else{
            document.getElementById('r6').textContent = "不正解";
        }
    }
}