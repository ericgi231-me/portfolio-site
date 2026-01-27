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

// Validate input
if (empty($data->name) || empty($data->message)) {
    http_response_code(400);
    echo json_encode(["error" => "Name and message are required"]);
    exit();
}

// Validate lengths
if (strlen($data->name) > 100) {
    http_response_code(400);
    echo json_encode(["error" => "Name must be 100 characters or less"]);
    exit();
}

if (strlen($data->message) > 256) {
    http_response_code(400);
    echo json_encode(["error" => "Message must be 256 characters or less"]);
    exit();
}

try {
    $query = "INSERT INTO guestbook (name, message) VALUES (:name, :message)";
    $stmt = $db->prepare($query);
    
    $stmt->bindParam(':name', $data->name);
    $stmt->bindParam(':message', $data->message);
    
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