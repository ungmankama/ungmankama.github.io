class SliderImg
{
	constructor(src,text)
	{
		this.src=src;
		this.text=text;
	}
}
class SliderPhotoProject
{
	constructor(elem)
	{
		this.sliderPhotoProject=[];
		this.other_ind=0;
		this.currentProject=0;
		//clone name
		for (var i=0;i<elem.getElementsByClassName('Project').length;i++)
		{		
			var arr_temp=[];
			this.currentProject=i-i;
			for (var j=0;j<elem.getElementsByClassName('Project')[i].getElementsByTagName('img').length;j++)
			{
				arr_temp.push(new SliderImg(elem.getElementsByClassName('Project')[i].getElementsByTagName('img')[j].src,elem.getElementsByClassName('Project')[i].getElementsByTagName('img')[j].alt));
			}
			this.sliderPhotoProject.push(arr_temp);
		}

		//delete old
		for (var i = elem.getElementsByClassName('Project').length - 1; i >= 0; i--) {
			elem.getElementsByClassName('Project')[i].parentNode.removeChild(elem.getElementsByClassName('Project')[i]);
		}

		var self=this;

		var class_image_container=document.createElement('div');
		elem.appendChild(class_image_container);
		class_image_container.className='class_image_container';

		var pr_ph=document.createElement('div');
		class_image_container.appendChild(pr_ph);
		pr_ph.className='pr_ph';


		var main_photo_slider=document.createElement('div');
		class_image_container.appendChild(main_photo_slider);
		main_photo_slider.className='main_photo_slider';

		var nt_ph=document.createElement('div');
		class_image_container.appendChild(nt_ph);
		nt_ph.className="nt_ph";

		//pr nt slide

		var pr_ph_a=document.createElement('div');
		class_image_container.appendChild(pr_ph_a);
		pr_ph_a.className='pr_ph_a';
		pr_ph_a.appendChild(document.createTextNode('❮'));

		var nt_ph_a=document.createElement('div');
		class_image_container.appendChild(nt_ph_a);
		nt_ph_a.className='nt_ph_a';
		nt_ph_a.appendChild(document.createTextNode('❯'));
		// nt_ph_a.appendChild(document.createTextNode("\f0da"));



		var main_photo=document.createElement('div');
		main_photo_slider.appendChild(main_photo);
		main_photo.className="main_photo";

		

		var pr_ot_ph=document.createElement('div');
		main_photo_slider.appendChild(pr_ot_ph);
		pr_ot_ph.className='pr_ot_ph';

		var other_photo=document.createElement('div');
		main_photo_slider.appendChild(other_photo);
		other_photo.className='other_photo';

		var nt_ot_ph=document.createElement('nt_ot_ph');
		main_photo_slider.appendChild(nt_ot_ph);
		nt_ot_ph.className="nt_ot_ph";

		
		var a_pr_ot_ph=document.createElement('a');
		a_pr_ot_ph.appendChild(document.createTextNode('❮'));
		pr_ot_ph.appendChild(a_pr_ot_ph);

		pr_ot_ph.addEventListener("click", function(event) {
			   console.log('event1');
			   self.change_photo_slide(-1);  
			}, false);

		var a_nt_ot_ph=document.createElement('a');
		a_nt_ot_ph.appendChild(document.createTextNode('❯'));
		nt_ot_ph.appendChild(a_nt_ot_ph);

		nt_ot_ph.addEventListener("click", function(event) {
			   console.log('event1');
			   self.change_photo_slide(1);  
			}, false);


		if(this.sliderPhotoProject.length==2)
		{	
			var img_temp=document.createElement('img');
			img_temp.src=this.sliderPhotoProject[1][0].src;
			nt_ph.appendChild(img_temp);
		}

		if(this.sliderPhotoProject.length>2)
		{	
			var img_temp=document.createElement('img');
			img_temp.src=this.sliderPhotoProject[1][0].src;
			nt_ph.appendChild(img_temp);

			var img_temp=document.createElement('img');
			img_temp.src=this.sliderPhotoProject[this.sliderPhotoProject.length-1][0].src;
			pr_ph.appendChild(img_temp);		
		}


		pr_ph_a.addEventListener("click", function(event) {
		  
		  	self.change_slide(-1);  

		}, false);

		nt_ph_a.addEventListener("click", function(event) {
		  
		  	self.change_slide(1);  

		}, false);



		this.slider_start();


	}


	slider_start()
	{

		var main_photo=document.getElementsByClassName('main_photo')[0];
		var other_photo=document.getElementsByClassName('other_photo')[0];
		
		var img_main_photo=document.createElement('img');
		main_photo.appendChild(img_main_photo);
		var self=this;

		for (var i=0;i<this.sliderPhotoProject[this.currentProject].length && i<3 ;i++)
		{
			var img_content=document.createElement('button');
			img_content.className='other_photo_img_cont';
			other_photo.appendChild(img_content);

			var img_oth=document.createElement('img');
			img_oth.src=this.sliderPhotoProject[this.currentProject][i].src;
			img_content.appendChild(img_oth);
			img_content.value=this.sliderPhotoProject[this.currentProject][i].src;

			img_content.addEventListener("click", function(event) {
			   console.log('event1');
			   self.change_image_main(event);
			   
			}, false);

			// img_content.setAttribute('onclick','change_image_main(event)');
			img_content.setAttribute('data',i);
			if (i==0)
			{
				img_content.className='other_photo_img_cont active_oth';
			}

		}

		img_main_photo.src=this.sliderPhotoProject[this.currentProject][0].src;
		// alt_photo_span.appendChild(document.createTextNode(arr_text[img_current]));

	}

	change_image_main(event)
	{
		event.preventDefault();
		console.log('event2');
		
		var main_photo=document.getElementsByClassName('main_photo')[0];
		var other_photo=document.getElementsByClassName('other_photo')[0];

		event=event.target;
		var counter=0;
		while (event.className!='other_photo_img_cont' && event.className!='other_photo_img_cont active_oth')
		{	
			event=event.parentNode;
			if(counter>5)
			{
				break;
			}
			counter++;
		}

		if (other_photo.getElementsByClassName("active_oth").length>0)
		{
			other_photo.getElementsByClassName("active_oth")[0].className='other_photo_img_cont';
		}

		var img_current=event.getAttribute('value');
		main_photo.getElementsByTagName('img')[0].src=img_current;
		// delete_all_child(alt_photo_span);
		// img_current.spit('/')[img_current.spit('/').length-1].split('.')[0];
		// alt_photo_span.appendChild(document.createTextNode(arr_text[event.getAttribute('data')]));
		event.className='other_photo_img_cont active_oth';

	}


	change_photo_slide(action)
	{
		var other_ind=this.other_ind;
		
		var main_photo=document.getElementsByClassName('main_photo')[0];
		var other_photo=document.getElementsByClassName('other_photo')[0];


		other_ind+=action;
		other_ind=(other_ind<this.sliderPhotoProject[this.currentProject].length)?other_ind:0;
		other_ind=(other_ind>=0)?other_ind:this.sliderPhotoProject[this.currentProject].length-1;
		this.other_ind=other_ind;

		var ind_cur_ph=[other_ind,(other_ind+1>this.sliderPhotoProject[this.currentProject].length-1)?Math.abs(other_ind+1-this.sliderPhotoProject[this.currentProject].length):other_ind+1,(other_ind+2>this.sliderPhotoProject[this.currentProject].length-1)?Math.abs(other_ind+2-this.sliderPhotoProject[this.currentProject].length):other_ind+2];

		for (var i_c=0;i_c<other_photo.getElementsByClassName('other_photo_img_cont').length;i_c++)
		{
			other_photo.getElementsByClassName('other_photo_img_cont')[i_c].getElementsByTagName('img')[0].src=this.sliderPhotoProject[this.currentProject][ind_cur_ph[i_c]].src;
			other_photo.getElementsByClassName('other_photo_img_cont')[i_c].value=this.sliderPhotoProject[this.currentProject][ind_cur_ph[i_c]].src;
			other_photo.getElementsByClassName('other_photo_img_cont')[i_c].className='other_photo_img_cont';
			other_photo.getElementsByClassName('other_photo_img_cont')[i_c].setAttribute('data',ind_cur_ph[i_c]);

			if (other_photo.getElementsByClassName('other_photo_img_cont')[i_c].getElementsByTagName('img')[0].src==main_photo.getElementsByTagName('img')[0].src)
			{
				other_photo.getElementsByClassName('other_photo_img_cont')[i_c].className='other_photo_img_cont active_oth';
			}
		}		
	}

	clean_slider()
	{
		var main_photo=document.getElementsByClassName('main_photo')[0];
		var other_photo=document.getElementsByClassName('other_photo')[0];

		var pr_ph=document.getElementsByClassName('pr_ph')[0];
		var nt_ph=document.getElementsByClassName('nt_ph')[0];

		delete_child(main_photo);
		delete_child(other_photo);

		delete_child(pr_ph);
		delete_child(nt_ph);

	}

	change_slide(action)
	{	
		this.clean_slider();
		//сделать для слайдов меньше 2
		this.currentProject+=action;
	
		this.currentProject=(this.currentProject<this.sliderPhotoProject.length)?this.currentProject:0;
		this.currentProject=(this.currentProject>=0)?this.currentProject:this.sliderPhotoProject.length-1;
		// var ind1=(this.currentProject-1>this.sliderPhotoProject.length-1)?Math.abs(this.currentProject-1-this.sliderPhotoProject.length):this.currentProject-1;
		var ind1=(this.currentProject-1<0)?Math.abs(this.sliderPhotoProject.length-1):this.currentProject-1;
		var ind2=(this.currentProject+1>this.sliderPhotoProject.length-1)?Math.abs(this.currentProject+1-this.sliderPhotoProject.length):this.currentProject+1;

		this.slider_start();
		
		var pr_ph=document.getElementsByClassName('pr_ph')[0];
		var nt_ph=document.getElementsByClassName('nt_ph')[0];

		console.log(ind1);
		console.log(ind2);
		var img_temp=document.createElement('img');
		img_temp.src=this.sliderPhotoProject[ind1][0].src;
		nt_ph.appendChild(img_temp);

		var img_temp=document.createElement('img');
		img_temp.src=this.sliderPhotoProject[ind2][0].src;
		pr_ph.appendChild(img_temp);	

		// var ind_cur_sl=[this.currentProject,this.currentProject+]
	}


}

function delete_child(elem)
{
	while(elem.firstChild)
	{
		elem.removeChild(elem.firstChild);
	}
}

var slider1=new SliderPhotoProject(document.getElementById('sliderProject'));




