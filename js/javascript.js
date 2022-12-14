$(document).ready(function(){
	var $body = $('body');
	var $intro = $('#intro');
	var $poster = $('.poster');
	var $txtImg = $('.txt_img');
	var $date = $('.date');
	var $title = $('.title');
	var $pWrp = $('.p_wrp');
	var $digital = $('.digital');
	var imgPc = ['img/a_bg.gif','img/b_bg.gif','img/c_bg.gif','img/d_bg.gif'];
	var imgTc = ['img/a_txt.png','img/b_txt.png','img/c_txt.png','img/d_txt.png']
	function random(){
        var num = Math.floor(Math.random()*4);
        $intro.addClass('t' + num);
    }
	random();
	function $chage (bodybg, dateC, imgP, imgT, changeC) {
		$body.css({backgroundColor : bodybg});
		$date.css({color : dateC});
		$poster.attr('src', imgP);
		$txtImg.attr('src', imgT);
		$title.css({color : changeC});
		$pWrp.css({color : changeC});
		$digital.css({color : changeC})
	}
	if($intro.hasClass('t0')){
		$chage('#ffcdc4', '#207f37',imgPc[0],imgTc[0],null);
	}
	else if ($intro.hasClass('t1')){
		$chage('#00e8cf','#995f23',imgPc[1],imgTc[1],null);
	}
	else if ($intro.hasClass('t2')){
		$chage('#ffde00','#00b9ff',imgPc[2],imgTc[2],null);
	}
	else if ($intro.hasClass('t3')){
		$chage('#afff00','#875d8d',imgPc[3],imgTc[3],'#508d0f');
	}
});