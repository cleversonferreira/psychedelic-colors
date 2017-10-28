setInterval(function() {

  function genColor(type){
    return ((type == 'border') ? '5px solid #' : '#') + Math.floor(Math.random() * 999999);
  }

  document.getElementsByTagName('body')[0].style.backgroundColor = genColor('color');
  document.getElementById('ball').style.backgroundColor = genColor('color');
  document.getElementById('ball').style.border = genColor('border');
  document.getElementById('ball2').style.backgroundColor = genColor('color');
  document.getElementById('ball2').style.border = genColor('border');

}, 100);