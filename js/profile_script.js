/* ======================================= IE6 getElementByClassName ======================================= */
if (!document.getElementsByClassName) {
  document.getElementsByClassName = function (search) {
    var d = document, elements, pattern, i, results = [];
    if (d.querySelectorAll) { // IE8
      return d.querySelectorAll("." + search);
    }
    if (d.evaluate) { // IE6, IE7
      pattern = ".//*[contains(concat(' ', @class, ' '), ' " + search + " ')]";
      elements = d.evaluate(pattern, d, null, 0, null);
      while ((i = elements.iterateNext())) {
        results.push(i);
      }
    } else {
      elements = d.getElementsByTagName("*");
      pattern = new RegExp("(^|\\s)" + search + "(\\s|$)");
      for (i = 0; i < elements.length; i++) {
        if (pattern.test(elements[i].className)) {
          results.push(elements[i]);
        }
      }
    }
    return results;
  }
}
/* ======================================= IE6 getElementByClassName ======================================= */

/* ======================================= data resort ======================================= */
/* ===========student date ======= */
/* ====name[0],number[1],major[2],class[3] ,[4],url[5],\====*/



function data_resort() {
  data =
    "고효정,2a1,기획,A,,needleworkux.wixsite.com/portfolio,\
   김가은,2a2,기획,A,,uxfinding.wixsite.com/portfolio,\
   김다영,2a3,기획,A,,uxgizer.wixsite.com/dazero,\
   김성태,2a4,기획,A,,uxorderme.wixsite.com/portfolio,\
   김유진,2a5,기획,A,,oneinchyujin.wixsite.com/portfolio,\
   김지유,2a6,기획,A,,uxcasterjyu.wixsite.com/portfolio,\
   박규원,2a7,기획,A,,remindux.wixsite.com/portfolio,\
   박주영,2a8,기획,A,,cocoplanner.wixsite.com/portfolio,\
   박준영,2a9,기획,A,,doliux.wixsite.com/portfolio,\
   서이슬,2a10,기획,A,,icanfeelux.wixsite.com/dewseo,\
   서지은,2a11,기획,A,,reaction4you.wixsite.com/portfolio,\
   신사인,2a12,기획,A,,seeusain.wixsite.com/portfolio,\
   이유림,2a13,기획,A,,lovelyuxer.wixsite.com/portfolio,\
   이호중,2a14,기획,A,,flashuxman.wixsite.com/portfolio,\
   장해수,2a15,기획,A,,seawaterux.wixsite.com/portfolio,\
   정운재,2a16,기획,A,,runninguxer.wixsite.com/portfolio,\
   조민경,2a17,기획,A,,readyuxp1.wixsite.com/potfolio,\
   한지수,2a18,기획,A,,jiwater099.wixsite.com/portfolio,\
   황수연,2a19,기획,A,,planbear.wixsite.com/portfolio,\
   강승희,2d20,디자인,B,,www.behance.net/huisi01,\
   권태리,2d21,디자인,B,,taerikwon.cargo.site/,\
   김선경,2d22,디자인,B,,behance.net/kimseonkyung,\
   유상호,2d23,디자인,B,,gimgirin.cargo.site/,\
   정예은,2d24,디자인,B,,wnslathsu.wixsite.com/yenportfolio,\
   김현빈,2d25,디자인,B,,hb112012.wixsite.com/portfolio,\
   맹세호,2d27,디자인,C,,erer32005.wixsite.com/my-site,\
   박준영,2d28,디자인,C,,www.juneyoung.net/,\
   이수희,2d29,디자인,C,,www.behance.net/lggg199995ef,\
   이아현,2d30,디자인,C,,ahyyeon.wixsite.com/portfolioo,\
   이준후,2d31,디자인,C,,www.behance.net/joonwari,\
   정지혜,2d32,디자인,C,,jeongjihye.com,\
   정찬일,2d33,디자인,C,,chungchanil.cargo.site/Portfolio,\
   고정연,2d34,디자인,C,,looklikewater.cargo.site,\
   김인아,2d35,디자인,C,,119dlsdk.wixsite.com/my-site,\
   신지혜,2d36,디자인,C,,shinjihyeportfolio.wixsite.com/jijiss,\
   남예지,2d37,디자인,C,,www.behance.net/viviana002e05e,\
   최유경,2m38,영상,B,,cyk8978.wixsite.com/heychoi,\
   박민영,2m39,영상,C,,qkralsdud6740.wixsite.com/website-2,\
   김채영,2p40,프로그래머,D,,chyoung03.com,\
   박솔,2p41,프로그래머,D,,solpxrk.com/,\
   배정현,2p42,프로그래머,D,,WWWBAECOM.github.io/Portfolio,\
   전형욱,2p43,프로그래머,D,,dmdjhu2.dothome.co.kr/";


  // "테스트입니다,21245016,테스트,A,,kimgeonwoo.wixsite.com/portfolio,\
  //2018Ku  ex) 김초원,21761026,영상,D,,www.behance.net/allweling06ce,\ 에 있는 영상부분을 디자인, 퍼블리싱,기획 이라고 기제 하시면 가능합니다.
  //http:// 를쓰시면 스크립트에서 이미 http://+ arre 로 하는거로 나옵니다 위에 사이트에는 빼고 써주세요

  //  임시


  arr = data.split(",");
  arr2 = new Array();
  for (var i = 0; i < arr.length; i += 6) {
    var insArr = new Array();
    insArr[0] = arr[i + 0];
    insArr[1] = arr[i + 1];
    insArr[2] = arr[i + 2];
    insArr[3] = arr[i + 3];
    insArr[4] = arr[i + 4];
    insArr[5] = arr[i + 5];
    arr2.push(insArr);
  }
}
/* ======================================= data resort ======================================= */
data_resort();


var content_div = document.getElementById("content");
var JobName = "";
/* ======================================= draw stage ======================================= */
//*****
var all_tag = "";
function draw_stage() {
  for (var j = 0; j < arr2.length; j++) {
    switch (arr2[j][2]) {
      case "기획":
        JobName = "g"
        break;
      case "디자인":
        JobName = "d"
        break;
      case "프로그래머":
        JobName = "p"
        break;
      //2018Ku 
      case "영상":
        JobName = "m"
        break;
      //여기까지 지우시면 됩니다
    }
    //draw card html
    var tag = "";
    tag += "<div class='card " + JobName + "' onclick='mouseclick(\"" + j + "\")' onmouseover='mouseover(\"n" + arr2[j][1] + "\")' onmouseout='mouseout(\"n" + arr2[j][1] + "\")'>";
    //tag += "<div class='card "+JobName+"' >";
    tag += "<div class='photo'>";

    //*****
    // 이미지파일초기화
    var photo = "2021img/" + arr2[j][1] + "_1.jpg"
    var photo2 = "2021img/" + arr2[j][1] + "_2.gif"
    // var photo = "img/sample.jpg"
    // var photo2 = "img/sample2.jpg"
    tag += "<img class='photo' src=" + photo + " />";
    tag += "<img id='n" + arr2[j][1] + "' class='photo_hover' src=" + photo2 + " />";
    tag += "</div>";
    tag += "<div class='title'>";
    tag += "<div class='name'>" + arr2[j][0] + "</div>"

    //*****
    var job = "";
    switch (arr2[j][2]) {
      case '기획':
        job = "PLANNER"
        break;
      case '디자인':
        job = "DESIGNER"
        break;
      //2018Ku
      case '영상':
        job = "MOVING IMG" //2020 퍼블리싱/유니티개발 로 변경되었습니다!
        break;
      //여기까지 지우시면 됩니다.
      case '프로그래머':
        job = "PROGRAMMER"
        break;
      case '테스트':
        job = "TEST"
        break;
    }
    tag += "<div class='job' >" + job + "</div>"
    //tag +=     arr2[j];
    tag += "</div>";
    tag += "</div>";
    all_tag += tag;
  }
  content_div.innerHTML += all_tag;
}
draw_stage();
function mouseover(id_str) {
  var element = document.getElementById(id_str);
  TweenMax.to(element, 1, { opacity: 1, ease: Circ.easeOut });
}
function mouseout(id_str) {
  var element = document.getElementById(id_str);
  TweenMax.to(element, 1, { opacity: 0, ease: Circ.easeOut });
}
function mouseclick(id_str) {
  var url = "http://" + arr2[id_str][5];
  window.open(url, '_blank');
}

/* ======================================= draw stage ======================================= */

/* ======================================= set location ======================================= */

var card_total = arr2.length;
// 2019min : 원래 content_margin 40 이였습니다 (정사각형 사진 아닐경우)
var content_margin = 60;
var card_margin = 15;
var height = document.body.clientHeight;
var width = document.body.clientWidth;
var content_width = width - (content_margin * 2);
var card_width, card_height


var col_num = Math.floor(content_width / (card_width + card_margin * 2));
var row_num = Math.ceil(card_total / col_num);
var stage_width = col_num * (card_width + card_margin * 2);
var save_col_num = 0;
var counter = 0;
var cards = document.getElementsByClassName("card");

//

//


var focus_job = "n";
var save_job = "default";
function set_location() {
  card_total = arr2.length;
  // 2019min : 원래 content_margin 40 이였습니다 (정사각형 사진 아닐경우)
  content_margin = 60;
  card_margin = 15;
  height = document.body.clientHeight;
  width = document.body.clientWidth;
  content_width = width - (content_margin * 2);
  // 2019min 설정
  card_width = 200;
  card_height = 264;

  /*2018 설정
  card_width = 175;
  card_height = 264;
  */

  col_num = Math.floor(content_width / (card_width + card_margin * 2));
  row_num = Math.ceil(card_total / col_num);
  stage_width = col_num * (card_width + card_margin * 2);
  if (save_col_num == col_num) {
    if (save_job == focus_job) {
      return;
    }
  }
  save_col_num = col_num;
  save_job = focus_job;
  //default value reset

  content_div.style.width = stage_width;
  content_div.style.height = row_num * (card_height + card_margin * 2);
  //main container resize

  counter = 0;
  switch (focus_job) {
    case "n":
      text_color();
      set_card_detail("n");
      break;
    case "g":
      text_color();
      set_card_detail("g");
      set_card_detail("d");
      set_card_detail("p");
      //2018Ku
      set_card_detail("m");
      //여기까지 지우시면됩니다.
      break;
    case "d":
      text_color();
      set_card_detail("d");
      set_card_detail("p");
      //2018Ku
      set_card_detail("m");
      //여기까지 지우시면됩니다.
      set_card_detail("g");
      break;
    case "p":
      text_color();
      set_card_detail("p");
      //2018Ku
      set_card_detail("m");
      //여기까지 지우시면됩니다.
      set_card_detail("g");
      set_card_detail("d");
      break;
    //2018Ku
    case "m":
      text_color();
      set_card_detail("m");
      set_card_detail("g");
      set_card_detail("d");
      set_card_detail("p");
      break;
    //여기까지 지우시면됩니다.
  }
}

var onloadFunc = function () {
  var _body = document.getElementsByTagName('body')[0];
  _body.style.display = 'block';
};


function text_color() {

  var elements_2 = document.getElementsByClassName("card");
  for (var k = 0; k < elements_2.length; k++) {
    var one_ele2 = elements_2[k];
    one_ele2.style.opacity = 1;
  }
  if (focus_job == "n") return;
  var elements_2 = document.getElementsByClassName("card");
  for (var k = 0; k < elements_2.length; k++) {
    var one_ele2 = elements_2[k];
    one_ele2.style.opacity = 0.3;
  }
  var elements = document.getElementsByClassName(focus_job);
  for (var j = 0; j < elements.length; j++) {
    var one_ele = elements[j];
    one_ele.style.opacity = 1;
  }

}
var animation_time = 0;
var delay_time = 0;
function set_card_detail(check) {
  for (var i = 0; i < cards.length; i++) {
    var one_card = cards[i];
    if (one_card.className.substr(5) != check && check != "n") continue;
    one_card.style.width = card_width;
    one_card.style.height = card_height;
    one_card.style.zIndex = cards.length - counter;
    one_card.style.margin = card_margin + "px";
    var loca_x = counter % col_num * (card_width + card_margin * 2);
    var loca_y = Math.floor(counter / col_num) * (card_height + card_margin * 2);

    TweenMax.killTweensOf(one_card);
    TweenMax.to(one_card, animation_time / 2, { x: loca_x, delay: counter / 20 * delay_time, ease: Sine.easeOut });
    TweenMax.to(one_card, animation_time / 2, { y: loca_y, delay: (counter / 20 + 0.5) * delay_time, ease: Sine.easeOut });

    counter++;
  }
  animation_time = 1;
  delay_time = 1;
}
/* ======================================= set location ======================================= */
set_location();

if (window.addEventListener) {
  window.addEventListener('resize', resizeFunc);
} else {
  window.attachEvent('resize', resizeFunc)
}

function resizeFunc(event) {
  //alert("resize");
  // do stuff here
  set_location();
}
/* ======================================= sort function ======================================= */
var g = document.getElementsByClassName("g");
var d = document.getElementsByClassName("d");
var p = document.getElementsByClassName("p");
//2018Ku
var m = document.getElementsByClassName("m");
//여기까지 지우시면됩니다.
function set_a() {
  focus_job = "n";
  set_location();
}
function set_g() {
  focus_job = "g";
  set_location();
}
function set_d() {
  focus_job = "d";
  set_location();
}
//2018Ku
function set_m() {
  focus_job = "m";
  set_location();
}
//여기까지 지우시면됩니다.
function set_p() {
  focus_job = "p";
  set_location();
}
function set_display(target, type) {
  for (var i = 0; i < target.length; i++) {
    target[i].style.display = type;
  }
}
   /* ======================================= sort function ======================================= */