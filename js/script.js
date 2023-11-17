setTimeout(function(){
    odometer.innerHTML = '1130';
},30)

const box = document.getElementById('bar3');

box.innerHTML =
  '<object width="100%" height="100%" type="text/html" data="../bar3.html"</object>';


const map = document.getElementById('map');

map.innerHTML =
  '<object width="100%" height="100%" type="text/html" data="../map.html"</object>';

  
const col = document.getElementById('column');

col.innerHTML =
  '<object width="100%" height="100%" type="text/html" data="../column.html"</object>';
