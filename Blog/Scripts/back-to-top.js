// 当网页向下滑动 20px 出现"返回顶部" 按钮
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {console.log(121);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top-button").style.display = "block";
    } else {
        document.getElementById("back-to-top-button").style.display = "none";
    }
}
 
// 点击按钮，返回顶部
var click_judge = document.getElementById("back-to-top-button");
click_judge.onclick = function(){topFunction()};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}