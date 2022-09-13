window.onscroll = function() {myFunction()};

function myFunction() {
  console.log(document.documentElement.scrollTop);
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementsByClassName("nav")[0].style.top=0;
  }
  else {document.getElementsByClassName("nav")[0].style.top=null}

}