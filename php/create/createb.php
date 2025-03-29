<?php

include_once $_SERVER['DOCUMENT_ROOT'] .
  '/php/includes/helpers.inc.php';

if (isset($_POST['action']) && $_POST['action'] === 'create-b') {
  if (isset($_POST['createTitle1']) && $_POST['createTitle1'] != '' && isset($_POST['createTitle2']) && $_POST['createTitle2'] != '' && isset($_POST['createServiceDesc']) && $_POST['createServiceDesc'] != '' && isset($_POST['photoNameSlide']) && $_POST['photoNameSlide'] != '' && isset($_POST['photoPathSlide']) && $_POST['photoPathSlide'] != '' && isset($_POST['photoNameService']) && $_POST['photoNameService'] != '' && isset($_POST['photoPathService']) && $_POST['photoPathService'] != '' && isset($_POST['createAdvantageDesc']) && $_POST['createAdvantageDesc'] != '' && isset($_POST['createContraindicationDesc']) && $_POST['createContraindicationDesc'] != '' && isset($_POST['createPriceDesc']) && $_POST['createPriceDesc'] != '' && isset($_POST['createPriceValue']) && $_POST['createPriceValue'] != '') {

    $createTitle1 = $_POST['createTitle1'] ? html($_POST['createTitle1']) : false;
    $createTitle2 = $_POST['createTitle2'] ? html($_POST['createTitle2']) : false;
    $createServiceDesc = $_POST['createServiceDesc'] ? html($_POST['createServiceDesc']) : false;
    $photoNameSlide = $_POST['photoNameSlide'] ? html($_POST['photoNameSlide']) : false;
    $photoPathSlide = $_POST['photoPathSlide'] ? html($_POST['photoPathSlide']) : false;
    $photoNameService = $_POST['photoNameService'] ? html($_POST['photoNameService']) : false;
    $photoPathService = $_POST['photoPathService'] ? html($_POST['photoPathService']) : false;
    $createAdvantageDesc = $_POST['createAdvantageDesc'] ? html($_POST['createAdvantageDesc']) : false;
    $createContraindicationDesc = $_POST['createContraindicationDesc'] ? html($_POST['createContraindicationDesc']) : false;
    $createPriceDesc = $_POST['createPriceDesc'] ? html($_POST['createPriceDesc']) : false;
    $createPriceValue = $_POST['createPriceValue'] ? html($_POST['createPriceValue']) : false;

    include $_SERVER['DOCUMENT_ROOT'] . '/php/includes/db.inc.php';

    try {
      $sql = 'INSERT INTO `services` SET `slide-name`=:slidename, `slide-path`=:slidepath, `title1`=:title1, `title2`=:title2,   `service-desc`=:servicedesc, `photo-name`=:photoname, `photo-path`=:photopath, `advant-desc`=:advantagedesc, `contrain-desc`=:contraindicationdesc, `price-desc`=:pricedesc, `price-value`=:pricevalue, `time`=:time';

      $s = $pdo->prepare($sql);
      $s->bindValue(':slidename', $photoNameSlide);
      $s->bindValue(':slidepath', $photoPathSlide);
      $s->bindValue(':title1', $createTitle1);
      $s->bindValue(':title2', $createTitle2);
      $s->bindValue(':servicedesc', $createServiceDesc);
      $s->bindValue(':photoname', $photoNameService);
      $s->bindValue(':photopath', $photoPathService);
      $s->bindValue(':advantagedesc', $createAdvantageDesc);
      $s->bindValue(':contraindicationdesc', $createContraindicationDesc);
      $s->bindValue(':pricedesc', $createPriceDesc);
      $s->bindValue(':pricevalue', $createPriceValue);
      $s->bindValue(':time', time());
      $s->execute();
      echo 'create-b';
    } catch (PDOException $e) {
      $error = 'Ошибка ввода данных createB.' . $e->getMessage();
      echo $error;
      exit();
    }
  }
}