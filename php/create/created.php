<?php

include_once $_SERVER['DOCUMENT_ROOT'] .
  '/php/includes/helpers.inc.php';

if (isset($_POST['action']) && $_POST['action'] === 'create-d') {
  if (isset($_POST['createTitle2']) && $_POST['createTitle2'] != '' && isset($_POST['createServiceDesc']) && $_POST['createServiceDesc'] != '' && isset($_POST['photoName']) && $_POST['photoName'] != '' && isset($_POST['photoPath']) && $_POST['photoPath'] != '') {

    $createTitle2 = $_POST['createTitle2'] ? html($_POST['createTitle2']) : false;
    $createServiceDesc = $_POST['createServiceDesc'] ? html($_POST['createServiceDesc']) : false;
    $photoName = $_POST['photoName'] ? html($_POST['photoName']) : false;
    $photoPath = $_POST['photoPath'] ? html($_POST['photoPath']) : false;

    include $_SERVER['DOCUMENT_ROOT'] . '/php/includes/db.inc.php';

    try {
      $sql = 'INSERT INTO `home_check-out` SET `title2`=:title2, `service-desc`=:servicedesc, `photo-name`=:name, `photo-path`=:path, `time`=:time';

      $s = $pdo->prepare($sql);
      $s->bindValue(':title2', $createTitle2);
      $s->bindValue(':servicedesc', $createServiceDesc);
      $s->bindValue(':name', $photoName);
      $s->bindValue(':path', $photoPath);
      $s->bindValue(':time', time());
      $s->execute();
      echo 'create-d';
    } catch (PDOException $e) {
      $error = 'Ошибка ввода данных createD.' . $e->getMessage();
      echo $error;
      exit();
    }
  }
}