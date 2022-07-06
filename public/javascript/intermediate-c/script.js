var list = document.getElementsByClassName('list');
var items = list[0].getElementsByTagName('li');
var max_height = 0;
for(var i = 0; i < items.length; i++) {
    if(max_height < items[i].clientHeight)
    {
        max_height = items[i].clientHeight;
    }
}
console.log('最大の高さ：' + max_height);
for(var i = 0; i < items.length; i++) {
    items[i].style.height = max_height+'px';    
}

