var date = document.getElementById('birthday');
date.addEventListener('input', function(e){
    var userdate = new Date(e.target.value);
    if(userdate.getMonth() + 1 == "2")
    {
        if(userdate.getDate() == "14")
        {
            var h1 = document.getElementsByTagName('h1');
            h1[0].style.display = "unset";
        }
    }
});