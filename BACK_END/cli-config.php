<?php
use Doctrine\ORM\Tools\Console\ConsoleRunner;
require_once 'bootstrap.php';
require_once "./api/AppTools.php";
// return ConsoleRunner::createHelperSet($entityManager);
return ConsoleRunner::createHelperSet(
    AppTools::getInstance()->getEntityManager()
);