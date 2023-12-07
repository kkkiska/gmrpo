var ball = document.querySelectorAll('.heart-item')
console.log(ball);
var wewe = document.querySelector('.wewe');
// var hihu = document.querySelector('.hihu');


for (let i = 0; i < ball.length; i++) {
  ball[i].style.backgroundColor = "rgb(" + Math.round(255.0*Math.random()) + ', 100,' + Math.round(255.0*Math.random()) + ')';
  ball[i].onmousedown = function(e) {

    var coords = getCoords(ball[i]);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
    let a = getCoords(wewe);
    console.log(a.top);
    // hihu.style.left = a.left + 'px';
    // hihu.style.top = a.top + 'px';
    // document.body.appendChild(ball);
    moveAt(e);
  
    // ball[i].style.zIndex = 1000; // над другими элементами
  
    function moveAt(e) {
      ball[i].style.position = 'absolute';
      ball[i].style.zIndex = '1000'
      ball[i].style.left = e.pageX - shiftX + 'px';
      ball[i].style.top = e.pageY - shiftY + 'px';
    }
  
    document.onmousemove = function(e) {
      moveAt(e);
    };
  
    ball[i].onmouseup = function() {
      ball[i].style.zIndex = '2'
      var coords = getCoords(ball[i]);
      let a = getCoords(wewe);
      let b = getCoords(document.querySelector('#sec'))
      let c = getCoords(document.querySelector('#third'))
      let d = getCoords(document.querySelector('#fourth'))
      let e = getCoords(document.querySelector('#fifth'))
      document.onmousemove = null;
      ball[i].onmouseup = null;
      if (coords.left < a.left) {
        ball[i].style.position = 'static';
        document.querySelector('#first').insertAdjacentElement('beforeend', ball[i]);
      }
      if (coords.left > a.left && coords.left < b.left) {
        console.log ('true');
        ball[i].style.position = 'static';
        wewe.insertAdjacentElement('beforeend', ball[i]);
      }
      if (coords.left > b.left && coords.left < c.left) {
         ball[i].style.position = 'static';
         document.querySelector('#sec').insertAdjacentElement('beforeend', ball[i]);
      }
      if (coords.left > c.left && coords.left < d.left) {
         ball[i].style.position = 'static';
         document.querySelector('#third').insertAdjacentElement('beforeend', ball[i]);
      }
      if (coords.left > d.left && coords.left < e.left) {
        ball[i].style.position = 'static';
        document.querySelector('#fourth').insertAdjacentElement('beforeend', ball[i]);
      }
      if (coords.left > e.left) {
        ball[i].style.position = 'static';
        document.querySelector('#fifth').insertAdjacentElement('beforeend', ball[i]);
      }
    };
  
  }
  
  ball[i].ondragstart = function() {
    return false;
  };
  
  function getCoords(elem) {   // кроме IE8-
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }
}
