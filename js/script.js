window.onscroll = function() {myFunction()};


function myFunction() {
  let scrollValue=(document.getElementsByClassName("nav")[0]).offsetTop;
  if (document.body.scrollTop > 34 || document.documentElement.scrollTop > scrollValue ) {
    document.getElementsByClassName("nav")[0].style.top=0;
  }
  else {document.getElementsByClassName("nav")[0].style.top=null}
  localStorage.setItem('scroll', JSON.stringify(document.documentElement.scrollTop));

}

window.onload=function(){
 let original = JSON.parse(localStorage.getItem('scroll'));
 if (scroll > 34 ) {
  document.getElementsByClassName("nav")[0].style.top=0;
}
else {document.getElementsByClassName("nav")[0].style.top=null}
}