var input = document.getElementsByTagName('input');
input[0].addEventListener('focus', function(e){
    // console.log('input');
    var anser = document.getElementsByClassName('anser');
    anser[0].innerHTML = e.target.value;
});
