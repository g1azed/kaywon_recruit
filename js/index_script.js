(function($){
$(document).ready(function(){
var $win = $(window),
    $doc = $(document);
// selecting
var $textbox = $('.sec_desc .desc_textbox'),
    $iframePc = $('.sec_video iframe'),
    $iframeMo = $('.mobile_video iframe'),
    $timetable = $('.desc_timetable'),
    $linkUl = $('.desc_link_ul'),
    $h1 = $('h1'),
    $date = $('.desc_date');



var commonPos = function(){
  var $title = $('.title h1');
  var iframeW = $iframePc.width();
      iframeW_M = $iframeMo.width();
  if($win.width() > 767){
    $textbox.css({
      'margin-top' : $win.height()/2 - $textbox.height()/2 + 'px'
    });
    $iframePc.css({
      'height' : iframeW * 0.56,
      'margin-top' : $win.height()/2 - $iframePc.height()/2 + 'px'
    })
    $timetable.css({
      'margin-bottom' : 0
    });
  }else{
    $textbox.css({
      'margin-top' : 0
    });
    $iframeMo.css({
      'height' : iframeW_M * 0.56
    });
    $timetable.css({
      'margin-bottom' : $linkUl.height()
    });
  };

  // $title.css({
  //   'font-size' : '1vw !important'
  //   ,'color': '#d3d'
  // })
};

var startAni = function(){
  $h1.css({
    'left':0
  });
  $date.css({
    'left':0
  });
}

//document ready..;
var justReady = function(){
  startAni();
  readyAndResize();
}
var readyAndResize = function(){
  commonPos();
}
var windowScroll = function(){

}
$(window).resize(readyAndResize);
$(window).scroll(windowScroll);
justReady();
$(window).trigger('resize');
$(window).trigger('scroll');
});//document ready..;
})(jQuery);
