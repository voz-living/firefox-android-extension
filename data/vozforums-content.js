// restore window.console;
var i = document.createElement('iframe');i.style.display = 'none';document.body.appendChild(i);window.console = i.contentWindow.console
try{
    var tw = document.createTreeWalker(document, NodeFilter.SHOW_COMMENT, null, null), cmtNode;
    var _commentNodes = {};
    while(cmtNode = tw.nextNode()){
        _commentNodes[cmtNode.textContent] = cmtNode;
    }
    // -----
    var $ = document.querySelector;
    var $$ = document.querySelectorAll;
    var $c = (cmt, ePos = "next") => {
        var cmtNode = _commentNodes[cmt];
        if(cmtNode){
            if(ePos == "next"){
                return cmtNode.nextElementSibling
            }else{
                return cmtNode.previousElementSibling
            }
        }else{
            return null;
        }
    }

    console.log("VOZ Living Plugin", location.href);
    // console.log($("head").length);
    $("head").innerHTML+= '<meta name="viewport" content="width=device-width, initial-scale=1">';

    // console.log($$("[id^=div-gpt-ad]").length);
    Array.prototype.forEach.call($$("[id^=div-gpt-ad]"), (a) => a.remove())

    // console.log($$("[id^=google_ads_div]").length);
    Array.prototype.forEach.call($$("[id^=google_ads_div]"), (a) => a.remove())

    // console.log($$(".middleads").length);
    Array.prototype.forEach.call($$(".middleads"), (a) => a.remove())

    // console.log($$("#pagenav_menu + div > table > tbody > tr > td:nth-child(2)").length);
    $("#pagenav_menu + div > table > tbody > tr > td:nth-child(2)").remove()

    // $(".page").style.display = "none";
    $("form > div > .clearfix").style.minWidth = "100%";

    console.log($(".page").style.display);
}catch(e){
    console.log(e);
}
console.log("END");
