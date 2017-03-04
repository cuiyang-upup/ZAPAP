$(document).ready(function(){
	var indexBanner = $( ".index-banner-bg" );
	var banner = $( ".index-banner-bg div" );
	var bgButton = $( ".bg-button a");
	var imgWidth = 1500 ;
	var button = $( ".button");
	var bu = $(".bg-button span");

		
	bu.on( "click",function(){
		var i = $( this ).index();
		
		// bu.siblings("#bu").remove( "#bu" );
		indexBanner.animate({left: -i * imgWidth+"px"}, 500);
		var b = bu.eq( i );
			
		
		b.addClass( "bu" ).siblings().removeClass( "bu" );
		} );

	function showhide( $obj ){

	}
	var list = $( "#list" );
		indexMore = $( ".index-more" );

	alert(parseInt(list.css("height")));
		indexMore.on( "click" , function(){
			if(parseInt(list.css("height")) ===483 ){
				list.animate({height:"968px",overflow:"visible"},500);
				indexMore.html( "pack up 丨 ∧" );
			}else {
				list.animate({height:"484px",overflow:"hidden"},500);
				indexMore.html( "load more 丨 ∧" );			
			};
		});
		
});

