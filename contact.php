<?php
	if(isset($_POST['submit'])){
		$name=$_POST['to'];
    	$email=$_POST['email'];
    	$phone=$_POST['phone'];
		$text_mssg=$_POST['message'];
    	$to= $email;
		$from= 'anand.aditya0803@gmail.com';
		$subject='Contact Me Reply';
		$message="Hey ".$name."\nThankyou for contacting me! \nYour message '".$text_mssg."' , was successfully delivered from \nEmail: '".$email."' \nContact number: ".$phone."\n"."Thankyou for writing in! Have a good day :-)".".\n\n\nRegards\nAditya Anand\n"."anand.aditya0803@gmail.com";
		
		$headers="From: ".$from;
		if(mail($to, $subject, $message, $headers)){
			header("Location: success_page.html");
		}
		else{
			header("Location: error_page.html");
		}
	}
?>