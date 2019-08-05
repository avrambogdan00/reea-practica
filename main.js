//index.html

window.addEventListener('load', function(event) {
var baseExist = false;
  var ing = [0, 0, 0, 0];

function updateHI(value) {
  for(var i=0; i<ing.length; i++) {
      if(ing[i] == 0) {
        ing[i] = value;
        var src = document.getElementById('i'+(i+1));

        var input = document.getElementsByName('i'+(i+1));
        input[0].value = value;
        console.log(value); 

        break;
      }
  }
}
  function alc() {
    if (document.cookie == '') {
      d = new Date();
      document.cookie = 'over18=;expires=' + d.getTime() + 2592000000;
    }
    var cbox = document.getElementById('alcohol');
    var inp = document.getElementById('alc-range');
    var btn = document.getElementsByClassName('btn');
    var v = document.getElementById('slider-value');
    if (cbox.checked == true) {
      if(document.cookie == 'over18=' || document.cookie == 'over18=false') {
        var r = confirm("Press OK if you are 18+");
        if(r == true) {
          inp.style.display = 'inline';
          btn[0].style.display = 'inline';
          v.style.display = 'inline';
          document.cookie = 'over18=true';
        } else {
          cbox.checked = false;
        }
      } else if (document.cookie == 'over18=true') {
        inp.style.display = 'inline';
        btn[0].style.display = 'inline';
        v.style.display = 'inline';
      }
    } else{
      inp.style.display = 'none';
      btn[0].style.display = 'none';
      v.style.display = 'none';
    }
  }

  function checkforerorrs(){
    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    if(queryString == 'e') {
      document.getElementById('err').style.display = 'block';
    }
  }

  carousel = (function(){
    var box = document.querySelector('.car');
    var next = box.querySelector('.next');
    var prev = box.querySelector('.prev');
    var items = box.querySelectorAll('.content li');
    var counter = 0;
    var amount = items.length;
    var current = items[0];
    box.classList.add('active');
    function navigate(direction) {
      current.classList.remove('current');
      counter = counter + direction;
      if (direction === -1 &&
      counter < 0) {
        counter = amount - 1;
      }
      if (direction === 1 &&
      !items[counter]) {
        counter = 0;
      }
      current = items[counter];
      current.classList.add('current');
      updateHI(counter);
    }
    next.addEventListener('click', function(ev) {
      navigate(1);
    });
    prev.addEventListener('click', function(ev) {
      navigate(-1);
    });
    navigate(0);
  })();


  checkforerorrs();
});
