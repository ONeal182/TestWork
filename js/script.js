$('.menu').mouseenter(function(){
	$(this).children().css({"display": "flex"});
	$(this).css({"top": "49.5px"});
},
	
);

$('.menu').mouseleave(function(){
	$(this).children().css({"display": "none"});
	$(this).css({"top": "0"});
},
	
);

$(".Trendy__merch li").mouseenter(function(){
	$(this).children('button').css({'display':'flex'});
	$(this).children('.Trendy__merch__icons').css({'display':'flex'})
})

$(".Trendy__merch li").mouseleave(function(){
	$(this).children('button').css({'display':'none'});
	$(this).children('.Trendy__merch__icons').css({'display':'none'});
})

$('.Trendy__merch__icons__heart').on('click', function(){
	
		let count = 0;
		count ++;
	
	$(this).children('p').text(count);


	
})



$('.Collection__categories li').click(function() {  
    $('.Collection__categories li').not(this).removeClass('active');
    $(this).toggleClass('active');

});

$('.Collection__categories li[data-watches]').on('click', function(){
	if($('.Collection .Collection__items').has('.watches')){
		$('.watches').addClass('active');
		$('.Collection .Collection__items').not('.watches').removeClass('active');

	}
	
})

$('.Collection__categories li[data-mobile]').on('click', function(){
	if($('.Collection .Collection__items').has('.mobile')){
		$('.mobile').addClass('active');
		$('.Collection .Collection__items').not('.mobile').removeClass('active');

	}
	
})

$('.Collection__categories li[data-fashion]').on('click', function(){
	if($('.Collection .Collection__items').has('.fashion')){
		$('.fashion').addClass('active');
		$('.Collection .Collection__items').not('.fashion').removeClass('active');

	}
	
})


$('.Collection__categories li[data-furnitures]').on('click', function(){
	if($('.Collection .Collection__items').has('.furnitures')){
		$('.furnitures').addClass('active');
		$('.Collection .Collection__items').not('.furnitures').removeClass('active');

	}
	
})
	

	
$('.Collection__categories li[data-cloth]').on('click', function(){
	if($('.Collection .Collection__items').has('.Cloth')){
		$('.Cloth').addClass('active');
		$('.Collection .Collection__items').not('.Cloth').removeClass('active');

	}
	
})

$('.Collection__categories li[data-toys]').on('click', function(){
	if($('.Collection .Collection__items').has('.toys')){
		$('.toys').addClass('active');
		$('.Collection .Collection__items').not('.toys').removeClass('active');

	}
	
})
