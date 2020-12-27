<?php
// echo "ID: ". $_POST["ID"] . "<br/>";
// echo "Password: ". $_POST["pwd"] . "<br/>";
// echo "Confirm Password: ". $_POST["cpwd"] . "<br/>";
// echo "First Name: ". $_POST["fname"] . "<br/>";
// echo "Last Name: ". $_POST["lname"] . "<br/>";
// echo "Birthdate: ". $_POST["birth"] . "<br/>";
// echo "Email: ". $_POST["email"] . "<br/>";
// echo "TEL: ". $_POST["tel"] . "<br/>";
$data = json_decode(file_get_contents("php://input"), true);
$response = json_encode($data);
echo $response;
?>