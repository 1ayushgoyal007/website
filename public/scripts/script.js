
      mybutton = document.querySelector("#myBtn");
      console.log(mybutton);
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