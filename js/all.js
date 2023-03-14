var currentstyle = -1;
function showStyle(){
    var i = getCookie("currentstyle");
    currentstyle = i;
        if (i == ""||i === "0") {//蓝色，默认
            loadjscssfile("css/navigation_blue.css", "css")
        } else if (i === "1") {//黑色
            loadjscssfile("css/navigation_black.css", "css")
        } else if (i === "2") {//红色
            loadjscssfile("css/navigation_red.css", "css")
        } else if (i === "3") {//绿色
            loadjscssfile("css/navigation_green.css", "css")
        } else if (i === "4") {//黄色
            loadjscssfile("css/navigation_yellow.css", "css")
        } else if (i === "99") {//Bing
            loadjscssfile("css/navigation_bing.css", "css")
        } else return;
    
}

function changeStyle(type) {
    if (currentstyle == type) return;
    $("body").removeAttr("style"); 
    if (type == 0) {//蓝色，默认
        $("body").css("background-color","#3c9bff");
        loadjscssfile("css/navigation_blue.css", "css")
        removejscssfile("css/navigation_black.css", "css")
        removejscssfile("css/navigation_red.css", "css")
        removejscssfile("css/navigation_green.css", "css")
        removejscssfile("css/navigation_yellow.css", "css")
        removejscssfile("css/navigation_bing.css", "css")
    } else if (type == 1) {//黑色
        $("body").css("background-color","#2f2f2f");
        loadjscssfile("css/navigation_black.css", "css")
        removejscssfile("css/navigation_red.css", "css")
        removejscssfile("css/navigation_blue.css", "css")
        removejscssfile("css/navigation_green.css", "css")
        removejscssfile("css/navigation_yellow.css", "css")
        removejscssfile("css/navigation_bing.css", "css")
    } else if (type == 2) {//红色
        $("body").css("background-color","#ff3c3c");
        loadjscssfile("css/navigation_red.css", "css")
        removejscssfile("css/navigation_blue.css", "css")
        removejscssfile("css/navigation_black.css", "css")
        removejscssfile("css/navigation_green.css", "css")
        removejscssfile("css/navigation_yellow.css", "css")
        removejscssfile("css/navigation_bing.css", "css")
    } else if (type == 3) {//绿色
        $("body").css("background-color","#0dacb1");
        loadjscssfile("css/navigation_green.css", "css")
        removejscssfile("css/navigation_blue.css", "css")
        removejscssfile("css/navigation_black.css", "css")
        removejscssfile("css/navigation_red.css", "css")
        removejscssfile("css/navigation_yellow.css", "css")
        removejscssfile("css/navigation_bing.css", "css")
    } else if (type == 4) {//黄色
        $("body").css("background-color","#FFC107");
        loadjscssfile("css/navigation_yellow.css", "css")
        removejscssfile("css/navigation_green.css", "css")
        removejscssfile("css/navigation_blue.css", "css")
        removejscssfile("css/navigation_black.css", "css")
        removejscssfile("css/navigation_red.css", "css")
        removejscssfile("css/navigation_bing.css", "css")
    }else if (type == 99) {//Bing
        $("body").css("background-color","#ABABAB");
        $("body").css("background-image","url(https://api.ixiaowai.cn/gqapi/gqapi.php)");
        $("body").css("background-position","center");
        $("body").css("background-size","cover");
        $("body").css("background-repeat","no-repeat");
        loadjscssfile("css/navigation_bing.css", "css")
        removejscssfile("css/navigation_green.css", "css")
        removejscssfile("css/navigation_blue.css", "css")
        removejscssfile("css/navigation_black.css", "css")
        removejscssfile("css/navigation_red.css", "css")
        removejscssfile("css/navigation_yellow.css", "css")
    }else return;
    setCookie("currentstyle", type);
    currentstyle = type;
}

//添加一个css
function loadjscssfile(filename, filetype) {
    if (filetype == "js") {
        var fileref = document.createElement('script')
        fileref.setAttribute("type", "text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype == "css") {
        var fileref = document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref != "undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)

}

//移动已经加载过的js/css
function removejscssfile(filename, filetype) {
    var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none"
    var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none"
    var allsuspects = document.getElementsByTagName(targetelement)
    for (var i = allsuspects.length; i >= 0; i--) {
        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1)
            allsuspects[i].parentNode.removeChild(allsuspects[i])
    }
}

//设置cookies
function setCookie(name, value) {
    var Days = 365;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    //alert(value+ name + "=" + escape(value) + ";expires=" + exp.toGMTString());
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
//获取cookies
function getCookie(Name) {
    var search = Name + "="//查询检索的值
    var returnvalue = "";//返回值
    if (document.cookie.length > 0) {
        sd = document.cookie.indexOf(search);
        //alert("ss");
        if (sd != -1) {
            sd += search.length;
            end = document.cookie.indexOf(";", sd);

            if (end == -1)
                end = document.cookie.length;
            //unescape() 函数可对通过 escape() 编码的字符串进行解码。
            //alert(document.cookie.substring(sd, end));
            returnvalue = unescape(document.cookie.substring(sd, end));
        }
    }
    return returnvalue;
}


