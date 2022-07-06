var ul = document.getElementsByTagName('ul');
var list = ul[0].getElementsByTagName('li');
addEventListener('click', function(e){
    if(getComputedStyle(e.target).backgroundColor == "rgb(255, 0, 0)") {
        e.target.style.backgroundColor = "rgb(0, 0, 255)";
    }
});
