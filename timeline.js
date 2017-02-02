
          function revealMessage() {
      document.getElementById("hiddenMessage").style.display = 'block';
  }    
            
     CountDownTimer('06/22/2017 03:00 PM', 'countdown');
    CountDownTimer('06/24/2017 09:40 AM', 'newcountdown');

    function CountDownTimer(dt, id)
    {
        var end = new Date(dt);

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            if (distance < 0) {

                clearInterval(timer);
                document.getElementById(id).innerHTML = 'EXPIRED!';

                return;
            }
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);

            document.getElementById(id).innerHTML = days + 'days ';
            document.getElementById(id).innerHTML += hours + 'hrs ';
            document.getElementById(id).innerHTML += minutes + 'mins ';
            document.getElementById(id).innerHTML += seconds + 'secs';
        }

        timer = setInterval(showRemaining, 1000);
    }
          
       function RevealMessage() {
      document.getElementById("HiddenMessage").style.display = 'block';
  }    
            
     CountDownTimer('06/22/2017 03:00 PM', 'countDown_2');
    CountDownTimer('06/24/2017 09:40 AM', 'newcountDown_2');

    function CountDownTimer(dt, id)
    {
        var end = new Date(dt);

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            if (distance < 0) {

                clearInterval(timer);
                document.getElementById(id).innerHTML = 'EXPIRED!';

                return;
            }
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);

            document.getElementById(id).innerHTML = days + 'days ';
            document.getElementById(id).innerHTML += hours + 'hrs ';
            document.getElementById(id).innerHTML += minutes + 'mins ';
            document.getElementById(id).innerHTML += seconds + 'secs';
        }

        timer = setInterval(showRemaining, 1000);
    }


      function RevealMessage_2() {
      document.getElementById("HiddenMessage_2").style.display = 'block';
  }   

  function RevealMessage_3() {
      document.getElementById("HiddenMessage_3").style.display = 'block';
  }   

  function RevealMessage_4() {
      document.getElementById("HiddenMessage_4").style.display = 'block';
  }   

 function RevealMessage_5() {
      document.getElementById("HiddenMessage_5").style.display = 'block';
  }  