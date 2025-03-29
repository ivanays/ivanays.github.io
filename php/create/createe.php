<?php

include_once $_SERVER['DOCUMENT_ROOT'] .
  '/php/includes/helpers.inc.php';

if (isset($_POST['action']) && $_POST['action'] === 'create-e') {
  if (isset($_POST['createName']) && $_POST['createName'] != '' && isset($_POST['createReviewDesc']) && $_POST['createReviewDesc'] != '') {

    $createName = $_POST['createName'] ? html($_POST['createName']) : false;
    $createReviewDesc = $_POST['createReviewDesc'] ? html($_POST['createReviewDesc']) : false;

    include $_SERVER['DOCUMENT_ROOT'] . '/php/includes/db.inc.php';

    try {
      $sql = 'INSERT INTO `reviews` SET `name`=:name, `review-desc`=:reviewdesc, `time`=:time';

      $s = $pdo->prepare($sql);
      $s->bindValue(':name', $createName);
      $s->bindValue(':reviewdesc', $createReviewDesc);
      $s->bindValue(':time', time());
      $s->execute();
      echo 'create-e';
    } catch (PDOException $e) {
      $error = 'Ошибка ввода данных createE.' . $e->getMessage();
      echo $error;
      exit();
    }
  }
}