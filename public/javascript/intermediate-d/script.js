var list = document.getElementsByClassName('list');
var items = list[0].getElementsByTagName('li');
for(var i = 0; items.length > i; i++) {
    console.log(i);
    items[i].addEventListener('click', function(event){
        // console.log(event.target.innerHTML);
        alert(event.target.innerHTML);
    });
}
