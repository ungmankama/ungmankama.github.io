
// добавить чтобы он искал по влоденным элементам!!!
class SliderFullPage
{	
	constructor (element,type=0)
	{	

		this.auto_play_bool=true;
		this.number_slides=element.children('.slide').length-1;
		this.slide=element.children('.slide');
		this.active_slide=0;
		this.timerId;

		this.pause=false;
		var _self=this;

		this.delta=0;
		this.start=0;
		this.swipe_el=element.children('.swipe').eq(0);
		this.comp_prev_curr_nxt_slide();

		this.swipe_el.on("mousedown touchstart", function(e)
		{
			_self.swipe_start(e);
		});		

		element.children(".btn_prev").eq(0).click(function()
		{	
			_self.pause=true;
			_self.swipe(-1);
			
		});
		element.children(".btn_next").eq(0).click(function()
		{	
			_self.pause=true;
			_self.swipe(1);	
		});

		 if (this.auto_play_bool)
		 {
		 	this.timerId =setTimeout(function(){_self.auto_play()},3000);	
		 }
	}

	swipe_start(e)
	{
		var touch=e.originalEvent.touches;
		var _self=this;
		this.start=touch ? touch[0].pageX : e.pageX;

		_self.swipe_el.on("mousemove touchmove", function(e)
		{
			_self.swipe_move(e);
		});

		$(window).one("mouseup touchend",function (e)
		{
			_self.swipe_end(e);
		})

	}

	swipe_move(e)
	{	
		var touch1=e.originalEvent.touches;
		// var _self=this;
		var end=touch1 ? touch1[0].pageX : e.pageX;
		this.delta = end-this.start;
	}

	swipe_end(e)
	{	

		this.pause=true;
		this.swipe_el.off("mousemove touchmove");

		if (this.delta>50)
		{
			this.swipe(-1);
		}
		if (this.delta<-50)
		{
			this.swipe(1);
		}

		this.start=0;
		this.delta=0;
	}


	swipe(num)
	{

		var _self=this;

		if(this.pause)
		{
			this.pause=false;
			if(this.auto_play_bool)
			{
				clearTimeout(this.timerId);
				this.timerId =setTimeout(function(){_self.auto_play()},10000);				
			}	
		}

		this.slide.removeClass("slide_transition");
		this.slide.children('text_block').removeClass('animated_text_block');
		this.active_slide+=num;
		var p_n_c=this.comp_prev_curr_nxt_slide();
		
		if (num>0)
		{
			// $(".slide:nth-child("+p_n_c.prv+")").addClass('slide_transition');
			this.slide.eq(p_n_c.prv).addClass('slide_transition');
		}else
		{
			this.slide.eq(p_n_c.nxt).addClass('slide_transition');
			// $(".slide:nth-child("+p_n_c.nxt+")").addClass("slide_transition");
		}

 	}
		
	comp_prev_curr_nxt_slide()
	{
		
		this.active_slide=(this.active_slide<0)? this.number_slides: this.active_slide;
		this.active_slide=(this.active_slide>this.number_slides) ?0:this.active_slide;

		var leftSlide=0;
		var rightSlide=0;
		leftSlide=((this.active_slide-1)<0)?this.number_slides:this.active_slide-1;
		rightSlide=((this.active_slide+1)>this.number_slides)?0:this.active_slide+1;

		this.slide.eq(this.active_slide).removeClass('left right').addClass("slide_transition");
		this.slide.eq(this.active_slide).children('text_block').addClass('animated_text_block');
		// $(".slide:nth-child("+this.active_slide+")").removeClass("left right").addClass("slide_transition");
		// $(".slide:nth-child("+this.active_slide+")>.text_block").addClass('animated_text_block');
		this.slide.eq(leftSlide).addClass("left").removeClass("right");
		this.slide.eq(rightSlide).addClass("right").removeClass("left");
		// $(".slide:nth-child("+leftSlide+")").addClass("left").removeClass("right");
		// $(".slide:nth-child("+rightSlide+")").addClass("right").removeClass("left");


		return {prv:leftSlide,nxt:rightSlide};

	}	
 	auto_play()
 	{	
 		var that=this;
 		this.swipe(1);
 		this.anim_time=5000;
 		
 		this.timerId = (this.auto_play_bool)?setTimeout(function (){that.auto_play()}, this.anim_time):0;
 	}


}


///////////////////////////////////////////////////////////////////////////////////////////////
class SliderProject
{
	constructor(elem)
	{
		// this.slide=$('.slider-single');
		this.slide=elem.children('.sliderPr_container_content').eq(0).children('.sliderPr_slide');
		this.slideTotal=this.slide.length-1;
		this.slideCurrent=-1;
		this.start=0;
		this.delta=0;
		this.slide.addClass('sliderPr_nxt1');
		var _this=this;
		this.swipe_el=elem.children('.swipe').eq(0);

	    setTimeout(function() 
	    {
	   	 _this.swipe(1);
	    }, 500);


		elem.children('.sliderPr_container_content').eq(0).children('.btn_left').eq(0).on('click', function() 
		{
		    _this.swipe(-1);
		});

		elem.children('.sliderPr_container_content').eq(0).children('.btn_right').eq(0).on('click', function() 
		{
		    _this.swipe(1);
		});

		this.swipe_el.on("mousedown touchstart", function(e)
		{
			_this.swipe_start(e);
		});		

	}

	swipe_start(e)
	{
		var touch=e.originalEvent.touches;
		var _self=this;
		this.start=touch ? touch[0].pageX : e.pageX;

		this.swipe_el.on("mousemove touchmove", function(e)
		{
			_self.swipe_move(e);
		});

		$(window).one("mouseup touchend",function (e)
		{
			_self.swipe_end(e);
		})		
	}

	swipe_move(e)
	{	
		var touch1=e.originalEvent.touches;
		var _self=this;
		var end=touch1 ? touch1[0].pageX : e.pageX;
		this.delta = end-this.start;
	}

	swipe_end(e)
	{	

		this.pause=true;
		this.swipe_el.off("mousemove touchmove");

		if (this.delta>50)
		{
			this.swipe(-1);
		}
		if (this.delta<-50)
		{
			this.swipe(1);
		}

		this.start=0;
		this.delta=0;
	}

	swipe(num)
	{
		this.slideCurrent+=num;
		this.slideCurrent=(this.slideCurrent<0)?this.slideTotal:this.slideCurrent;
		this.slideCurrent=(this.slideCurrent>this.slideTotal)?0:this.slideCurrent;

		var prvSlide=0;
		var curSlide=0;
		var nxtSlide=0;

		prvSlide=(this.slideCurrent>0)?this.slide.eq(this.slideCurrent-1):this.slide.eq(this.slideTotal);
		curSlide=this.slide.eq(this.slideCurrent);
		nxtSlide=(this.slideCurrent<this.slideTotal)?this.slide.eq(this.slideCurrent+1):this.slide.eq(0);

		var hasClass='';
		var rmvClass='';
		var addClass='';

		var hasClass1='';
		var rmvClass1='';
		var addClass1='';
		//left
		if (num<0)
		{
			hasClass='sliderPr_nxt1';
			rmvClass='sliderPr_prv sliderPr_cur sliderPr_nxt sliderPr_nxt1';
			addClass='sliderPr_prv1';

			hasClass1='sliderPr_nxt';
			rmvClass1='sliderPr_prv1 sliderPr_prv sliderPr_cur sliderPr_nxt';
			addClass1='sliderPr_nxt1';	
		}
		//right
		if (num>0)
		{

			hasClass='sliderPr_prv1';
			rmvClass='sliderPr_prv1 sliderPr_prv sliderPr_cur sliderPr_nxt';
			addClass='sliderPr_nxt1';

			hasClass1='sliderPr_prv';
			rmvClass1='sliderPr_prv sliderPr_cur sliderPr_nxt sliderPr_nxt1';
			addClass1='sliderPr_nxt1';	
		}


		this.slide.each(function()
		{
			var thisSlide=$(this);

			if(thisSlide.hasClass(hasClass))
			{
				thisSlide.removeClass(rmvClass).addClass(addClass);
			}

			if(thisSlide.hasClass(hasClass1))
			{
				thisSlide.removeClass(rmvClass1).addClass(addClass1);
			}
			prvSlide.removeClass('sliderPr_prv1 sliderPr_cur sliderPr_nxt sliderPr_nxt1').addClass('sliderPr_prv');
			curSlide.removeClass('sliderPr_prv1 sliderPr_prv sliderPr_nxt sliderPr_nxt1').addClass('sliderPr_cur');
			nxtSlide.removeClass('sliderPr_prv1 sliderPr_prv sliderPr_cur sliderPr_nxt1').addClass('sliderPr_nxt');
		})

		
	}
}    