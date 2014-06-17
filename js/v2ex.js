// var search_engine = new Array(
// 		"baidu","bing","duckduckgo","360");

// var flag = true;
// for (var i = 0; i < search_engine.length; i++) {
// 	if(currentURL.indexOf(do_not_inject_page[i]) != -1){
// 		flag = false;
// 		return;
// 	}
// }


$(document).ready(function(){  
	
	$("#Search form").click(function() {
		$("#Search form").removeAttr("onsubmit");
	});
	$("#Search form").submit(function()
    {
       var q = document.getElementById("q");
	    if (q.value != "") {
	        var url = 'http://cn.bing.com/search?q='+q.value+'+site%3Av2ex.com';
	        if (navigator.userAgent.indexOf('iPad') > -1 || navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPhone') > -1) {
	            location.href = url;
	        } else {
	            window.open(url, "_blank");
	        }
	        return false;
	    } else {
	        return false;
    	}
    });
});  

// http://www.baidu.com/s?wd='+q.value+'+site%3Av2ex.com
// http://www.so.com/s?q=%E8%AE%BE%E8%AE%A1+site%3Av2ex.com
// http://cn.bing.com/search?q=%E8%AE%BE%E8%AE%A1+site%3Av2ex.com
// https://duckduckgo.com/?q=%E8%AE%BE%E8%AE%A1+site%3Av2ex.com

// event.returnValue is deprecated. Please use the standard event.preventDefault() instead.