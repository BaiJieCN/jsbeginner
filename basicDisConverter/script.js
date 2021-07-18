(function(){
    'use strict';
    const h1Tag = document.querySelector('h1');
    const answerTag = document.getElementById('answer');
    const formTag = document.getElementById('convert');
    const btn = document.getElementById('btn');
    
    var intro = document.querySelector("p");
    var m2k = true;
    var outNum;
    
    btn.addEventListener('click', function(event){
        event.preventDefault();
        if (m2k) {
            m2k = false
            h1Tag.innerHTML = "Kilometers to Miles Converter"
        } else {
            m2k = true
            h1Tag.innerHTML = "Miles to Kilometers Converter"

        }
    })

    document.addEventListener('keydown', function(event){
        var keyPressed = event.code
        if (keyPressed === 'KeyK') {
            m2k = false;
            h1Tag.innerHTML = "Kilometers to Miles Converter";
            intro.innerHTML = "Type in a number of Kilometers and click the button to convert the distance to Miles."
        } else {
            m2k = true;
            h1Tag.innerHTML = "Miles to Kilometers Converter";
            intro.innerHTML = "Type in a number of Miles and click the button to convert the distance to Kilometers."
        }
        

    })




    formTag.addEventListener('submit', function(event){
        event.preventDefault();
        var inputNum = parseFloat(document.getElementById('distance').value)
        if (inputNum) {
            if (m2k) {
                // outNum = Math.round(inputNum * 1.609334 * 1000) / 1000
                outNum = (inputNum * 1.609334).toFixed(3)
                // answerTag.innerHTML = `<span style='color: red;'>${inputNum} Miles convert to ${outNum} KMs</span>`
                answerTag.innerHTML = `${inputNum} Miles convert to ${outNum} KMs</span>`
            } else {
                outNum = (inputNum / 1.609334).toFixed(3) 
                // answerTag.innerHTML = `<span style='color: red;'>${inputNum} KMs convert to ${outNum} Miles</span>`
                answerTag.innerHTML = `${inputNum} KMs convert to ${outNum} Miles</span>`
            }
        } else {
            alert('pls input a number')
        }
    })
})()