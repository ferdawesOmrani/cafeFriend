<?php
  $receiving_email_address = 'ferdawesomrani1@gmail.com';

  if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
    include( $php_email_form );
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }

  $contact = new PHP_Email_Form;
  $contact->ajax = true;
  
  $contact->to = $receiving_email_address;
  $contact->from_name = $_POST['name'];
  $contact->from_email = $_POST['email'];
  $contact->subject = $_POST['subject'];

  $contact->add_message( $_POST['name'], 'From');
  $contact->add_message( $_POST['email'], 'Email');
  $contact->add_message( $_POST['message'], 'Message', 10);

  echo $contact->send();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ecommerce";

// Créer une connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if ($data) {
        foreach ($data as $product) {
            $customer_name = 'Client'; // Remplacez par le nom du client réel si disponible
            $product_name = $product['name'];
            $quantity = 1; // Vous pouvez modifier cette valeur en fonction de vos besoins
            $price = $product['price']; // Vous pouvez stocker le prix si nécessaire

            $sql = "INSERT INTO orders (customer_name, product_name, quantity) VALUES ('$customer_name', '$product_name', $quantity)";
            
            if ($conn->query($sql) === TRUE) {
                echo "Commande pour $product_name créée avec succès.<br>";
            } else {
                echo "Erreur: " . $sql . "<br>" . $conn->error;
            }
        }
    }
    $conn->close();
    exit;
}
?>