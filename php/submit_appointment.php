<?php
include 'connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $date = htmlspecialchars($_POST['date']);
    $time = htmlspecialchars($_POST['time']);
    $service = htmlspecialchars($_POST['service']);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format. Please provide a valid email address.";
        exit;
    }

    if (!preg_match("/^[0-9]{10}$/", $phone)) {
        echo "Invalid phone number format. Please enter a 10-digit phone number.";
        exit;
    }

    $stmt = $conn->prepare("INSERT INTO appointments (name, email, phone, date, time, service) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $name, $email, $phone, $date, $time, $service);

    if ($stmt->execute()) {
        echo "Thank you, $name! Your appointment for $service on $date at $time has been scheduled.";
    } else {
        echo "There was an error scheduling your appointment. Please try again later.";
        error_log("Error executing query: " . $stmt->error);
    }

    $stmt->close();
}

$conn->close();
?>