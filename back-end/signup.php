<?php
include('connection.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin");

$response = array();
$json_data = file_get_contents("php://input");
$data = json_decode($json_data,true);

$name = $data["name"];
$email = $data["email"];
$gender = $data["gender"];
$password = $data['password'];

$check_email = $mysqli->prepare("SELECT email FROM users WHERE email = ?");
$check_email->bind_param('s', $email);
$check_email-> execute();
$check_email->store_result();
$existing_email = $check_email-> num_rows();

if($existing_email == 0){
    $query = $mysqli->prepare('INSERT INTO users (name, password, gender, email) VALUES (?, ?, ?, ?)');
    $query->bind_param('ssss', $name,$password,$gender,$email);
    $query->execute();
    if ($query->execute()) {
        $response['status'] = 'signed up';
        $response['name'] = $name;
        $response['email'] = $email;
    } else {
        $response['status'] = "wrong password";
    }
}else{
    $response['status'] = 'failed';
    $response['error'] = ' email already exists.';
}

echo json_encode($response);