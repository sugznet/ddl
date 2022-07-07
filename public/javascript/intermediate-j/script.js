month_judge(7);
// month_judge(3);
// month_judge(12);

function month_judge(month) {
    var now = new Date();
    if(now.getMonth() + 1 == month) {
        alert('今月の月です');
    }
    else 
    {
        alert('今月の月ではありません');
    }
}