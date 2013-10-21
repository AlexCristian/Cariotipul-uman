var names=new Array(); var cpage=0;
names[4]="#init";
names[0]="#cilindruB";
names[1]="#pistonB";
names[2]="#bujieB";
names[3]="#supapaB";
var i=4, j;
var divs=new Array();
divs[4]="#init";
divs[0]="#cilindru";
divs[1]="#piston";
divs[2]="#bujie";
divs[3]="#supapa";
function changePage(id){
	if(cpage!=id){
		$("#main").animate({opacity:0}, 700, function(){
		$("#p"+cpage).css({'display':'none'});
		$("#p"+id).css({'display':'block', 'opacity':'1'});
		$("#main").css({'opacity' : '0', 'display' : 'block'}).animate({'opacity':'1'}, 700);
		cpage=id;
	});}
}
$(document).ready(function(){
setInterval(function(){$("#bc").animate({opacity:1}, 700);
	$("#startGreet").animate({'font-size':50}, 500,  function(){
		$("#startGreet").animate({'font-size':40}, 500);
	});}, 2000);
$("#begin").click(function(){
	$("#begin").animate({opacity:0}, 50);
	$("#bc").hide(0); $("#main").show(0);
	$("#main").animate({opacity:1}, 700);
	cpage=1;
});
$("#b1").click(function(){
	if(cpage!=1){
		$("#main").animate({opacity:0}, 700, function(){
		$("#p"+cpage).css({'display':'none'});
		$("#p1").css({'display':'block', 'opacity':'1'});
		$("#main").css({'opacity' : '0', 'display' : 'block'}).animate({'opacity':'1'}, 700);
		cpage=1;
	});}
});
$("#b1").click(function(){
	changePage(1);
});
$("#b2").click(function(){
	changePage(4);
});
$("#b3").click(function(){
	changePage(9);
});
$("#b4").click(function(){
	changePage(12);
});
$("#to_2").click(function(){
	changePage(2);
});
$("#to_3").click(function(){
	changePage(3);
});
$("#to_4").click(function(){
	changePage(4);
});
$("#to_5").click(function(){
	changePage(5);
});
$("#to_6").click(function(){
	changePage(6);
});
$("#to_7").click(function(){
	changePage(7);
});
$("#to_8").click(function(){
	changePage(8);
});
$("#to_9").click(function(){
	changePage(9);
});
$("#to_10").click(function(){
	changePage(10);
});
$("#to_11").click(function(){
	changePage(11);
});
$("#to_12").click(function(){
	changePage(12);
});
$("#to_13").click(function(){
	changePage(13);
});
$("#to_14").click(function(){
	changePage(14);
});
$(names[0]).click(function(){
	j=0;
	if(i!=j){
	$(divs[i]).animate({opacity:0}, 50);
	$(divs[i]).hide(0); $(divs[j]).show(0);
	$(divs[j]).animate({opacity:1}, 50);
	i=j;
	}
});
$(names[1]).click(function(){
	j=1;
	if(i!=j){
	$(divs[i]).animate({opacity:0}, 50);
	$(divs[i]).hide(0); $(divs[j]).show(0);
	$(divs[j]).animate({opacity:1}, 50);
	i=j;
	}
});
$(names[2]).click(function(){
	j=2;
	if(i!=j){
	$(divs[i]).animate({opacity:0}, 50);
	$(divs[i]).hide(0); $(divs[j]).show(0);
	$(divs[j]).animate({opacity:1}, 50);
	i=j;
	}
});
$(names[3]).click(function(){
	j=3;
	if(i!=j){
	$(divs[i]).animate({opacity:0}, 50);
	$(divs[i]).hide(0); $(divs[j]).show(0);
	$(divs[j]).animate({opacity:1}, 50);
	i=j;
	}
});
});