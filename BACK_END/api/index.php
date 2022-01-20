<?php
use Slim\Factory\AppFactory;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Tuupola\Middleware\JwtAuthentication as JwtAuthentication;
use Firebase\JWT\JWT;

require_once '../vendor/autoload.php';
require_once 'AppTools.php';
require_once '../src/Client.php';
require_once '../src/Product.php';

$app = AppFactory::create();

// Config authenticator Tuupola
$app->add(new JwtAuthentication([
    "secret" => "pouetpouet",
    "attribute" => "token",
    "header" => "Authorization",
    "regexp" => "/Bearer\s+(.*)$/i",
    "secure" => false,
    "algorithm" => ["HS256"],

    "path" => ["/api"],
    "ignore" => [
        "/api/products",
        "/api/login",
        "/api/createAccount"
    ],
    "error" => function ($response, $arguments) {
        $data = array('ERREUR' => 'Connexion', 'ERREUR' => 'JWT Non valide', 'ARGUMENTS' => $arguments);
        $response = $response->withStatus(401);
        return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
    }
]));

$app->get('/api/auth/{username}', function (Request $request, Response $response, $args) {
    $username = $args['username'];
    if ($username) {
        $data["username"] = $username;
        $response = addHeaders($response);
        $response = createJWT($response, $username);
        $response->getBody()->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    } else {
        $response = $response->withStatus(401);
    }

    return $response;
});

$app->post('/api/login', function (Request $request, Response $response, $args) {
    $entityManager = AppTools::getInstance()->getEntityManager();
    $clientRepository = $entityManager->getRepository("Client");
    $isRequestValid = true;

    $body = $request->getParsedBody();
    $username = $body['username'] ?? "";
    $password = $body['password'] ?? "";

    $clientRepository = $entityManager->getRepository("Client");
    $client = $clientRepository->findOneBy([
        'username' => $username
    ]);

    if (!$client) {
        $isRequestValid = false;
    } else {
        $isRequestValid = password_verify($password, $client->getPassword());
    }

    if ($isRequestValid) {
        $data["username"] = $username;
        $response = addHeaders($response);
        $response = createJWT($response, $username);
        $response->getBody()->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    } else {
        $data["username"] = $username;
        $response = $response->withStatus(401);
        $response->getBody()->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    }
    return $response;
});

$app->post('/api/createAccount', function (Request $request, Response $response, $args) {
    $entityManager = AppTools::getInstance()->getEntityManager();
    $clientRepository = $entityManager->getRepository("Client");

    $isRequestValid = true;

    $body = $request->getParsedBody();
    foreach($body as $arg) {
        error_log($arg);
    }
    $username = $body['username'] ?? "";
    $password = $body['password'] ?? "";

    // Vérification de l'existence des paramètres suivants
    $isRequestValid = ($password != "" && $username != "");

    // Verification de l'existence du nom d'utilisateur    
    $isRequestValid = (0 === $clientRepository->count(['username'=>$username]));

    error_log('username : ' . $username . 'est présent ' . $clientRepository->count(['username'=>$username]) . 'fois.');

    if ($isRequestValid) {

        $firstname = $body['firstname'] ?? "";
        $lastname = $body['lastname'] ?? "";
        $phone = $body['phone'] ?? "";
        $email = $body['email'] ?? "";
        $sex = $body['sex'] ?? "M";
        if ($sex[0] == 'M') $sex = 'M';
        if ($sex[0] == 'F') $sex = 'F';

        $newClient = new Client();
        $newClient->setUsername($username);
        $newClient->setPassword(
            password_hash($password, PASSWORD_BCRYPT)
        );
        $newClient->setFirstname($firstname);
        $newClient->setLastname($lastname);
        $newClient->setPhone($phone);
        $newClient->setEmail($email);
        $newClient->setSex($sex);
        $entityManager->persist($newClient);
        $entityManager->flush();

        $data["username"] = $username;
        $response = addHeaders($response);
        $response = createJWT($response, $username);
        $response->getBody()->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    } else {
        $data["username"] = $username;
        $response = $response->withStatus(401);
        $response->getBody()->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    }
    return $response;
});

$app->post('/api/updateAccount', function (Request $request, Response $response, $args) {
    $entityManager = AppTools::getInstance()->getEntityManager();
    $clientRepository = $entityManager->getRepository("Client");
    $body = $request->getParsedBody();

    $token = $request->getAttribute('token');
    $username = $token['username'];
    
    // Verification de l'existence du nom d'utilisateur    
    $clientRepository = $entityManager->getRepository("Client");
    $client = $clientRepository->findOneBy([
        'username' => $username
    ]);

    $isRequestValid = ($client != null);

    if ($isRequestValid) {

        if (IsValid($body['firstname'])) $firstname = $body['firstname'];
        if (IsValid($body['lastname'])) $lastname = $body['lastname'];
        if (IsValid($body['phone'])) $phone = $body['phone'];
        if (IsValid($body['email'])) $email = $body['email'];
        if (IsValid($body['sex'])) $sex = $body['sex'];
        if (IsValid($body['password'])) $password = $body['password'];

        if (IsValid($password)) $client->setPassword(
            password_hash($password, PASSWORD_BCRYPT)
        );
        if (IsValid($firstname)) $client->setFirstname($firstname);
        if (IsValid($lastname)) $client->setLastname($lastname);
        if (IsValid($phone)) $client->setPhone($phone);
        if (IsValid($email)) $client->setEmail($email);
        if (IsValid($sex)) $client->setSex($sex);
        $entityManager->persist($client);
        $entityManager->flush();

        $data["username"] = $username;
        $response = addHeaders($response);
        $response = createJWT($response, $username);
        $response->getBody()->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    } else {
        $data["username"] = $username;
        $response = $response->withStatus(401);
        $response->getBody()->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    }
    return $response;
});


$app->get('/api/infos', function (Request $request, Response $response, $args) {
    $entityManager = AppTools::getInstance()->getEntityManager();
    $clientRepository = $entityManager->getRepository("Client");
    $isRequestValid = true;
    
    $token = $request->getAttribute('token');
    $username = $token['username'];
    
    error_log('username demandé: ' . $username);

    $isRequestValid = $username != '';

    $client = $clientRepository->findOneBy(['username'=>$username]);

    $isRequestValid = ($client != null);

    $data = [
        'username' => $client->getUsername(),
        'firstname' => $client->getFirstname(),
        'lastname' => $client->getLastname(),
        'phone' => $client->getPhone(),
        'email' => $client->getEmail(),
        'sex' => $client->getSex()
    ];
        
    if ($isRequestValid) {
        $response = addHeaders($response);
        $response->getBody()->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    } else {
        $response = $response->withStatus(401);
        $response->getBody()->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    }

    return $response;
});

$app->get('/api/products', function(Request $request, Response $response, $args) {
    $entityManager = AppTools::getInstance()->getEntityManager();
    $productRepository = $entityManager->getRepository("Product");
    $products = $productRepository->findAll();

    $data = array();
    foreach($products as $product) {
        $productInfo = array(
            "id" => $product->getId(),
            "ref" => $product->getRef(),
            "libelle" => $product->getLibelle(),
            "prix" => $product->getPrix(),
            "gamepass" => $product->getGamepass(),
            "image" => $product->getImage()
        );
        array_push($data, $productInfo);
    }

    $response = addHeaders($response);
    $response->getBody()->write(json_encode($data));
    return $response;
});

function addHeaders($response) {
    $response = $response->withHeader("Content-Type", "application/json")
        ->withHeader("Access-Control-Allow-Origin", "https://tp06-allemann-louis.herokuapp.com")
        ->withHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
        ->withHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
        ->withHeader("Access-Control-Expose-Headers", "Authorization");

    return $response;
}

function createJWT($response, $username) {
    $issuedAt = time();
    $expirationTime = $issuedAt + 600; // + 10 minutes
    $payload = array(
      'username' => $username,
      'iat' => $issuedAt,
      'exp' => $expirationTime
    );
  
    $token_jwt = JWT::encode($payload, "pouetpouet", "HS256");
    $response = $response->withHeader("Authorization", "Bearer {$token_jwt}");
    return $response;
}

function IsValid($str){
    return ($str != null && trim($str) !== '');
}

// Run app
$app->run();

?>