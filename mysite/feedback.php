<?php
	if (count($_POST)>0) {
		$name = $_POST['feedback'];
		file_put_contents("feedback.txt", "$name\n", FILE_APPEND);
		echo "ThanQ";

	}

?>



<html>

	<head>
		
  	</head>
	<body style="background-color: #2F4F4F">

		<div class="order" style="width:30%; background-color:  #7FFFD4; border-radius: 40px 10px ; padding: 15px; margin: auto; margin-top: 200px;" >

			<p>
				Leave your wishes
			</p>

			<form method="post">
				<input type="text" name = "feedback" style="width: 200px; height: 50px;">
				<input type="submit" value="Send">
			</form>
		</div>
	</body>
</html>	