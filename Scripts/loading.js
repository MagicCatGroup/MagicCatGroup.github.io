window.onload = function() //窗口打开即开始加载
{
    var num = document.getElementById("num");
    var width = 0;
    var id = setInterval(frame,40); //定义id，用40毫秒调用frame的值,这里的时间和进度条span填充有关，当百分比为加到100时，颜色填充完毕。
    function frame () {
        if (width>=100) {
            clearInterval(id)  //判断，如果宽度大于或等于100，清除
        } else{
            width++;
            num.innerHTML = width * 1 + "%" //在网页中写出百分比的值
        }
    }
}