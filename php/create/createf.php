<?php

include_once $_SERVER['DOCUMENT_ROOT'] .
  '/php/includes/helpers.inc.php';

if (isset($_POST['action']) && $_POST['action'] === 'create-f') {

  if (isset($_POST['photoName']) && $_POST['photoName'] != '' && isset($_POST['photoPath']) && $_POST['photoPath'] != '') {

    $photoName = $_POST['photoName'] ? html($_POST['photoName']) : false;
    $photoPath = $_POST['photoPath'] ? html($_POST['photoPath']) : false;

    include $_SERVER['DOCUMENT_ROOT'] . '/php/includes/db.inc.php';

    try {
      $sql = 'INSERT INTO `certificate` SET `photo-name`=:name, `photo-path`=:path, `time`=:time';

      $s = $pdo->prepare($sql);
      $s->bindValue(':name', $photoName);
      $s->bindValue(':path', $photoPath);
      $s->bindValue(':time', time());
      $s->execute();
      echo 'create-f';
    } catch (PDOException $e) {
      $error = 'Ошибка ввода данных createF.' . $e->getMessage();
      echo $error;
      exit();
    }
  }
}