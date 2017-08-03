<!DOCTYPE html>
<html>
<head>
<title>Landing page</title>
<link rel="stylesheet" href="style.css">
  <script src="timer.js"></script>
</head>


<body>
	<header class="header"> 
			 <div class ="logo"></div>
			 <a href="#home" id="header_text" style="margin-left:20vw">HEADER 1</a> 
			 <a href="#slide2" id="header_text" >HEADER 2 </a> 
			 <a href="#slide3"id="header_text">HEADER 3</a>
			 <a href=""id="header_text">HEADER 4</a>
	 </header>
	 

	 
	 <a name="home"></a>
	 <div class="slide1">
	 
	 <div id="text_action_to_buy1">
		Пошел ты нахуй черт, на, держи краба.
	 </div>
	 
	 
	 
	 <br/>
				   <form method="post" id="form">
						Ваше имя: <input type="text" name="name" placeholder="Кама" style="height:3vh"><br/>
						Email: <input type="email" name="email" placeholder="ganst01@gun.ru" style="height:3vh"><br/>
				
						<input type="submit" value="ШААА!  КЬЯЯЯЯ!" id="button_slide1">
					</form>
	 </div>

	 <div class="slide2">
	  <a name="slide2"></a>
	<!-- <div id="header2">  "Я сделаю больно - 5 секунд. По справедливости"  <br/> <a style="text-align:right">Кама Пуля </a></div> -->
	
	
	 
		
	 <div id="wtext_rigth"> 
		<div id="green_circle"></div>&nbsp;&nbsp;&nbsp;Я всегда свободен в действии, не только в словах
		<br/> 
		<div id="green_circle"></div>&nbsp;&nbsp;&nbsp;Я тебе скажу: безделье -это игрушка дьявола<br/>
		<div id="green_circle"> </div> &nbsp;&nbsp;&nbsp;Нельзя недооценивать противника ежжи
		<br/>
		<br/>
		<center> 
		 <div id="call_action2"> Успей записаться на курсы!</div>
			 
			 <a id="timer"></a><center>
			 <script>
			  updateTimer();
			var timeinterval = setInterval(updateTimer,1000);
			 </script>
		
		
		</div> 
	 <br/> 
	
		
	 </div>
	 
	 <div class="slide3">
	 <a name="slide3"></a>
	 <a id="header3">ВЫ НАМ НЕ ВЕРЕТЕ? УБЕДИТЕСЬ САМИ!</a>
	 <div id="video">Как вам это?
	 <iframe width="100%" height="100%" src="https://www.youtube.com/embed/keCaO5Yj23Q" frameborder="0" allowfullscreen></iframe>

</div>
	 <div id="video1">А вот это?
	<iframe width="100%" height="100%" src="https://www.youtube.com/embed/DXbqsjY2u_0" frameborder="0" allowfullscreen></iframe>

</div>
	 <div id="video2">Или даже это?
	<iframe width="100%" height="100%" src="https://www.youtube.com/embed/z7qiI4TkoZI" frameborder="0" allowfullscreen></iframe>

</div>
 <div class="form">
	   <form method="post" id="form1">
	   <a style="font-size:5vh">ТЕПЕРЬ УБЕДИЛИСЬ?!</a><br/><br/>	
						Ваше имя: <input type="text" name="name" placeholder="Кама" style="height:3vh"><br/>
						Email: <input type="email" name="email" placeholder="ganst01@gun.ru" style="height:3vh"><br/>
				
						<input type="submit" value="ШААА!  КЬЯЯЯЯ!" id="button_slide1">
					</form>

</div>

	 </div>
	 
</body>
</html>