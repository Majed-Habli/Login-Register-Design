<?php
include('connection.php');

$response = array();
$json_data = file_get_contents("php://input");
$data = json_decode($json_data,true);
$email = $data["email"];
$password = $data['password'];


$query = $mysqli->prepare('SELECT id, name, password, email FROM users WHERE email = ?');
$query->bind_param('s', $email);
$query->execute();

$query->store_result();
$query->bind_result($id, $name,$password, $email);
$query->fetch();

$num_rows = $query->num_rows();
if ($num_rows == 0) {
    $response['status'] = "user not found";
} else {
    if ($password) {
        $response['status'] = 'logged in';
        $response['id'] = $id;
        $response['name'] = $name;
        $response['email'] = $email;
    } else {
        $response['status'] = "wrong password";
    }
}
echo json_encode($response);
