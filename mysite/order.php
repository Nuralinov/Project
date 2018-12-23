<?php
	if (count($_POST)>0) {
		$name = $_POST['name'];
		$surname = $_POST['surname'];
		$phone = $_POST['phone'];
		$qiwi = $_POST['qiwi'];
		
		
		file_put_contents("data.txt", "$name $surname $phone $qiwi\n", FILE_APPEND);
		echo "Congratulation!";

	}

?>



<html>

	<head>
		
  	</head>
	<body style="background-color: #2F4F4F">

		

		<div class="order" style="width:30%; background-color:  #7FFFD4; border-radius: 40px 10px ; padding: 15px; margin: auto; margin-top: 200px;" >

			<p>
				You should pay 
				total: <span id="summaa">79</span>$ (<span id="itemss"></span>)

			</p>


			<form method="post">
				Name<br>
					
				<input type="text" name="name"><br>
				
				Surname <br>
				
				<input type="text" name="surname"><br>

				Phone <br>

				<input type="text" name="phone"><br>

				QIWI<br>
				
				<input type="text" name="qiwi"><br>
				
				<input type="submit" value="Send">
			</form>
		</div>
	</body>
</html>	
