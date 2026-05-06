<?php
require_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit();
}

// Get posted data
$data = json_decode(file_get_contents("php://input"));

$name = isset($data->name) ? trim($data->name) : '';
$message = isset($data->message) ? trim($data->message) : null;

// Validate input
if ($name === '') {
    http_response_code(400);
    echo json_encode(["error" => "Name is required"]);
    exit();
}

// Validate lengths
if (strlen($name) > 100) {
    http_response_code(400);
    echo json_encode(["error" => "Name must be 100 characters or less"]);
    exit();
}

if ($message !== null && strlen($message) > 256) {
    http_response_code(400);
    echo json_encode(["error" => "Message must be 256 characters or less"]);
    exit();
}

if ($message === '') {
    $message = null;
}

try {
    $query = "INSERT INTO guestbook (name, message) VALUES (:name, :message)";
    $stmt = $db->prepare($query);
    
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':message', $message);
    
    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode([
            "success" => true,
            "id" => $db->lastInsertId(),
            "message" => "Entry created successfully"
        ]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Unable to create entry"]);
    }
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Database error: " . $e->getMessage()]);
}
?>