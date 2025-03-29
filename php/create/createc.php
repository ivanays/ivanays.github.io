<?php

include_once $_SERVER['DOCUMENT_ROOT'] .
  '/php/includes/helpers.inc.php';

if (isset($_POST['action']) && $_POST['action'] === 'create-c') {
  if (isset($_POST['createStockDesc']) && $_POST['createStockDesc'] != '' && isset($_POST['createStockValue']) && $_POST['createStockValue'] != '') {

    $createStockDesc = $_POST['createStockDesc'] ? html($_POST['createStockDesc']) : false;
    $createStockValue = $_POST['createStockValue'] ? html($_POST['createStockValue']) : false;

    include $_SERVER['DOCUMENT_ROOT'] . '/php/includes/db.inc.php';

    try {
      $sql = 'INSERT INTO `stocks` SET `stock-desc`=:stockdesc, `stock-value`=:stockvalue, `time`=:time';

      $s = $pdo->prepare($sql);
      $s->bindValue(':stockdesc', $createStockDesc);
      $s->bindValue(':stockvalue', $createStockValue);
      $s->bindValue(':time', time());
      $s->execute();
      echo 'create-c';
    } catch (PDOException $e) {
      $error = 'Ошибка ввода данных createC.' . $e->getMessage();
      echo $error;
      exit();
    }
  }
}