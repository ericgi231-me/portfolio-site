<?php
require_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] !== 'PUT') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit();
}

$data = json_decode(file_get_contents("php://input"));

if (empty($data->id) || empty($data->name) || empty($data->message)) {
    http_response_code(400);
    echo json_encode(["error" => "ID, name, and message are required"]);
    exit();
}

// Validate lengths
if (strlen($data->name) > 100 || strlen($data->message) > 256) {
    http_response_code(400);
    echo json_encode(["error" => "Name or message too long"]);
    exit();
}

try {
    $query = "UPDATE guestbook SET name = :name, message = :message WHERE id = :id";
    $stmt = $db->prepare($query);
    
    $stmt->bindParam(':id', $data->id);
    $stmt->bindParam(':name', $data->name);
    $stmt->bindParam(':message', $data->message);
    
    if ($stmt->execute()) {
        if ($stmt->rowCount() > 0) {
            echo json_encode([
                "success" => true,
                "message" => "Entry updated successfully"
            ]);
        } else {
            http_response_code(404);
            echo json_encode(["error" => "Entry not found"]);
        }
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Unable to update entry"]);
    }
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Database error: " . $e->getMessage()]);
}
?>