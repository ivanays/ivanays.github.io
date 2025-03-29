<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/php/includes/access.inc.php';

$role_1 = '';
$role_2 = '';
$role_3 = '';
$role_4 = '';

$role_1 = 'super-admin';
$role_2 = 'admin';
$role_3 = 'moderator';
$role_4 = 'anonymous';

if (adminIsLoggedIn()) 
{
    echo 'login';
    if (adminHasRole($role_1)) {
        echo $role_1;
        exit();
    }

    if (adminHasRole($role_2)) {
        echo $role_2;
        exit();
    }

    if (adminHasRole($role_3)) {
        echo $role_3;
        exit();
    }

    if (adminHasRole($role_4)) {
        echo $role_4;
        exit();
    }
    exit();
} else {
    echo 'logout';
    exit();
}


