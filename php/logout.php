<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/php/includes/access.inc.php';

if (adminIsLoggedOut()) {
    echo 'logout';
    exit();
} else
{
    echo 'login';
    exit();
}