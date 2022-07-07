var target_str = "忍者CODE";
function ninja_judge(str) {
    if(str.match(target_str))
    {
        alert('含む');
    }
}
// ninja_judge("あいうえお");
// ninja_judge("忍者CODE");
// ninja_judge("忍者コード");
// ninja_judge("おはよう忍者CODE");
// ninja_judge("おはよう忍者CODEこんにちは");