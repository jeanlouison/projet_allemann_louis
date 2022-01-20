<?php

// require '../vendor/autoload.php';
// require_once './vendor/autoload.php';
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
 
class AppTools {

    /**
     * @var AppTools
     * @access private
     * @static
     */
    private static $_instance = null;

    private $_entityManager = null;

    /**
    * Constructeur de la classe
    *
    * @param void
    * @return void
    */
    private function __construct() {  

        $isDevMode = true;
        $config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);
        $conn = array(
        'host' => 'ec2-34-203-182-172.compute-1.amazonaws.com',
        'driver' => 'pdo_pgsql',
        'user' => 'nvcvuidtsncnyq',
        'password' => '93ccb1a7d274d2f9b8e05631ce102e8b70e955798ac7df54e0dc1b979e95182c',
        'dbname' => 'de0mb6nt6ionk9',
        'port' => '5432'
        );
        $this->_entityManager = EntityManager::create($conn, $config);
    }
 
    /**
    * Méthode qui crée l'unique instance de la classe
    * si elle n'existe pas encore puis la retourne.
    *
    * @param void
    * @return AppTools
    */
    public static function getInstance() {
 
        if(is_null(self::$_instance)) {
        self::$_instance = new AppTools();  
        }

        return self::$_instance;
    }   

    public function getEntityManager() {
        return $this->_entityManager;
    }
    
}
 
?>