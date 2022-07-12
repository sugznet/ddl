var xscroll = document.getElementsByClassName('x-scroll');
xscroll[0].addEventListener('scroll', function(e){
    // console.log(e.target.scrollLeft);
    var val = document.getElementsByClassName('scroll-val');
    val[0].innerHTML = e.target.scrollLeft;
});
