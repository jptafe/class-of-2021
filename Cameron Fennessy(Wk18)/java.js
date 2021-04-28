function swapBoxes1() {
    console.log('test one')
    if(document.getElementById('one').style.backgroundColor == 'red') {
        console.log('Hello Red')
        document.getElementById('one').style.backgroundColor = 'blue';
        document.getElementById('two').style.backgroundColor = 'red';
        document.getElementById('three').style.backgroundColor = 'green';
    }else if(document.getElementById('one').style.backgroundColor == 'blue') {
        console.log('Hello Blue')
        document.getElementById('one').style.backgroundColor = 'green';
        document.getElementById('two').style.backgroundColor = 'blue';
        document.getElementById('three').style.backgroundColor = 'red';
    }else if(document.getElementById('one').style.backgroundColor == 'green') {
        console.log('Hello Green')
        document.getElementById('one').style.backgroundColor = 'red';
        document.getElementById('two').style.backgroundColor = 'green';
        document.getElementById('three').style.backgroundColor = 'blue';
    }
}
function swapBoxes2() {
    console.log('test two')
    if(document.getElementById('two').style.backgroundColor == 'green') {
        console.log('Hello Green')
        document.getElementById('one').style.backgroundColor = 'blue';
        document.getElementById('two').style.backgroundColor = 'red';
        document.getElementById('three').style.backgroundColor = 'green';
    }else if(document.getElementById('two').style.backgroundColor == 'red') {
        console.log('Hello Red')
        document.getElementById('one').style.backgroundColor = 'green';
        document.getElementById('two').style.backgroundColor = 'blue';
        document.getElementById('three').style.backgroundColor = 'red';
    }else if(document.getElementById('two').style.backgroundColor == 'blue') {
        console.log('Hello Blue')
        document.getElementById('one').style.backgroundColor = 'red';
        document.getElementById('two').style.backgroundColor = 'green';
        document.getElementById('three').style.backgroundColor = 'blue';
    }
}
function swapBoxes3() {
    console.log('test three')
    if(document.getElementById('three').style.backgroundColor == 'blue') {
        console.log('Hello Blue')
        document.getElementById('one').style.backgroundColor = 'blue';
        document.getElementById('two').style.backgroundColor = 'red';
        document.getElementById('three').style.backgroundColor = 'green';
    }else if(document.getElementById('three').style.backgroundColor == 'green') {
        console.log('Hello Green')
        document.getElementById('one').style.backgroundColor = 'green';
        document.getElementById('two').style.backgroundColor = 'blue';
        document.getElementById('three').style.backgroundColor = 'red';
    }else if(document.getElementById('three').style.backgroundColor == 'red') {
        console.log('Hello Red')
        document.getElementById('one').style.backgroundColor = 'red';
        document.getElementById('two').style.backgroundColor = 'green';
        document.getElementById('three').style.backgroundColor = 'blue';
    }
}
