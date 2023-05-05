<?php
   $name = $_POST['name'];
   $email = $_POST['email'];
   $phone = $_POST['phone'];
   $website = $_POST['website'];
   $message = $_POST['message'];

    if(!empty($email) && !empty($message)){
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){

        }else{
            echo "Enter a valid email address!";
        }

    }else{
        echo "Email and password field is required!";
    }
?>