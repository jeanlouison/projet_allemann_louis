<?php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
date_default_timezone_set('America/Lima');
require_once "vendor/autoload.php";
require "./api/AppTools.php";
$entityManager = AppTools::getInstance()->getEntityManager();