
function Slider(slider,dots=true)
{	
	var that=this;
	this.slider=slider;

	var slides=this.slider.getElementsByClassName('slides');

	for (var i = 0; i < slides.length; i++) 
	{
		slides[i].className+=' non_active_slide';
	}

	slides[0].className='slides active_slide';
	this.current_slide=0;
	this.timerId;
	this.state_play=true;
	this.dots=dots;

	this.auto_play=function(anim_time=5000)
	{	
		this.anim_time=anim_time;
		var that=this;
		this.timerId = setTimeout(function (){that.auto_play_change_slide(anim_time)}, that.anim_time);
		console.log('timer id ( auto play) = '+ this.timerId);
	}



	this.auto_play_change_slide=function(anim_time)
	{	
		var that=this;
		// console.log('timer id ( auto play cs) = '+ this.timerId);
		this.current_slide++;
		if (this.current_slide>=this.slider.getElementsByClassName('slides').length)
		{
			this.current_slide=0;
		}
		var slides_active=this.slider.getElementsByClassName('active_slide');

		for (var i = slides_active.length - 1; i >= 0; i--) 
		{	
			var old_src=slides_active[i].getElementsByTagName('img')[0].src.split('/');
			old_src=old_src[old_src.length-1].split('.')[0];
			slides_active[i].getElementsByTagName('img')[0].src='img/'+old_src+'.jpg';
			slides_active[i].getElementsByClassName('slide_text')[0].style.animation='';
			slides_active[i].className='slides non_active_slide';
	
		}

		this.slider.getElementsByClassName('slides')[this.current_slide].className='slides active_slide';
		var old_src=this.slider.getElementsByClassName('slides')[this.current_slide].getElementsByTagName('img')[0].src.split('/');
		old_src=old_src[old_src.length-1].split('.')[0];
		this.slider.getElementsByClassName('slides')[this.current_slide].getElementsByTagName('img')[0].src='img/'+old_src+'.jpg';
		// this.slider.getElementsByClassName('slides')[this.current_slide].style.animation='fade '+anim_time/1000+'s';
		this.slider.getElementsByClassName('slides')[this.current_slide].getElementsByClassName('slide_text')[0].style.animation='text_anim '+anim_time/1000+'s';

		// console.log(slider.current_slide,old_src);
		

		 this.change_dots(slider);


		if (this.state_play)
		{this.timerId = setTimeout(function (){that.auto_play_change_slide(that.anim_time)}, anim_time);
		//  clearTimeout(timerId);
		}
	}


	this.change_slide=function(event)
	{	
		var ind=event.target.value;
		console.log('ti cs: '+this.timerId);
		clearTimeout(this.timerId);clearTimeout(this.timerId);
		// console.log(this.timerId);
		if(ind==0)
		{
			ind=this.slider.getElementsByClassName('slides').length;
		}else
		{
			ind--;
		}
		this.current_slide=ind;
		var _that=this;
		this.auto_play_change_slide(that.anim_time+2000);
		console.log(this.current_slide);
	// alert(event.target.value);
}

	if (dots)
	{
		var slides_length=this.slider.getElementsByClassName('slides').length;

		var dots_block=document.createElement('div');

		for (var i=0;i<slides_length;i++)
		{
			var dot=document.createElement('button');
			dot.className='dots';
			if(i==0)
			{
				dot.className='dots dots_active';
				
			}
			dot.value=i;
			// dot.onclick=that.change_slide;
			// dot.setAttribute('onclick','that.change_slide(event)');
			dot.addEventListener('click', function(event) 
			{	

           	 that.change_slide(event);
        	}, false);

			dots_block.appendChild(dot);

		}
		dots_block.className='dots_block';
		this.slider.appendChild(dots_block);
	}




	this.change_dots=function (slider)
	{
		var dots_block=this.slider.getElementsByClassName('dots_block')[0];
		var active_dots=dots_block.getElementsByClassName("dots_active");

		for (var i = active_dots.length - 1; i >= 0; i--) 
		{
			active_dots[i].className='dots';
		}

		dots_block.getElementsByClassName('dots')[this.current_slide].className='dots dots_active';
	}
	this.stop_autoplay=function()
	{
		clearTimeout(this.timerId);
		return 
	}	
}
/////////////////////////////////////////////////////////////////
