<?php

include_once $_SERVER['DOCUMENT_ROOT'] .
    '/php/includes/helpers.inc.php';

if (isset($_POST['action']) && $_POST['action'] === 'create-a') {
    if (isset($_POST['startDate']) && $_POST['startDate'] != '' && isset($_POST['startTime']) && $_POST['startTime'] != '' && isset($_POST['endDate']) && $_POST['endDate'] != '' && isset($_POST['endTime']) && $_POST['endTime'] != '') {

        $startDate = $_POST['startDate'] ? html($_POST['startDate']) : false;
        $startTime = $_POST['startTime'] ? html($_POST['startTime']) : false;
        $endDate = $_POST['endDate'] ? html($_POST['endDate']) : false;
        $endTime = $_POST['endTime'] ? html($_POST['endTime']) : false;

        include $_SERVER['DOCUMENT_ROOT'] . '/php/includes/db.inc.php';

        try 
        {
            $sql = 'INSERT INTO `windows` SET `start-date`=:startdate, `start-time`=:starttime, `end-date`=:enddate, `end-time`=:endtime,  `time`=:time';

            $s = $pdo->prepare($sql);
            $s->bindValue(':startdate', $startDate);
            $s->bindValue(':starttime', $startTime);
            $s->bindValue(':enddate', $endDate);
            $s->bindValue(':endtime', $endTime);
            $s->bindValue(':time', time());
            $s->execute();
            echo 'create-a';
        }
        catch (PDOException $e)
        {
            $error = 'Ошибка ввода данных createA.' . $e->getMessage();
            echo $error;
            exit();
        }
    }
}