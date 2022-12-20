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
  // arr2[j][0], arr2[j][1] 
  // 이름,img, 기획/디자인/영상/프로그래머 , 반 , 링크
  "조현근,2a_1,기획,A,,monsterjo.wixsite.com/portpolio, \
  최해림,2a_2,기획,A,,petitprinceux.wixsite.com/portpolio,\
  권효정,2a_3,기획,A,,criticaluxer.wixsite.com/portfolio,\
  안유진,2a_4,기획,A,,orcauj.wixsite.com/portfolio, \
  이가영,2a_5,기획,A,,jjonggeutux.wixsite.com/portfolio, \
  서예림,2a_6,기획,A,,wizardofux.wixsite.com/portfolio,\
  정하빈,2a_7,기획,A,,rumorous.notion.site/1471904b06ad47b2ac8eb5a2d895bc2f, \
  금보경,2a_8,기획,A,,bokeefolio.notion.site/bokeefolio/Portfolio-4b3c90453e3d4365832d26283183fdd7,\
  조현정,4s_9,기획,S,,readymag.com/u3149538791/thinkaboutux/,\
  한명윤,4s_10,기획,S,,mycrometer.com/,\
  문정미,2b_11,디자인, B,,readymag.com/3995415,\
  박수빈,2b_12,디자인, B,,readymag.com/3995411,\
  안소영,2b_13,디자인, B,,readymag.com/u389923978/4003781/,\
  엄해연,2b_14,디자인, B,,havadeep.com/,\
  최유정,2b_15,디자인, B,,choiyj1366.wixsite.com/portfolio,\
  황예진,2b_16,디자인, B,,reyedy.com,\
  윤채영,2b_17,디자인, B,,readymag.com/u2743076107/chaeyoungYoon/,\
  나혜린,2b_18,디자인, B,,readymag.com/u2789911802/Universe/,\
  손민지,2b_19,디자인, B,, readymag.com/u3891798863/4085059/,\
  우효인,2b_20,디자인, B,, readymag.com/u3605610660/4021071/,\
  허민,2b_21,디자인, B,, my.readymag.com/edit/4082743/preview/,\
  유건욱,2c_22,디자인,C,,readymag.com/u3831548193/4078259/ ,\
  권형준,2c_23,디자인,C,,readymag.com/u3594592219/4020741/ ,\
  나희수,2c_24,디자인,C,,readymag.com/NICE/3999210/2/ ,\
  강은서,2c_25,디자인,C,,readymag.com/4002596 ,\
  박예솔,2c_26,디자인,C,,readymag.com/weng/folio ,\
  신예린,2c_27,디자인,C,,readymag.com/4003594 ,\
  최지원,2c_28,디자인,C,,readymag.com/saveone/me/ ,\
  김보문,2c_29,디자인,C,,readymag.com/u4049427854/munportpolio/ ,\
  김슬기,4s_30,디자인,S,,readymag.com/Kimseulki/4085057/ ,\
  최지선,4s_31,디자인,S,,drive.google.com/file/d/1fHsrSQuO3pEThiYlcjb8X4qYxLyhz1Au/view?usp=sharing ,\
  한효로,4s_32,디자인,S,,readymag.com/u748004113/4085084/ , \
  박주아,2d_33,프로그래밍,D,,parkjua.github.io/Portfolio/,\
  홍수지,2d_34,프로그래밍,D,,g1azed.github.io/portfoilo/ ,\
  백민경,2d_35,프로그래밍,D,,bp2974.github.io/portfolio/ ,\
  정보영,2d_36,프로그래밍,D,,boyoungg.github.io/portfolio/,\
  서연주,4s_37,프로그래밍,S,,west-play.github.io/seoyounju/src/index.html ";


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
      case "프로그래밍":
        JobName = "p"
        break;
      //2018Ku 
      // case "영상":
      //   JobName = "m"
      //   break;
      //여기까지 지우시면 됩니다
    }
    //draw card html
    var tag = "";
    // tag += "<div class='card " + JobName + "' onclick='mouseclick(\"" + j + "\")' onmouseover='mouseover(\"n" + arr2[j][1] + "\")' onmouseout='mouseout(\"n" + arr2[j][1] + "\")'>";
    tag += "<div class='card " + JobName + "' onclick='mouseclick(\"" + j + "\")'>";
    //tag += "<div class='card "+JobName+"' >";
    tag += "<div class='photo'>";

    //*****
    // 이미지파일초기화
    // var photo = "2021img/" + arr2[j][1] + "_1.jpg"
  var photo = "2022img/" + arr2[j][1] + ".png"
    // var photo2 = "2021img/" + arr2[j][1] + "_2.gif"
    // var photo = "img/sample.jpg"
    tag += "<img class='photo' src=" + photo + " />";
    // tag += "<img id='n" + arr2[j][1] + "' class='photo_hover' src=" + photo2 + " />";
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
      case '프로그래밍':
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
// function mouseover(id_str) {
//   var element = document.getElementById(id_str);
//   TweenMax.to(element, 1, { opacity: 1, ease: Circ.easeOut });
// }
// function mouseout(id_str) {
//   var element = document.getElementById(id_str);
//   TweenMax.to(element, 1, { opacity: 0, ease: Circ.easeOut });
// }
/* ==> 2022사이트는 사진에 마우스오버 기능이 들어가지 않아서 주석처리했습니다 들어가신다면 주석해제해주세요*/
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
      // set_card_detail("m");//2018Ku
      //여기까지 지우시면됩니다.
      break;
    case "d":
      text_color();
      set_card_detail("d");
      set_card_detail("p");
      // set_card_detail("m");//2018Ku
      //여기까지 지우시면됩니다.
      set_card_detail("g");
      break;
    case "p":
      text_color();
      set_card_detail("p");
      // set_card_detail("m"); //2018Ku
      //여기까지 지우시면됩니다.
      set_card_detail("g");
      set_card_detail("d");
      break;

    // case "m":    //2018Ku
    //   text_color();
    //   set_card_detail("m");
    //   set_card_detail("g");
    //   set_card_detail("d");
    //   set_card_detail("p");
    //   break;
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
// var m = document.getElementsByClassName("m");
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
// function set_m() {
//   focus_job = "m";
//   set_location();
// }
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