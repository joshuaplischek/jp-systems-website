<?php
// =======================
// DEBUG & CORS
// =======================
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, OPTIONS");

// Preflight-Request (für CORS bei POST)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// =======================
// POST Request Handling
// =======================
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['success' => false, 'errors' => ['Only POST is allowed']]);
    exit;
}

header("Content-Type: application/json");

// =======================
// JSON Input lesen
// =======================
$input = file_get_contents('php://input');
$params = json_decode($input, true);

$response = ['success' => false, 'errors' => []];

// =======================
// Validierung
// =======================
$name    = isset($params['name']) ? trim($params['name']) : '';
$email   = isset($params['email']) ? trim($params['email']) : '';
$message = isset($params['message']) ? trim($params['message']) : '';

if ($name === '') {
    $response['errors'][] = 'Name is required.';
}
if ($email === '') {
    $response['errors'][] = 'Email is required.';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $response['errors'][] = 'Invalid email format.';
}
if ($message === '') {
    $response['errors'][] = 'Message is required.';
}

if (!empty($response['errors'])) {
    http_response_code(400);
    echo json_encode($response);
    exit;
}

// =======================
// Mail versenden
// =======================
$recipient = 'plischekjoshua@web.de';
$subject   = "Kontaktformular von $name <$email>";

$safeName    = htmlspecialchars(strip_tags($name));
$safeEmail   = htmlspecialchars(strip_tags($email));
$safeMessage = nl2br(htmlspecialchars(strip_tags($message)));

$body = "
    <strong>Von:</strong> {$safeName} &lt;{$safeEmail}&gt;<br><br>
    <strong>Nachricht:</strong><br>{$safeMessage}
";

$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=utf-8',
    'From: plischekjoshua@web.de',
    'X-Mailer: PHP/' . phpversion()
];

$mailSent = mail($recipient, $subject, $body, implode("\r\n", $headers));

if ($mailSent) {
    $response['success'] = true;
    echo json_encode($response);
} else {
    http_response_code(500);
    $response['errors'][] = 'Failed to send email.';
    error_log("E-Mail konnte nicht gesendet werden: $subject"); // optionales Logging
    echo json_encode($response);
}
