<?php

	// send email information

	$to = 'komaljadvani3@gmail.com';
	$emailSubject = 'contact-form';

	$name = $_POST ['name'];
	$email = $_POST ['email'];
	$phone = $_POST ['phone'];
	$message = $_POST ['message'];


	// create body

	$body = <<<EOD
	\r\n\r\n
	Name:   $name \r\n\r\n
	Email:  $email \r\n\r\n
	PhoneNumber:  $phone \r\n\r\n
	Message:   $message
EOD;




	$headers = "From: $email\r\n";


	  mail($to, $emailSubject, $body, $headers);

	if(mail) {
	   $success="sent";
	}
	else {
	    echo '<h1>error</h1>';

	}
?>

 <?php if(isset($success)) { ?>
	<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
	<script type="text/javascript">
	   $(document).ready(function() {
	        alert("Thank You! We will contact you shortly.");
	    });
	</script>
	<?php } ?>
