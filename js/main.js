document.getElementById('time').innerHTML = new Date().toLocaleTimeString();
function pink() {
  document.body.style.backgroundColor = 'pink';
}

function lightblue() {
  document.body.style.backgroundColor = 'lightblue';
}
function yellow() {
  document.body.style.backgroundColor = 'yellow';
}
function reset() {
  document.body.style.backgroundColor = 'linen';
}

function showhtml() {
  document.getElementById('fig').src = 'img/강쥐.jpeg';
  document.getElementById('desc').innerHTML =
    '<b>강쥐</b>는 귀여운 강아지입니다.';
}

function showcss() {
  document.getElementById('fig').src = 'img/고냥이.jpeg';
  document.getElementById('desc').innerHTML =
    '<b>고냥이</b>는 귀여운 고양이입니다.';
}

function showjs() {
  document.getElementById('fig').src = 'img/구구구.jpeg';
  document.getElementById('desc').innerHTML = '<b>비둘기</b>는 구구구입니다. ';
}

function hide() {
  document.getElementById('fig').src = '';
  document.getElementById('desc').innerHTML = '';
}
