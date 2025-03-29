<?php

include_once $_SERVER['DOCUMENT_ROOT'] .
  '/php/includes/helpers.inc.php';

if (isset($_POST['action']) && $_POST['action'] === 'create-g') {
  if (isset($_POST['createPhoneCode1']) && $_POST['createPhoneCode1'] != '' && isset($_POST['createPhoneCode2']) && $_POST['createPhoneCode2'] != '' && isset($_POST['createPhoneCode3']) && $_POST['createPhoneCode3'] != '' && isset($_POST['createPhoneCode4']) && $_POST['createPhoneCode4'] != '') {

    $createPhoneCode1 = $_POST['createPhoneCode1'] ? html($_POST['createPhoneCode1']) : false;
    $createPhoneCode2 = $_POST['createPhoneCode2'] ? html($_POST['createPhoneCode2']) : false;
    $createPhoneCode3 = $_POST['createPhoneCode3'] ? html($_POST['createPhoneCode3']) : false;
    $createPhoneCode4 = $_POST['createPhoneCode4'] ? html($_POST['createPhoneCode4']) : false;


    include $_SERVER['DOCUMENT_ROOT'] . '/php/includes/db.inc.php';

    try {
      $sql = 'INSERT INTO `phones` SET `code1`=:code1, `code2`=:code2, `code3`=:code3, `code4`=:code4, `time`=:time';

      $s = $pdo->prepare($sql);
      $s->bindValue(':code1', $createPhoneCode1);
      $s->bindValue(':code2', $createPhoneCode2);
      $s->bindValue(':code3', $createPhoneCode3);
      $s->bindValue(':code4', $createPhoneCode4);
      $s->bindValue(':time', time());
      $s->execute();
      echo 'create-g';
    } catch (PDOException $e) {
      $error = 'Ошибка ввода данных createG.' . $e->getMessage();
      echo $error;
      exit();
    }
  }
}