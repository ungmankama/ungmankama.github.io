
class SliderFullPage
{	

	constructor (element)
	{	

		this.auto_play_bool=true;
		this.number_slides=$(".panel").length;
		this.active_slide=(this.auto_play_bool)?$(".panel").length:1;
		this.timerId;
		this.pause=false;
		var _self=this;

		this.delta=0;
		this.start=0;
		//stop const action
		// var btn_elem=$(".cnt");

		// $(".panel:not(:first)").addClass("right");
		this.comp_prev_curr_nxt_slide();
		$(".swipe").on("mousedown touchstart", function(e)
		{
			_self.swipe_start(e);
		});		

		$(".btn-prev").click(function()
		{	
			_self.pause=true;
			_self.swipe(-1);
			
		});
		$(".btn-next").click(function()
		{	
			_self.pause=true;
			_self.swipe(1);
			
		});

		 if (this.auto_play_bool)
		 {
		 	this.auto_play();

		 }
	}

	swipe_start(e)
	{
		var touch=e.originalEvent.touches;
		var _self=this;
		this.start=touch ? touch[0].pageX : e.pageX;

		$(".swipe").on("mousemove touchmove", function(e)
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
		// console.log("end");
		console.log(this.delta);
		$(".swipe").off("mousemove touchmove");
		if (this.delta>50)
		{
			// this.swipeLeft();
			this.swipe(-1);
		}
		if (this.delta<-50)
		{
			// this.swipeRigth();
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



		$('.panel').removeClass("panel_tr");
		// $('.panel>.text_block').removeClass('text_block text_transition').addClass('text_block_left');
		$(".panel>.text_block").removeClass('animated_text_block');
		this.active_slide+=num;
		var p_n_c=this.comp_prev_curr_nxt_slide();
		

		if (num>0)
		{
			$(".panel:nth-child("+p_n_c.prv+")").addClass('panel_tr');
		}else
		{
			$(".panel:nth-child("+p_n_c.nxt+")").addClass("panel_tr");
		}

 	}
		

	comp_prev_curr_nxt_slide()
	{
		
		this.active_slide=(this.active_slide<1)? $(".panel").length: this.active_slide;
		this.active_slide=(this.active_slide>$(".panel").length) ?1:this.active_slide;

		var leftSlide=0;
		var rightSlide=0;
		leftSlide=((this.active_slide-1)<1)?$(".panel").length:this.active_slide-1;
		rightSlide=((this.active_slide+1)>$('.panel').length)?1:this.active_slide+1;

		$(".panel:nth-child("+this.active_slide+")").removeClass("left right").addClass("panel_tr");
		$(".panel:nth-child("+this.active_slide+")>.text_block").addClass('animated_text_block');
		// $(".panel:nth-child("+this.active_slide+")>.text_block_left").removeClass('text_block_left').addClass('text_transition text_block');
		$(".panel:nth-child("+leftSlide+")").addClass("left").removeClass("right");
		// $(".panel:nth-child("+leftSlide+")>.text_block").addClass("text_block_left").removeClass("text_block");

		$(".panel:nth-child("+rightSlide+")").addClass("right").removeClass("left");
		// $(".panel:nth-child("+rightSlide+")>.text_block").addClass("text_block_left").removeClass("text_block");

		return {prv:leftSlide,nxt:rightSlide};

	}	
 	auto_play()
 	{	
 		var that=this;
 		this.swipe(1);
 		this.anim_time=5000;
 		
 		this.timerId = setTimeout(function (){that.auto_play()}, this.anim_time);
 	}





}

