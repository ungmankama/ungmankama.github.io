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
		����� �� ����� ����, ��, ����� �����.
	 </div>
	 
	 
	 
	 <br/>
				   <form method="post" id="form">
						���� ���: <input type="text" name="name" placeholder="����" style="height:3vh"><br/>
						Email: <input type="email" name="email" placeholder="ganst01@gun.ru" style="height:3vh"><br/>
				
						<input type="submit" value="����!  ������!" id="button_slide1">
					</form>
	 </div>

	 <div class="slide2">
	  <a name="slide2"></a>
	<!-- <div id="header2">  "� ������ ������ - 5 ������. �� ��������������"  <br/> <a style="text-align:right">���� ���� </a></div> -->
	
	
	 
		
	 <div id="wtext_rigth"> 
		<div id="green_circle"></div>&nbsp;&nbsp;&nbsp;� ������ �������� � ��������, �� ������ � ������
		<br/> 
		<div id="green_circle"></div>&nbsp;&nbsp;&nbsp;� ���� �����: �������� -��� ������� �������<br/>
		<div id="green_circle"> </div> &nbsp;&nbsp;&nbsp;������ ������������� ���������� ����
		<br/>
		<br/>
		<center> 
		 <div id="call_action2"> ����� ���������� �� �����!</div>
			 
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
	 <a id="header3">�� ��� �� ������? ��������� ����!</a>
	 <div id="video">��� ��� ���?
	 <iframe width="100%" height="100%" src="https://www.youtube.com/embed/keCaO5Yj23Q" frameborder="0" allowfullscreen></iframe>

</div>
	 <div id="video1">� ��� ���?
	<iframe width="100%" height="100%" src="https://www.youtube.com/embed/DXbqsjY2u_0" frameborder="0" allowfullscreen></iframe>

</div>
	 <div id="video2">��� ���� ���?
	<iframe width="100%" height="100%" src="https://www.youtube.com/embed/z7qiI4TkoZI" frameborder="0" allowfullscreen></iframe>

</div>
 <div class="form">
	   <form method="post" id="form1">
	   <a style="font-size:5vh">������ ���������?!</a><br/><br/>	
						���� ���: <input type="text" name="name" placeholder="����" style="height:3vh"><br/>
						Email: <input type="email" name="email" placeholder="ganst01@gun.ru" style="height:3vh"><br/>
				
						<input type="submit" value="����!  ������!" id="button_slide1">
					</form>

</div>

	 </div>
	 
</body>
</html>