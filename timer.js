   
	 
	 function updateTimer()
	 { 	 var nowDate=new Date();	
		 var endDate=new Date(new Date(nowDate.getFullYear(),nowDate.getMonth(),nowDate.getDate(),23,59,59,0)-nowDate);
		
	
		var str=endDate.getHours()+" : " + endDate.getMinutes()+" : " + endDate.getSeconds()
		 document.getElementById("timer").innerHTML=str; 
		  
		   
		 
	 }
	