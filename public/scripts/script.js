
var mybutton = document.querySelector("#myBtn");

var counters = document.querySelectorAll(".count");
var speed = 200;

counters.forEach(counter => {
  const updateCount = () =>{
    const target = +counter.getAttribute('data-target');

    const count = +counter.innerText;

    const inc = target / speed;

    console.log(count);

    
    if(count < target){
      counter.innerText = count+inc;
      setTimeout(updateCount,1);

    }else{
      count.innerText = target;
    }
  }

  updateCount();
})


      window.onscroll = function(){
        console.log(document.body.scrollTop)
        if(document.body.scrollTop > 30 ){
          mybutton.style.display = "block";
        }else{
          mybutton.style.display = "none";
        }
      }

      function topFunction(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
