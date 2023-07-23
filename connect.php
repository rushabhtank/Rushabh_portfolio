<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['phone-number'];
    
    $conn = new mysqli('localhost','root','','my_portfolio');

    if ($conn->connect_error){
        die('Connection failed : '.$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("insert into feedback(name,email,phone-number)values(?,?,?)");

        $stmt->bind_param("sss",$name,$email,$message);
        $stmt->execute();
        echo "<H1>Thanks for the Feedback.......</H1>";
        $stmt->close();
        $conn->close();
    }
?>