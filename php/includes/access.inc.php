<?php
include_once 'validate.inc.php';
include_once 'helpers.inc.php';

function adminIsLoggedIn()
{
    if (isset($_POST['action']) and $_POST['action'] == 'login') {
        if (!isset($_POST['email']) or $_POST['email'] == '' or !isset($_POST['password']) or $_POST['password'] == '') {
            $error = 'Пожалуйста, заполните поля.';
            echo $error;
            //include 'error.html.php';
            exit();
        }

        if (!emailValidate($_POST['email'])) {
            $error = 'Некорректный адрес эл. почты.';
            echo $error;
            //include 'error.html.php';
            exit();
        }

        $email = $_POST['email'] ? html($_POST['email']) : false;
        $password = $_POST['password'] ? html($_POST['password']) : false;

        //$password = md5($password . 'adminka');
        //$password = md5($password . 'adminka');


        if (databaseContainsAdmin($email, $password)) {
            session_start();
            $_SESSION['loggedIn'] = TRUE;
            $_SESSION['email'] = $email;
            $_SESSION['password'] = $password;
            return TRUE;
        } else {
            session_start();
            unset($_SESSION['loggedIn']);
            unset($_SESSION['email']);
            unset($_SESSION['password']);
            $error = 'Указанное имя или пароль были неверны..';
            echo $error;
            //include 'error.html.php';
            exit();
        }
    }

    // if (isset($_POST['action']) and $_POST['action'] == 'logout') {
    //     session_start();
    //     unset($_SESSION['loggedIn']);
    //     unset($_SESSION['email']);
    //     unset($_SESSION['password']);
    //     //header('Location: ' . $_POST['goto']);
    //     exit();
    // }

    session_start();
    if (isset($_SESSION['loggedIn'])) {
        return databaseContainsAdmin($_SESSION['email'], $_SESSION['password']);
    }
}

function databaseContainsAdmin($email, $password)
{

    include 'db.inc.php';

    try {
        $sql = 'SELECT COUNT(*) FROM admin
        WHERE email = :email AND password = :password';
        $s = $pdo->prepare($sql);
        $s->bindValue(':email', $email);
        $s->bindValue(':password', $password);
        $s->execute();
    } catch (PDOException $e) {
        $error = 'Ошибка службы аунтификации.';
        echo $error;
        //include 'error.html.php';
        exit();
    }

    $row = $s->fetch();

    if ($row[0] > 0) {
        return TRUE;
    } else {
        return FALSE;
    }
}

function adminHasRole($role)
{
    include 'db.inc.php';

    try {
        $sql = "SELECT COUNT(*) FROM admin
        WHERE email = :email AND role = :role";
        $s = $pdo->prepare($sql);
        $s->bindValue(':email', $_SESSION['email']);
        $s->bindValue(':role', $role);
        $s->execute();
    } catch (PDOException $e) {
        $error = 'Ошибка службы привилегий.';
        echo $error;
        //include 'error.html.php';
        exit();
    }

    $row = $s->fetch();

    if ($row[0] > 0) {
        return TRUE;
    } else {
        return FALSE;
    }
}
function adminIsLoggedOut() 
{
    if (isset($_POST['action']) and $_POST['action'] == 'logout') {
        session_start();
        unset($_SESSION['loggedIn']);
        unset($_SESSION['email']);
        unset($_SESSION['password']);
        return true;
    } else
    {
        return false;
    }
}